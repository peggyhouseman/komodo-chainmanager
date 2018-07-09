package grifts

import (
	"deco.network/komodo/chainmanager/api/actions"
	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
