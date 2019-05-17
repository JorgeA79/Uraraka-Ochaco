const Discord = require('discord.js');
const client = new Discord.Client();



var prefix = "y!"
var xprefix = "Y!"

var hello = [
 	"Hi",
	"Ello uwu",
	"Ey",
	"Hellu :3"
]



client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith((prefix)||(xprefix) + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
  client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith('Ey')||('Hello')||('Hi')||('Ello')) {
	
		 var randomAnswer = hello[Math.floor(Math.random() * hello.length)];
		message.channel.send(randomAnswer);
	}

});
  

client.login(process.env.BOT_TOKEN);
