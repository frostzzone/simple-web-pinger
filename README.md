# simple-website-pinger

📡 Simple website pinger, you can use it to keep your repl.it or similiar projects online for 24/7!

[![NPM](https://nodei.co/npm/simple-website-pinger.png)](https://nodei.co/npm/simple-website-pinger/)

[![downloadsBadge](https://img.shields.io/npm/dt/simple-website-pinger?style=for-the-badge)](https://npmjs.com/simple-website-pinger)
[![versionBadge](https://img.shields.io/npm/v/simple-website-pinger?style=for-the-badge)](https://npmjs.com/simple-website-pinger)
[![support](https://img.shields.io/badge/Support-Click%20here-blue?style=for-the-badge)](https://github.com/Pinglik-Developers/simple-website-pinger/discussions)
[![donate](https://img.shields.io/badge/Donate-Click%20here-red?style=for-the-badge)](https://ko-fi.com/pinglik)

⭐ If you like this package, don't forget to star Github repo [here](https://github.com/Pinglik-Developers/simple-website-pinger) or you can donate [here](https://ko-fi.com/pinglik).

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W3315UN)

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

# Documantion:


| Methods       | Type           | Required      | Default    | Description |
| ------------- |:-------------:|:-------------:|:-------------:| :--------------:|
| ping("Your url", your interval in ms, log ping outputs, 'name of pinger')     | String, Object | true, false, false, false | *None,  60000, true, 'pinger'* | Start to ping the provided url every provided time |
| webserver(your port, 'html code')     | Object | false, false | 3000 | Create simple websever for your project, to make it pingable |

