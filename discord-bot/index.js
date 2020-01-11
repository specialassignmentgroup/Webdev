const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	var bump = client.channels.find(channel => channel.id === '661718661668536320')

	console.log('Ready!');

	setInterval(() => {
		bump.send("Daily reminder to Bump Steam recruitment post: https://steamcommunity.com/app/107410/discussions/10/1736634311729653971/");
	}, 2.16e+7);
});

//basic commands 

client.on('message', message => {
	if (message.content === `${prefix}steampost`) {
		message.channel.send('https://steamcommunity.com/app/107410/discussions/10/1736634311729653971/');
	} else if (message.content === `${prefix}modlist`) {
		message.channel.send('https://steamcommunity.com/sharedfiles/filedetails/?id=1954780748');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);		
	} else if (message.content === `${prefix}forums`) {
		message.channel.send('https://30th-ir.enjin.com/');
	} else if (message.content === `${prefix}help`) {
		message.channel.send('"!steampost" "!modlist" "!server" "!user-info" "!forums" "!help"' 
			);
	}
});
// end of Basic commands 

//  login to Discord with your app's token
client.login('');

