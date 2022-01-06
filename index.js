const Discord = require("discord.js")
const fetch = require("node-fetch")
const express = require("express")
const app = express()
const chalk = require('chalk');
const log = console.log;

const pong = async function(url, interval) {
  if(!url) return
  
  function isValidUrl(string) {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }

    return true;
  }

  if(isValidUrl(url) !== true || url.includes("<" || ">" || "<script>" || "</script>") || encodeURIComponent(url).includes("%3C" || "%3E" || "%20")) return;


let int = interval || 60000

setInterval(async () => {
    const response = await fetch(url, {headers: {'User-Agent' : 'simple-website-pinger (NPM Package)'}}).catch(err => {
      
    });
      

    status = response.status;
}, int);

const response = await fetch(url, {headers: {'User-Agent' : 'simple-website-pinger (NPM Package)'}}).catch(err => {
      
    });
      
    status = response.status;
  }

const ping = async function(url, interval, logs, name) {
  let nick = name || `pinger`
  if (logs == false) {
  clog = false
  }else{
  clog = true
  }
if (clog == true){
log(chalk.gray.bgWhite(`[📡 simple-website-pinger]`) + ` Logging pings for `+ chalk.blue(nick));
}else{
log(chalk.gray.bgWhite(`[📡 simple-website-pinger]`) + ` NOT Logging pings for `+ chalk.blue(nick));
}
if(!url) return log(chalk.red(`[📡 simple-website-pinger] Error: `) + `You must specify URL!`);

  function isValidUrl(string) {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }

    return true;
  }

  if(isValidUrl(url) !== true || url.includes("<" || ">" || "<script>" || "</script>") || encodeURIComponent(url).includes("%3C" || "%3E" || "%20")) return log(chalk.red(`[📡 simple-website-pinger] Error: `) + `Invalid URL (${url})!`);

let int = interval || 60000

setInterval(async () => {
    const response = await fetch(url, {headers: {'User-Agent' : 'simple-website-pinger (NPM Package)'}}).catch(err => {
     if(clog == true){
      log(chalk.red(`[📡 simple-website-pinger] Error: `) + `Failed to ping ${url}: ${err}`);
       }
    });
  if(clog == true){
      log(chalk.green(`[📡 simple-website-pinger] `) + `Successfully pinged ${url} with status ${response.status} (${response.statusText})`);
}
    status = response.status;
}, int);

const response = await fetch(url, {headers: {'User-Agent' : 'simple-website-pinger (NPM Package)'}}).catch(err => {
  if(clog == true){
      log(chalk.red(`[📡 simple-website-pinger] Error: `) + `Failed to ping ${url}: ${err}`);
    }
    });
  if(clog == true){
      log(chalk.green(`[📡 simple-website-pinger] `) + `Successfully pinged ${url} with status ${response.status} (${response.statusText})`);
    }

    status = response.status;

}

const pingd = async function(client, channelid, url, interval, name) {
  if(!client) return log(chalk.red(`ERROR: `) +"Client not provided")
bot = client
  let nick = name || `pinger`
  let chanid = channelid
  if (isNaN(chanid)) {
    log(chalk.gray.bgWhite(`[📡 simple-website-pinger]`) + ` not a valid channel number  ['`+ chalk.green(id) + `']`)
  return;
  }
  clog = true
  
if(!url) return bot.channels.cache.get(`${chanid}`).send({content: String(`[📡 simple-website-pinger] Error: ` + `invalid URL supplied [${url}]`)});

  function isValidUrl(string) {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }

    return true;
  }

  if(isValidUrl(url) !== true || url.includes("<" || ">" || "<script>" || "</script>") || encodeURIComponent(url).includes("%3C" || "%3E" || "%20")) return client.channels.cache.get(`${chanid}`).send({content: String(`[📡 simple-website-pinger] Error: ` + `Invalid URL (${url})!`)});

let int = interval || 60000

setInterval(async () => {
    const response = await fetch(url, {headers: {'User-Agent' : 'simple-website-pinger (NPM Package)'}}).catch(err => {
     if(clog == true){
      bot.channels.cache.get(`${chanid}`).send({content: String(`[📡 simple-website-pinger] Error: ` + `Failed to ping ${url}: ${err}`)});
       }
    });
  if(clog == true){
      bot.channels.cache.get(`${chanid}`).send({content: String(`[📡 simple-website-pinger] ` + `Successfully pinged ${url} with status ${response.status} (${response.statusText})`)});
}
    status = response.status;
}, int);

const response = await fetch(url, {headers: {'User-Agent' : 'simple-website-pinger (NPM Package)'}}).catch(err => {
  if(clog == true){
      bot.channels.cache.get(`${chanid}`).send({content: String(`[📡 simple-website-pinger] Error: ` + `Failed to ping ${url}: ${err}`)});
    }
    });
  if(clog == true){
      bot.channels.cache.get(`${chanid}`).send({content: String(`[📡 simple-website-pinger] ` + `Successfully pinged ${url} with status ${response.status} (${response.statusText})`)});
    }

    status = response.status;

}


const webserver =  async function(port, text) {
let status = 200 
const words = text|| '<code>📡 This project is using <a href="https://www.npmjs.com/package/simple-website-pinger">simple-website-pinger</a> NPM package.</code>';
const p = port|| 3000;

  if (isNaN(p)){
   log(chalk.red(`[📡 simple-website-pinger] Error: `) + `Not a valid port`);
   log(chalk.yellow(`[📡 simple-website-pinger] `) + `Started on port 3000 instead`);
    
    const p = 3000;
   
 app.get('*', (req, res) => {
res.status(status).send(`${words}`);
});
    
app.listen(p, () => {
log(chalk.green(`[📡 simple-website-pinger] `) + `Webserver is listening on port ${p}!`);
});
  }else{
    
app.get('*', (req, res) => {
res.status(status).send(`${words}`);
});
    
app.listen(p, () => {
log(chalk.green(`[📡 simple-website-pinger] `) + `Webserver is listening on port ${p}!`);
});
    }
}




module.exports = {
pong,
ping,
pingd,
webserver
}
