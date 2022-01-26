# simple-web-pinger

📡 Simple web pinger is a "fork" of Simple website pinger(the simple website pinger github was deleted), you can use it to keep your repl.it or similiar projects online for 24/7!

[![NPM](https://nodei.co/npm/simple-web-pinger.png)](https://nodei.co/npm/simple-web-pinger/)
[![downloadsBadge](https://img.shields.io/npm/dt/simple-web-pinger?style=for-the-badge)](https://npmjs.com/simple-web-pinger)[![versionBadge](https://img.shields.io/npm/v/simple-web-pinger?style=for-the-badge)](https://npmjs.com/simple-web-pinger)

⭐ If you like this package, don't forget to star Github repo [here](https://github.com/frostzzone/simple-web-pinger)

## Features:
- ⏱️ Easy to use
- 🚀 You can also create webserver for your project, to make it pingable
- ⚙️ Custom ping interval option and custom port for webserver option

---

# Example code:

```js
const pinger = require("simple-website-pinger")

pinger.webserver(3000) // Create webserver on port 3000

pinger.ping("Your project url") //default interval is 1m, or you can specify own interval in ms
```
# Example no logs:
```js 
const pinger = require("simple-website-pinger")

pinger.webserver(3000, "<html><body><p>hello</p><body></html>") // Create webserver on port 3000

pinger.pong("Your project url", 6000) //default interval is 1m, or you can specify own interval in ms
```
# Example discord logs:

```js
const pinger = require("simple-website-pinger")

pinger.webserver(3000) // Create webserver on port 3000

pinger.pingd(client, "1234567890", "Your project url", 6000, 'discord logs') //default interval is 1m, or you can specify own interval in ms
```

# Documantion:


| Methods       | Type           | Required      | Default    | Description |
| ------------- |:-------------:|:-------------:|:-------------:| :--------------:|
| ping("Your url", your interval in ms, log ping outputs, "name of pinger")     | String, Object, Boolean, String | true, false, false, false | *None,  60000, true, 'pinger'* | Start to ping the provided url every provided time |
| pong("Your url", your invertal in ms) |  String, Object | true, false | *None, 6000* | Ping url but no logs or console text |
| webserver(your port, 'html code')     | Object, String | false, false | 3000 | Create simple websever for your project, to make it pingable |
| pingd(client, 'channelID', "your url", your invertal in ms, 'name of pinger') | Object, String, String, Object, String | true, true, true, false, false | *None, None, None, 60000, 'pinger'* | ping the supplied url and send logs to specified discord channel |

