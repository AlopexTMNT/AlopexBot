require("dotenv").config();

const { Client, MessageAttachment } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});



const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} is now online.`);
});

client.on('message', msg => {
  if (msg.content === 'who is alopex') {
    msg.reply('Alopex is a Mutant Red Fox and she apeared in TMNT 2012 TV Series. Sister of Tiger Claw.');
  }
});

// https://discord.com/channels/738094866965331969/738094866965331974/777831599588245545 for later


client.on('message', message => {
  if (message.content === 'Alopex') {
    const attachment = new MessageAttachment('./pics/alopex.png');
    message.channel.send(attachment);
  }
});

client.on('message', msg => {
  if (msg.content === 'licence') {
    msg.reply('**You can read our licence here** https://github.com/AlopexTMNT/AlopexBot/blob/main/LICENSE *PS* its OPEN SOURCE');
  }
});

client.on('message', message => {
  if (message.content === 'Trapped') {
    const attachment = new MessageAttachment('./pics/trapped.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Mutated') {
    const attachment = new MessageAttachment('./pics/mutated.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === '$help') {
    message.channel.send('Do $Manual')
  }
});

client.on('message', message => {
  if (message.content === `$ping`) {
    message.channel.send('**ALOPEX PING COMMAND (BEST IN THE WORLD)**\nPinging started\nPinging gentoo.org\n [...]\n UR PING SUCKS');
  } else if (message.content === `$beep`) {
    message.channel.send('Boop.');
  } else if (message.content === `$server`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (message.content === `$user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nCreated at: ${message.author.createdAt}\nAvatar: ${message.author.avatarURL({format} = {})}`);
  }

});

client.on('message', message => {
  if (message.content === '$invite') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=778963300800397312&scope=bot')
  }
});

client.on('message', message => {
  if (message.content ==='what is my avatar') {
    message.reply(message.author.displayAvatarURL());
  }
})

client.on('message', message => {
  if (message.content === 'Dream') {
    message.channel.send('Dream is gay {hahaha} REEEEEEEEEEEEEEEEEEEEE')
  }
});

//peos.bot

client.on('message', message => {
  if (message.content === 'peos.bot') {
    message.channel.send('YOUR MOM SUCKS MY NIGGER ASS. Faggot')
  }
});

client.on('message', message => {
  if (message.content === 'Sexy Teacher') {
    const attachment = new MessageAttachment('./pics/sexyteacher.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Best minecraft skin') {
    const attachment = new MessageAttachment('./pics/alopextmnt.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Best minecraft server') {
    message.channel.send('2b2t.org is the OLDEST ANARCHY SERVER, there are no rules, scumming, lying and hacking is allowed. There are no limits. The world is nearly 10 years old, no restarts no shit and best of all no admins!')
  }
});

client.on('message', message => {
  if (message.content === 'Hausemaster') {
    const attachment = new MessageAttachment('./pics/hausemaster.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Nigger') {
    message.channel.send('I hate niggers because they smell black')
  }
});

client.on('message', message => {
  if (message.content === 'Racism') {
    message.channel.send('I love racism')
  }
});

client.on('message', message => {
  if (message.content === `Racist`) {
    message.channel.send(`Oh no ${message.author.username} is a racist!`);
  }
});

client.on('message', message => {
  if (message.content === `Where the fuck am I`) {
    message.channel.send(`You are in ${message.guild.name}`);
  }
});

client.on('message', message => {
  if (message.content === 'Jews') {
    message.channel.send('Kill all the jews! HEIL HITLER')
  }
});

client.on('message', message => {
  if (message.content === 'Hitler') {
    message.channel.send('HEIL HITLER! HITLER WAS THE BEST!')
    const attachment = new MessageAttachment('./pics/hitler.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Heil Hitler') {
    message.channel.send('HEIL HITLER')
  }
});

client.on('message', message => {
  if (message.content === 'gay') {
    message.channel.send('Gay people are SHIT. I hope one day they all vanish')
  }
});

client.on('message', message => {
  if (message.content === 'webex') {
    message.channel.send('web is my ex')
  }
});

client.on('message', message => {
  if (message.content === 'SalC1') {
    message.channel.send('Shall see one')
  }
});

client.on('message', message => {
  if (message.content === 'FitMC') {
    message.channel.send('ThE oLdEsT aNaRcHy SeRvEr In MiNeCrAfT 2b2t.org. Rasher get retk popbob backdoor hausemaster mad hause prio ban brownman brownman now lag 2b2t bad bad bad and lock hausemaster paypal account Hausemaster is kil')
  }
});

client.on('message', message => {
  if (message.content === 'Βαβούρας') {
    message.channel.send('Βαβούρας OwO | To palio message allaje command, twra einai Βαβούρας2')
  }
});

client.on('message', message => {
  if (message.content === 'Βαβούρας2') {
    message.channel.send('@everyone O BABOURAS APATAEI TON MIXAHL')
  }
});

client.on('message', message => {
  if (message.content === 'Μιχαήλ') {
    message.channel.send('ΒΑΒΟΥΡΑ GIRNA PISO. :cry:')
  }
});

client.on('message', message => {
  if (message.content === 'Mixahl Sad') {
    const attachment = new MessageAttachment('./pics/mixahlsad1.png');
    message.channel.send(attachment);
  }
});
//mixahlsad2.png

client.on('message', message => {
  if (message.content === 'Mixahl Sad 2') {
    const attachment = new MessageAttachment('./pics/mixahlsad2.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Mixahl Sad 3') {
    const attachment = new MessageAttachment('./pics/mixahlsad3.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Fox') {
    const attachment = new MessageAttachment('./pics/fox.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Babouras sex') {
    const attachment = new MessageAttachment('./pics/babourassex.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Babouras me mixahl') {
    const attachment = new MessageAttachment('./pics/babourasmemixahl.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Θεός Βαβούρας') {
    const attachment = new MessageAttachment('./pics/babourasphotostefano.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'server ip') {
    message.channel.send('alopex.nitrado.net')
  }
});

client.on('message', message => {
  if (message.content === 'Βαβούρας σεξ') {
    const attachment = new MessageAttachment('./pics/babourassex.png');
    message.channel.send(attachment);
  }
});


client.on('message', message => {
  if (message.content === 'Joanna') {
    const attachment = new MessageAttachment('./pics/joanna.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
    if (message.content === 'About') {
        message.channel.send('I am just a random bot created by kostas456_YT#9842. Btw this bot runs on Arch Linux. FLEX FLEX FLEX. Whould be a bigger flex if it run on Gentoo, will do that sometime. Arch Linux user FLEXING')
    }
})

// Best Rapper (Logic)
client.on('message', message => {
  if (message.content === 'Best Rapper') {
    message.channel.send('Logic')
	message.channel.send('https://tenor.com/view/logic-gif-9064307')
  }
});

client.on('message', message => {
  if (message.content === 'Best Linux Distro') {
    message.channel.send('Gentoo | https://www.gentoo.org')
  }
});

// Haha no. Black lives do not matter. | TRUMP 2024 and /pol/ and /b/ of https://4chan.org
client.on('message', message => {
  if (message.content === 'BLM') {
    message.channel.send('Haha no. Black lives do not matter. | TRUMP 2024 and /pol/ and /b/ of https://4chan.org')
    const attachment = new MessageAttachment('./pics/trump2024.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Joanna2') {
    const attachment = new MessageAttachment('./pics/joanna2.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Loukouman') {
    message.channel.send('Ειναι αεροπλανο, ειναι πουλι ; ΟΧΙ ειναι ο ΛΟΥΚΟΥΜΑΝ!')
    const attachment = new MessageAttachment('./pics/loukouman.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Loukoumam') {
    message.channel.send('Ειναι αεροπλανο, ειναι πουλι ; ΟΧΙ ειναι ο ΛΟΥΚΟΥΜΑΝ! | SOSTO COMMAND Loukouman')
    const attachment = new MessageAttachment('./pics/loukouman.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === '!Loukoumam') {
    message.channel.send('Ειναι αεροπλανο, ειναι πουλι ; ΟΧΙ ειναι ο ΛΟΥΚΟΥΜΑΝ! | SOSTO COMMAND Loukouman | TWRA ME !')
    const attachment = new MessageAttachment('./pics/loukouman.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === '!Loukouman') {
    message.channel.send('Ειναι αεροπλανο, ειναι πουλι ; ΟΧΙ ειναι ο ΛΟΥΚΟΥΜΑΝ!  | TWRA ME !')
    const attachment = new MessageAttachment('./pics/loukouman.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Arch Linux') {
    message.channel.send('BTW I use Arch')
  }
});

client.on('message', message => {
  if (message.content === 'Joanna + Kostas') {
    message.channel.send(':eyes: Yes? No? Who knows')
  }
});

client.on('message', message => {
  if (message.content === 'Boobies') {
    message.channel.send('BOOBIES!!!')
    const attachment = new MessageAttachment('./pics/alopexboobies.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Joanna3') {
    const attachment = new MessageAttachment('./pics/joanna3.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'yawn') {
    const attachment = new MessageAttachment('./pics/yawn.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'music') {
    const attachment = new MessageAttachment('./pics/music.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'WHAT') {
    const attachment = new MessageAttachment('./pics/what.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Famous') {
    const attachment = new MessageAttachment('./pics/famous.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'clown') {
    const attachment = new MessageAttachment('./pics/clown.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'ok') {
    const attachment = new MessageAttachment('./pics/okhoney.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Cry') {
    const attachment = new MessageAttachment('./pics/cry.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Sad') {
    const attachment = new MessageAttachment('./pics/sadpepe.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Gun') {
    const attachment = new MessageAttachment('./pics/pepewithgun.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Eisai mia fatsa') {
    const attachment = new MessageAttachment('./pics/face.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'why') {
    const attachment = new MessageAttachment('./pics/why.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Oh no') {
    const attachment = new MessageAttachment('./pics/worriedpepe.png');
    message.channel.send(attachment);
  }
});

// tellstorypepe.png

client.on('message', message => {
  if (message.content === 'Tell a story') {
    const attachment = new MessageAttachment('./pics/tellstorypepe.png');
    message.channel.send(attachment);
  }
});

// nazipepekill.jpg

client.on('message', message => {
  if (message.content === 'I will kill you') {
    const attachment = new MessageAttachment('./pics/nazipepekill.jpg');
    message.channel.send(attachment);
  }
});

// nazipepewcross

client.on('message', message => {
  if (message.content === 'Nazi pepe') {
    const attachment = new MessageAttachment('./pics/nazipepewcross.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Χαλάρωσε') {
    message.channel.send('Χαλάρωσε μην το κάνεις')
      const attachment = new MessageAttachment('./pics/xalarose.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Bobby Terantino') {
    message.channel.send('Bobby Teranntino !')
    const attachment = new MessageAttachment('./pics/bobby.jpeg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Bobby Terantino II') {
    message.channel.send('Bobby Teranntino II !')
    const attachment = new MessageAttachment('./pics/bobby2.jpeg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Fav Alboum') {
    message.channel.send('Bobby Teranntino II ! Bitch Im the Wizard of Oz')
    const attachment = new MessageAttachment('./pics/bobby2.jpeg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Joanna69') {
    message.channel.send('SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX SEX ')
    const attachment = new MessageAttachment('./pics/joanna2.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'kplay') {
    message.channel.send('Click here this --> https://www.youtube.com/watch?v=j5a0jTc9S10')
    const attachment = new MessageAttachment('./pics/face.jpg');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'Bye') {
    const attachment = new MessageAttachment('./pics/bye.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'song') {
    message.channel.send('Join us now and share the software\nYou ll be free, hackers, you ll be free\nJoin us now and share the software\nYou ll be free, hackers, you ll be free\nHoarders can get piles of money\nThat is true, hackers, that is true\nBut they cannot help their neightbors\nThats not good, hackers, thats not good\nWhen we have enought free software\nAt our call, hackers, at out call\nWe ll kick out those dirty licenses\n Even more, hackers, even more\nJoin us now and share the software\nYou ll be free, hackers, you ll be free\nJoin us now and share the software\nYou ll be free, hackers, you ll be free')
        const attachment = new MessageAttachment('./pics/stallman.jpeg');
  }
});

client.on('message', message => {
  if (message.content === 'Song') {
    message.channel.send('Join us now and share the software\nYou ll be free, hackers, you ll be free\nJoin us now and share the software\nYou ll be free, hackers, you ll be free\nHoarders can get piles of money\nThat is true, hackers, that is true\nBut they cannot help their neightbors\nThats not good, hackers, thats not good\nWhen we have enought free software\nAt our call, hackers, at out call\nWe ll kick out those dirty licenses\n Even more, hackers, even more\nJoin us now and share the software\nYou ll be free, hackers, you ll be free\nJoin us now and share the software\nYou ll be free, hackers, you ll be free')
        const attachment = new MessageAttachment('./pics/stallman.jpeg');
  }
});

// svisto.jpg
client.on('message', message => {
  if (message.content === 'Svisto') {
    const attachment = new MessageAttachment('./pics/svisto.jpg');
    message.channel.send(attachment);
  }
});

// const attachment = new MessageAttachment('./pics/stallman.jpeg');
client.on('message', message => {
  if (message.content === 'Stallman') {
    message.channel.send('Lord Richard Stallman!')
      const attachment = new MessageAttachment('./pics/stallman.jpeg');
    message.channel.send(attachment);
  }
});


client.on('message', message => {
  if (message.content === 'Show me') {
    message.channel.send('Click me')
      const attachment = new MessageAttachment('./pics/showme.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'kek') {
    message.channel.send('KEK!')
  }
});

client.on('message', message => {
  if (message.content === 'Joanna+Kostas') {
    message.channel.send(':eyes: Yes? No? Who knows')
  }
});

client.on('message', message => {
  if (message.content === 'Hoe') {
    message.channel.send('Your mom is a HOE!')
  }
});

client.on('message', message => {
  if (message.content === 'no u') {
    message.channel.send('NO YOU !')
  }
});

client.on('message', message => {
  if (message.content === 'Kaliterh pinakida kikloforias') {
    message.channel.send('ΝΕΧ-4045')
  }
});

client.on('message', message => {
  if (message.content === 'vibe') {
    const attachment = new MessageAttachment('./pics/music.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'simp') {
    message.channel.send('SIMP!')
  }
});
// manual.docx
client.on('message', message => {
  if (message.content === '$Manual') {
    message.channel.send('**Alopex Command manual**')
    const attachment = new MessageAttachment('./txts/manual.docx');
    message.channel.send(attachment);
  }
});

//I am NOT fetish but a friend of mine is so... let's make fun of him with the BEST
//Thing on the world Alopex. Took me 2 mins to find those pics! 2 Minutes of my life
//For feet pics. EWWW
//BUT IT IS ALOPEX SO. NOT EWW FOR GODNESS ALOPEX EWW FOR MY FRIEND.
//MY FRIEND IS FETISH SO HE CRINGE

client.on('message', message => {
  if (message.content === 'fetish-about') {
    message.channel.send('kostas456_YT (AlopexTMNT) is **NOT** fetish, a friend of him is so\nhe did a google search (Cringe) and he\nfound some feet pics for his friend\nthis *is* **friendship\nIf you want to see those picture type\nfeet 1\nfeet 2\nfeet 3\nfeet 4**')
  }
});
client.on('message', message => {
  if (message.content === 'feet 1') {
    const attachment = new MessageAttachment('./pics/feet1.jpeg');
    message.channel.send(attachment);
  }
});
client.on('message', message => {
  if (message.content === 'feet 2') {
    const attachment = new MessageAttachment('./pics/feet2.jpg');
    message.channel.send(attachment);
  }
});
client.on('message', message => {
  if (message.content === 'feet 3') {
    const attachment = new MessageAttachment('./pics/feet3.jpg');
    message.channel.send(attachment);
  }
});
client.on('message', message => {
  if (message.content === 'feet 4') {
    const attachment = new MessageAttachment('./pics/feet4.jpg');
    message.channel.send(attachment);
  }
});
client.on('message', msg => {
  if (msg.content === 'bell') {
    msg.reply(':bell:');
  }
});
// https://drive.google.com/file/d/16WpBc5cxFpVnfosf6TD41YKjN9LGzHeG/view?usp=sharing
// or
// https://drive.google.com/file/d/16WpBc5cxFpVnfosf6TD41YKjN9LGzHeG
client.on('message', message => {
  if (message.content === 'Video') {
    message.channel.send('https://drive.google.com/file/d/16WpBc5cxFpVnfosf6TD41YKjN9LGzHeG')
  }
});



// ------------------------------------------------
// Message session!
// Pictures will not be added!
// Updated LICENCE
// ------------------------------------------------

client.login(process.env.DISCORDJS_BOT_TOKEN);
