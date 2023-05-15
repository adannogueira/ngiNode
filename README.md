# **Node App / NginX Proxy / MySQL DB **

This is a docker challenge to build a Node App that connects to a MySQL DB behind a NginX proxy and keeps track of visited urls.

## Run the project

Simply download this repository, then run the compose file to setup the application, you'll need [Docker](https://www.docker.com/) installed to be able to test the app.

Follow these steps to spin up the app:
1. `git clone https://github.com/adannogueira/ngiNode.git`
2. `cd ngiNode`
3. `docker-compose up -d`

### Node App

This is a simple web app only with a MySQL dependency. To use the App, go to your browser and type `http://localhost/<ANY-URL>` to store the given url to the history, example: `http://localhost/test` will store the "/test" url to the history.

### NginX Proxy

The proxy config has only two locations, the first `/favicon.ico` ignores the browser's default request for the favicon (in order to keep it from recording it's history), the second `/` will track every other url and exhibit the same webpage with a message containing all visited urls.

### MySQL DB

The database builds a MySQL image and creates a database with a single table, the bare minimum to persist visited urls sent by the web app.