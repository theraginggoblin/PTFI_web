#!/bin/bash
sh build_localhost_server.sh

node ../web_server/server.js --protocol https --port 5050