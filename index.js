const Discord = require('discord.js');
let client = new Discord.Client();

// Let's Now Define Our Events
client.on('ready', () => {
console.log(`Logged In As ${client.user.tag}`);
client.user.setStatus('idle'); // Will Set Status To Idle On Login/Boot
});

let prefix = ['+']; // We Advice You NOT To Use This Self Bot In A Public Guild Or A Guild That Has Logs 

client.on('message', async message => {
if(message.author !== client.user) return;
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if (command === 'game') {
  const game = args.join(" ").trim();
  if(!game || game.length < 1) game = null;
  client.user.setPresence({ game: { name: game, type: 0 } });
  message.delete().catch(console.error); // Will Return To Console If There Is An Error 
};

if (command === 'online') {
  message.delete();
client.user.setStatus('online');
return console.log('Status Updated To Online');
}

if (command === 'idle') {
  message.delete();
client.user.setStatus('idle');
return console.log('Status Updated To Idle');
}

if (command === 'dnd') {
  message.delete();
client.user.setStatus('dnd')
return console.log('Status Updated To Do Not Disturb');
}

if (command === 'offline') {
  message.delete();
client.user.setStatus('invisible');
return console.log('Status Updated To Offline');
}

if (command === 'embed') 
 message.delete();
 const embed = new Discord.RichEmbed()
 .setDescription(args.join(" "))
 message.channel.send({embed});
}

if (command === 'help') { // This Command Will Have To Be Manually Updated To Give The Updated Command List
  message.delete();
 const embed = new Discord.RichEmbed()
 .addField('Kylaris-Dev Commands', 'Game - Sets Your Game Presence\n\nOnline - Sets Status Online\n\nIdle - Sets Status Idle\n\nDND - Sets Status DND\n\nOffline - Sets Status Offline\n\nEmbed - Embeds Your Text\n\nHelp - Sends Command List\n\nShrug - Send The Shrug')
 .setFooter('Made With 💓 By Kylaris')
 .setColor('RANDOM');
 message.channel.send({embed})
 }

 if (command === 'shrug') {
 message.delete();
  message.channel.send('¯\_(ツ)_/¯') // Return's Lenny Shrug
  }

});
client.login(process.env.DISCORD); // Logs User In Using The Inputted Settings 

// Now We Can Make The Project Ping Every 5 Minutes
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
