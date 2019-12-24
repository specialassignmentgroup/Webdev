const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

//basic commands 

client.on('message', message => {
	if (message.content === `${prefix}steampost`) {
		message.channel.send('No Steam Post');
	} else if (message.content === `${prefix}modlist`) {
		message.channel.send('No Modlist Aviable At The Moment');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);		
	} else if (message.content === `${prefix}enjin`) {
		message.channel.send('https://30th-ir.enjin.com/');
	} else if (message.content === `${prefix}forums`) {
		message.channel.send('https://30th-ir.enjin.com/');
	} else if (message.content === `${prefix}help`) {
		message.channel.send('"!bumpsteam" "!modlist" "!server" "!user-info" "!enjin" "!help");
	} else if (message.content === `${prefix}teamspeak`){
		message..channel.send('104.243.45.180:9004');
	}
});

// login to Discord with your app's token
client.login('');

