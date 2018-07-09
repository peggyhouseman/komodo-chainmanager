package models

type Chain struct {
	Name                         string `json:"name"`
	Supply                       int    `json:"supply"`
	Reward                       int    `json:"reward"`
	EndBlock                     int    `json:"endBlock"`
	HalvingBlock                 int    `json:"halvingBlock"`
	DecreaseRewardsPercent       int    `json:"decreaseRewardsPercent"`
	PublicKeyAddress             string `json:"publicKeyAddress"`
	PubicKeyAddressRewardPercent int    `json:"pubicKeyAddressRewardPercent"`
}
