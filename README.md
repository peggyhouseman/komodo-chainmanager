# Komodo Chain Manager
This application connects to Komodo and allows the user to create an asset chain

## Komodo daemon
For the purposes of this project, Komodo is installed on the same box following these instructions for Mac-OS: https://github.com/KomodoPlatform/komodo/wiki/Installing-Komodo-Manually
* Only change is brew install gcc6 (otherwise user will receive C compiler messages)
* API resource: https://komodo-platform.readthedocs.io/en/latest/komodo/komodo-API.html

## Application structure
The app consists of 2 separate applications:
* API wrapper written in golang
* UI written using React/Redux

## Launching to application
### Dependencies
* Komodo: Ensure Komodo daemon is running and available for API calls
* API: Go must be installed with GOPATH vars correctly set
* UI: nodsjs must be installed
### Run Komodo
* Following these: https://github.com/KomodoPlatform/komodo/wiki/Installing-Komodo-Manually
### Run golang API
* Run buffalo build --static -o /bin/app
* Goto /bin/
* Expose desired port (EXPOSE 3025)
* /bin/app
### Run UI
* npm start
