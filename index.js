const Discord = require("discord.js");
const whmcs = new WHMCS({
  username: '',
  password: '',
  apiKey: '',
  serverUrl: ''
});
const client = new Discord.Client();
const settings = require("./config.json");
var temp = {};
var date = new Date();
var current_date = date.getUTCDate();
var current_time = `${date.getUTCHours()}:${date.getUTCMinutes()}`;

var prefix = 'cn/';

function commandIs(str, msg) {
  return msg.content.toLowerCase().startsWith(prefix + str);
}

client.on('ready', () => {
    console.info(`\nLogged in as ${client.user.tag} as of ${current_time}.`);
    client.user.setActivity("Cryptic Node Bot | cn/verify");
  });

client.on('message', async msg => {
  var args = msg.content.split(/[ ]+/);
  
  if (commandIs('ping', msg)) {
    const m = await msg.channel.send(":ping_pong: Pinging...");
    m.edit(`:ping_pong: **Bot** ${m.createdTimestamp - msg.createdTimestamp}ms | **API** ${Math.round(client.ping)}ms`);
  }

  if (commandIs('verify', msg)) {
    if (msg.guild) {
      msg.channel.send('<:errorhex:535607623710408734> You need to go into my DMs to verify this.');
    }
  }

}); // End of stuff

client.login(config.token);