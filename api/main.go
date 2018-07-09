package main

import (
	"log"

	"deco.network/komodo/chainmanager/api/actions"
)

func main() {
	app := actions.App()
	if err := app.Serve(); err != nil {
		log.Fatal(err)
	}
}
