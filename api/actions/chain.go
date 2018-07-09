package actions

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os/exec"
	"strings"

	"deco.network/komodo/chainmanager/api/models"
	"github.com/gobuffalo/buffalo"
	"github.com/pkg/errors"
)

func Health() buffalo.Handler {
	return func(c buffalo.Context) error {
		return c.Render(200, r.JSON(map[string]string{"message": "Ay ok!"}))
	}
}

func CreateChain(execLocation string) buffalo.Handler {
	return func(c buffalo.Context) error {
		var chain models.Chain
		err := readBody(c.Request(), &chain)

		if err != nil {
			return c.Render(http.StatusBadRequest, r.String("invalid request"))
		}

		validations := []string{}
		if len(chain.Name) <= 0 {
			validations = append(validations, "name is required")
		}
		if chain.Supply <= 0 {
			validations = append(validations, "supply must be positive nonzero")
		}
		if chain.Supply > 1000000000 {
			validations = append(validations, "supply cannot be greater than 1,000,000,000")
		}
		if chain.PubicKeyAddressRewardPercent > 0 && len(chain.PublicKeyAddress) > 0 {
			validations = append(validations, "PublicKeyAddress is required when PubicKeyAddressRewardPercent")
		}
		if len(validations) > 0 {
			errorMessage := strings.Join(validations, ", ")
			return c.Render(http.StatusBadRequest, r.String(errorMessage))
		}

		// TODO check for existence

		cmd := fmt.Sprintf("%s/komodod -ac_name=%s -ac_supply=%d", execLocation, chain.Name, chain.Supply)

		if chain.Reward > 0 {
			cmd = cmd + fmt.Sprintf(" -ac_reward=%d", chain.Reward)
		}
		if chain.EndBlock > 0 {
			cmd = cmd + fmt.Sprintf(" -ac_end=%d", chain.EndBlock)
		}
		if chain.HalvingBlock > 0 {
			cmd = cmd + fmt.Sprintf(" -ac_halving=%d", chain.HalvingBlock)
		}
		if chain.DecreaseRewardsPercent > 0 {
			cmd = cmd + fmt.Sprintf(" -ac_decay=%d", chain.DecreaseRewardsPercent)
		}
		if len(chain.PublicKeyAddress) > 0 {
			cmd = cmd + fmt.Sprintf(" -ac_pubkey=%s", chain.PublicKeyAddress)
		}
		if chain.PubicKeyAddressRewardPercent > 0 {
			cmd = cmd + fmt.Sprintf(" -ac_perc=%d", chain.PubicKeyAddressRewardPercent)
		}
		cmd = cmd + " -gen &"

		cmdError := exec.Command("bash", "-c", cmd).Run()

		if cmdError != nil {
			// TODO log error
			return c.Render(http.StatusInternalServerError, r.String("error creating chain"))
		}

		return c.Render(http.StatusOK, r.JSON(chain))
	}
}

func GetChainInfo(execLocation string) buffalo.Handler {
	return func(c buffalo.Context) error {
		name := c.Param("name")
		if len(name) <= 0 {
			return c.Render(http.StatusBadRequest, r.String("name is required"))
		}

		cmd := fmt.Sprintf("%s/komodo-cli -ac_name=%s getinfo", execLocation, name)
		cmdResult, err := exec.Command("bash", "-c", cmd).Output()

		var response map[string]interface{}
		if err := json.Unmarshal(cmdResult, &response); err != nil {
			return c.Render(http.StatusNotFound, r.String("chain not found"))
		}

		if err != nil {
			return errors.WithStack(err)
		}

		return c.Render(http.StatusOK, r.JSON(response))
	}
}

func readBody(request *http.Request, target interface{}) error {
	body := request.Body
	decoder := json.NewDecoder(body)

	defer body.Close()
	return decoder.Decode(target)
}
