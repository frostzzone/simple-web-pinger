# bad-pack for npm

[![NPM](https://nodei.co/npm/bad-pack.png)](https://nodei.co/npm/bad-pack/)

[![downloadsBadge](https://img.shields.io/npm/dt/bad-pack?style=for-the-badge)](https://npmjs.com/bad-pack)

[![versionBadge](https://img.shields.io/npm/v/bad-pack?style=for-the-badge)](https://npmjs.com/bad-pack)

## Documentation

```js
const bad = require("bad-pack");

//logs bad in the console
bad.log("bad");

//makes a Discord bot
//prefix and status are optional
bad.bot("token", "prefix", "status");
```

### Bot commands

| Command       | Description| Example           | Result      |
| ------------- |:-------------:|:-------------:|:-------------:|
|!say <*message*> | Repeats text after say | !say hello | hello