Service for receive and transmit SMS from DBL-GoIP to Telegram

## Preparation
* Clone this repository
* Create <a href="https://core.telegram.org/bots" target="_blank">Telegram Bot</a>
* Configure GoIP SMS server
* ** Server IP
* ** Password
* ** Client ID examples "goip1", "goip2" .etc
* Copy .env.example to .env
* Configure app/.env (check "Environment parameters" below)

## Environment parameters
* bottoken - Telegram Bot Token
* locale - Bot locale (ru/en), default: en

* rd_host - Redis database IP/Hostname
* rd_port - Redis server port, default: 6379
* rd_ipfamily - Redis IP family (4/6), default: 4
* rd_pass= - Password for Redis AUTH if "requirepass" configured
* rd_database - Redis database id, default: 0
* rd_prefix - Redis key prefix

* goip_password - GoIP Password
* goip_port - GoIP Port, default: 44444 (UDP)
* persist_msg - Message Persistence, messages TTL is 24 hours if not enabled, any value for enable

* admin_username - Telegram Username (without "@")

* debug - Any value for enable

## Run with Docker
* Run "docker-compose up -d --build"

## Run without Docker
* Install <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
* Install dependencies in app/ "npm install"
* Set "protected-mode" to "yes" in redis.conf
* Install and run Redis server with redis.conf
* Install process daemon <a href="https://pm2.keymetrics.io/docs/usage/quick-start/" target="_blank">PM2</a> Run "npm i -g pm2"
* Run application "pm2 start sms_server.js"

## Bot commands
* /start - Register
* /myid - Return unique Telegram id

### root - Able add/remove admins
* /addadmin <telegram_id> - Add user to admin list
* /deladmin <telegram_id> - Remove user from admin list

### Admin - Able to control recipients/SIM details
* /getusers - Get registered users
* /simconfig <sim_number> phonenum <text> - Set Slot phone number - Example: /simconfig 1 phonenum +12345678900
* /simconfig <sim_number> name <text> - Set Slot name - Example: /simconfig 1 name FirstSim
* /addrecipient <telegram_id> <sim_number> - Add user as recipient - Example: /addrecipient 1234567890 1 
* /delrecipient <telegram_id> <sim_number> - Remove user from recipient list - Example: /addrecipient 1234567890 1
* /recipients <sim_number> - Get list of recipients for this channel - Example: /recipients 1
* /simsim - Show GoIP SIM-cards status

- You can use test_message.js for testing message transmitting