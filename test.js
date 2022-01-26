(async () => {
  let process = require('process');
  process.on('uncaughtException', function(err) {
    console.log(err);
  });
  let Discord = require("discord.js")
  let {
    MessageEmbed,
    MessageButton,
    MessageActionRow,
    Intents,
    Permissions,
    MessageSelectMenu
  } = require("discord.js")
  const pinger = require("./index.js")
  require('events').EventEmitter.defaultMaxListeners = 50;
  let fs = require('fs');
  const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const s4d = {
    Discord,
    fire: null,
    joiningMember: null,
    reply: null,
    tokenInvalid: false,
    tokenError: null,
    player: null,
    manager: null,
    Inviter: null,
    message: null,
    notifer: null,
    checkMessageExists() {
      if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
      if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
    }
  };
  s4d.client = new s4d.Discord.Client({
    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
    partials: ["REACTION", "CHANNEL"]
  });
  s4d.client.on('ready', () => {
    console.log(s4d.client.user.tag + " is alive!")
  })
  var prefix, arguments2, commandwithprefix, command;


  await s4d.client.login((process.env.token)).catch((e) => {
    s4d.tokenInvalid = true;
    s4d.tokenError = e;
  });

  pinger.webserver(3000, 'html code')
await delay(Number(1) * 1000);
  pinger.pingd(s4d.client, "715254438234685581", "https://ping.frostzzone.repl.co")

  s4d.client.on('ready', async () => {
    prefix = '!';

  });

  s4d.client.on('messageCreate', async (s4dmessage) => {
    if (!((s4dmessage.author).bot)) {
    arguments2 = (s4dmessage.content).split(' ');
    commandwithprefix = arguments2.splice(0, 1)[0];
    if ((commandwithprefix || '').startsWith(prefix || '')) {
      command = commandwithprefix.slice(((prefix.length + 1) - 1), commandwithprefix.length);
      if (command == 'hi') {
        s4dmessage.react('👋');
      }
    }
                                                            }
  });

  return s4d
})();