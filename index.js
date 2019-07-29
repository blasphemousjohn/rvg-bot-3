/*---------------------------------------------------------------------------
-----------------------------------------------------------------------------
-----------------------------------------------------------------------------
 ________  ________  ________  ___  ___  _______                         
|\   __  \|\   __  \|\   ____\|\  \|\  \|\  ___ \                        
\ \  \|\  \ \  \|\  \ \  \___|\ \  \\\  \ \   __/|                       
 \ \   _  _\ \  \\\  \ \  \  __\ \  \\\  \ \  \_|/__                     
  \ \  \\  \\ \  \\\  \ \  \|\  \ \  \\\  \ \  \_|\ \                    
   \ \__\\ _\\ \_______\ \_______\ \_______\ \_______\                   
    \|__|\|__|\|_______|\|_______|\|_______|\|_______|                   
                                                                         
                                                                         
                                                                         
 ___      ___ ________  ___       ___       _______       ___    ___     
|\  \    /  /|\   __  \|\  \     |\  \     |\  ___ \     |\  \  /  /|    
\ \  \  /  / | \  \|\  \ \  \    \ \  \    \ \   __/|    \ \  \/  / /    
 \ \  \/  / / \ \   __  \ \  \    \ \  \    \ \  \_|/__   \ \    / /     
  \ \    / /   \ \  \ \  \ \  \____\ \  \____\ \  \_|\ \   \/  /  /      
   \ \__/ /     \ \__\ \__\ \_______\ \_______\ \_______\__/  / /        
    \|__|/       \|__|\|__|\|_______|\|_______|\|_______|\___/ /         
                                                        \|___|/          
                                                                         
                                                                         
 ________  ________  _____ ______   _______   ________                   
|\   ____\|\   __  \|\   _ \  _   \|\  ___ \ |\   ____\                  
\ \  \___|\ \  \|\  \ \  \\\__\ \  \ \   __/|\ \  \___|_                 
 \ \  \  __\ \   __  \ \  \\|__| \  \ \  \_|/_\ \_____  \                
  \ \  \|\  \ \  \ \  \ \  \    \ \  \ \  \_|\ \|____|\  \               
   \ \_______\ \__\ \__\ \__\    \ \__\ \_______\____\_\  \              
    \|_______|\|__|\|__|\|__|     \|__|\|_______|\_________\             
                                                \|_________|
Welcome to Murr bot, a savage bot based around causeing havok in the discord.  The goal with this app is to create a responsive, reactive AI with different moods based on what users are talking about in the Discord.  There is no 'prefixes' for this bot, as it is meant to be a complete AI setup and recognize when users are talking about it.  
All credits to xeisx and Blasphemousjohn.
There are many comments in this code, used to distinguish what does what.  The format is as follows: 
1. COMMENT REFERENCING CODE (ex. Line 42)
2. CODE (ex. Line 43)
-----------------------------------------------------------------------------
-----------------------------------------------------------------------------
-----------------------------------------------------------------------------*/


const Discord = require('discord.js');
//Variable defining what the bot is called in the script (Discord.Client() creates the instance of the bot)
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;


//-----------------------------------------------------------------------------
//BOT FUNCTIONS, only add functions for direct interaction with the Discord server here.
//-----------------------------------------------------------------------------


//When the bot starts running.
client.on('ready',() => {
  //Prints to Compiler / IDE console.
  console.log(client.user.username + ' bot initialized.'); 
  //Sets the bot's 'playing' status.
  client.user.setActivity('the role of resident asshole.'); 
  //Sets active channel for initial greeting
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  /*const channel = find(ch => ch.name === 'news-announcements'); 
  //Ignores if channel doesn't exist, prevents bot from breaking <-- NEEDS FIXING
  if (!channel) return;*/
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
});

//When anyone sends a message...
client.on('message', msg => { 
  //On new message event sets emotion
  emotion(emotion_lvl);
  //Adds emotional responses
  for (var i = 0; i <= upsettingWords_count; i++) {
    if (msg.content.toLowerCase().match(upsettingWords[i]) == upsettingWords_txt[i]) {
      emotion_lvl = emotion_lvl + 1;
    }
  }
  //Allows the user to check how Murr is feelin'
  if (msg.content == 'Murr, how ya feelin?') {
    if (set_emotion_state == 'lonely') {
      msg.channel.send('I\'m actually.. very lonely right now (╥﹏╥)');
    } else if (set_emotion_state == 'neutral') {
      msg.channel.send('Meh');
    } else if (set_emotion_state == 'angry') {
      msg.channel.send('I\'m so fucking pissed right now!🤪🤬😤');
    }
  }
  //Resets emotions to neutral
  if (msg.content == 'Murr, calm') {
    msg.channel.send('Alright, I\'m calming down now buddy :)');
    emotion_lvl = 4;
  }
  var chanceOfOutburst = getRandomInt(percentChance);
  console.log('Chance of outburst '+chanceOfOutburst);
  //Performs outburst test

  if (chanceOfOutburst == (percentChance - 1)) {  
    //Provides a more realistic respose time instead of being instant.  Set to 1.5 seconds.
    sleep(1500);
    chooser = getRandomInt(cannedOutburst.length);
    //Ensures it's not the bots own message to respond to.
    if (msg.author.id != client.user.id) { 
      console.log('Chooser '+chooser);
      //Sends an outburst based on whoever sent the message.
      msg.channel.send('<@' + msg.author.id + '>, '+cannedOutburst[chooser]+'.');
    }
  }

  if (msg.content == "Murr, ping!") {
    msg.channel.send(`Your shitty server is lagging! 💩💩 \`${client.pings[0]}ms\``);
  }
  
  if (msg.author.id != client.user.id) {
    //Some specific responses to things users say
    if (msg.content.startsWith ("Wow")) {
      msg.channel.send ("Wow, you're easy to impress aren't you?");
    }
    if (msg.content.toLowerCase().startsWith == "I'm Sorry" || msg.content.toLowerCase().startsWith == "Sorry" || msg.content.toLowerCase().startsWith == "My bad" || msg.content.toLowerCase().startsWith == "Sorry" || msg.content.toLowerCase().startsWith == "Im sorry") {
      msg.channel.send ("No, no, no, I'm sorry I can't remove you.");
    }
  }
  
  if (msg.content == 'Murr, clear messages') {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!msg.channel.permissionsFor(msg.author).hasPermission("MANAGE_MESSAGES")) {
        msg.channel.sendMessage("LMAO!  Youre not even allowed to do that! 😳😂");
        console.log("Sorry, you don't have the permission to execute the command \""+msg.content+"\"");
        return;
      } else if (!msg.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
        msg.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+msg.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+msg.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (msg.channel.type == 'text') {
        msg.channel.fetchMessages()
          .then(messages => {
            msg.channel.bulkDelete(messages);
            //number of messages deleted
            var messagesDeleted = messages.array().length; 

            // Logging the number of messages deleted on both the channel and console.
            msg.channel.sendMessage("Deletion of "+messagesDeleted+' shitty messages succesful.');
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted);
          })
          .catch(err => {
            console.log('These messages suck so bad I cant even delete them.');
            console.log(err);
          });
      }
  }
});


//-----------------------------------------------------------------------------
//BACKEND FUNCTIONS, includes custom functions ran in the background for the bot AI.
//-----------------------------------------------------------------------------


//Input a maximum return val.  Eg. 10 could be 0-9 (10 ints).
function getRandomInt(max) { 
  return Math.floor(Math.random() * Math.floor(max));
}
//Mimics the sleep function of other languages, in milliseconds
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
//Ensures emotion_lvl is in the proper range (based on 0-9 scale)
function leveler() {
  if (emotion_lvl > 9) {
    emotion_lvl = 9;
  } else if (emotion_lvl < 0) {
    emotion_lvl = 0;
  }
}

//Sets the emotion state (based on 0-9 scale)
function emotion(lvl) {
  leveler();
  if (lvl < 3) {
    set_emotion_state = 'lonely';
    percentChance = 20;
  } else if (lvl >=3 && lvl <= 5) {
    set_emotion_state = 'neutral';
    percentChance = 15;
  } else if (lvl > 5) {
    set_emotion_state = 'angry';
    percentChance = 2;
  }
}

//-----------------------------------------------------------------------------
//BACKEND POOL, variables / arrays for AI choice
//-----------------------------------------------------------------------------

var set_emotion_state;
//0-9 scale of emotional level.  0-2 is lonely, 3-5 is neutral, 6-9 is angry.
var emotion_lvl = 4;
//Set this value for a percent chance.  Eg. 10 is 10%, 4 is 25%, 3 is 33.34%, 1 is 100% 
var percentChance = 4;
var cannedOutburst = ['you suck', 'I hate you', 'your mom can not even look at you, loser', 'fuck you', 'is trash', 'is garbage', 'is unloved and should stop trying', 'needs to get a life', 'smells like ass and doritos', 'why do you even try? This is sad'];
//Must include the gi at the end, in the case that there are multiple of these words per message.  This is RegEx formatting (required here).
var upsettingWords = [/garbage/g,/fuk/g,/fk/g,/fuc/g,/ mad /g,/sht/g,/shitty/g,/shit/g,/shtty/g,/ass/g,/ f u /g,/trash /g,/hate/g,/loser/g];
var upsettingWords_txt = ['garbage','fuk','fk','fuc',' mad ','sht','shitty','shit','shtty','ass',' f u ','trash ','hate','loser'];
var upsettingWords_count = upsettingWords.array().length;
var chooser = 0;


//-----------------------------------------------------------------------------
//PROCESS INITIATION, starts the app.
//-----------------------------------------------------------------------------


client.login(token);
