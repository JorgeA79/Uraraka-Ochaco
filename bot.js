const Discord = require('discord.js');
const client = new Discord.Client();
const ffmpeg = require('ffmpeg');
const playArbitraryFFmpeg = require('discord.js-arbitrary-ffmpeg');


client.on("ready", () => {
  const channel = client.channels.get("710730014827479047");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});

client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith('p!play')) {
	
	const channel = message.member.voiceChannel;
    	if (!channel){
	return message.channel.sendMessage(":x: You are not in a voice channel!!");
    	}
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    	channel.join();
    
	}
	});

client.login(process.env.BOT_TOKEN);
