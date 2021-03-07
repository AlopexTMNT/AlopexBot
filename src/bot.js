require("dotenv").config();

const { Client, MessageAttachment } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});



client.on('ready', () => {
  console.log(`${client.user.tag} is now online.`);
});

client.on('message', msg => {
  if (msg.content === 'who is alopex') {
    msg.reply('Alopex is a Mutant Red Fox and she apeared in TMNT 2012 TV Series. Sister of Tiger Claw.');
  }
});


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
    message.channel.send('**Alopex Command manual** *$Manual does the same thing*')
    const attachment = new MessageAttachment('./txts/manual.odt');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === `$ping`) {
    message.channel.send('**ALOPEX PING COMMAND (BEST IN THE WORLD)**\nPinging started\nPinging gentoo.org\n [...]\n UR PING SUCKS');
  } else if (message.content === `$beep`) {
    message.channel.send('Boop.');
  } else if (message.content === `$server`) {
    message.channel.send(`Stats for nerds:\n Server name: ${message.guild.name}\nServer Creation date: ${message.guild.createdAt}\nTotal members: ${message.guild.memberCount}\n Server Owner: ${message.guild.owner}\n Server Owner id: ${message.guild.ownerID}\n Server region: ${message.guild.region}\n Server Icon: ${message.guild.icon}\n Server afk channel: ${message.guild.afkChannel}`);
  } else if (message.content === `$user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nCreated at: ${message.author.createdAt}\nAvatar: ${message.author.avatarURL({format} = {})}\n System: ${message.author.system}`);
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



client.on('message', message => {
  if (message.content === 'Tell a story') {
    const attachment = new MessageAttachment('./pics/tellstorypepe.png');
    message.channel.send(attachment);
  }
});



client.on('message', message => {
  if (message.content === 'I will kill you') {
    const attachment = new MessageAttachment('./pics/nazipepekill.jpg');
    message.channel.send(attachment);
  }
});



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


client.on('message', message => {
  if (message.content === 'Svisto') {
    const attachment = new MessageAttachment('./pics/svisto.jpg');
    message.channel.send(attachment);
  }
});


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

client.on('message', message => {
  if (message.content === '$Manual') {
    message.channel.send('**Alopex Command manual**')
    const attachment = new MessageAttachment('./txts/manual.odt');
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



client.on('message', message => {
  if (message.content === 'Fan-Fact1') {
    message.channel.send('Fan fact 1: The design for the Alopex character on the 2012 TV series in heavily based on the Naruto Anime, lead character designer says.')
  }
});
client.on('message', message => {
	if (message.content === 'Vim'){
		message.channel.send('Vim is the best terminal text editor. This message was writter in VIM')
  }
});
client.on('message', msg => {
  if (msg.content === 'I love Alopex') {
    msg.reply('OwO');
  }
});
client.on('message', message => {
  if (message.content === 'About Alopex EN') {
    message.channel.send('Alopex is a slender humanoid mutant fox with cat-like eyes unlike most foxes. Her outfit consists of a purple head bandana with a metal tag on the front, a long, red bandana around her neck, light purple, long-sleeve shirt with net opening and a brown chest-plate over it that extends across her left breast area and large holes on the sleeves, and dark purple pants that also have large holes on the pant leg. Around her waist is Tiger Claws tail that she wears as a belted trophy. ')
  }
});
client.on('message', message => {
  if (message.content === 'About Alopex GR') {
    message.channel.send('Η Alopex είναι μια λεπτή μεταλλαγμένη ανθρωποειδής αλεπού με μάτια που μοιάζουν με γάτα σε αντίθεση με τις περισσότερες αλεπούδες. Η στολή της αποτελείται από μωβ μαντήλι κεφαλής με μεταλλική ετικέτα στο μπροστινό μέρος, μακρύ, κόκκινο φουλάρι γύρω από το λαιμό της, ανοιχτό μοβ, μακρυμάνικο πουκάμισο με δίχτυ άνοιγμα και καφέ κασέτα πάνω από αυτό που εκτείνεται σε όλη την αριστερή περιοχή του μαστού και μεγάλες τρύπες στα μανίκια, και σκούρο μοβ παντελόνι που έχουν επίσης μεγάλες τρύπες στο πόδι του παντελονιού. Γύρω από τη μέση της είναι η ουρά του Tiger Claw που φορά ως τρόπαιο.')
  }
});
client.on('message', message => {
  if (message.content === 'About Alopex JP') {
    message.channel.send('Alopexは、ほとんどのキツネとは異なり、猫のような目をした細い人型の変異キツネです。 彼女の服は、前面に金属タグが付いた紫色の頭のバンダナ、首に長い赤いバンダナ、ネットの開口部が付いた薄紫色の長袖シャツ、そして左胸の領域全体に広がる茶色の胸板で構成されています 袖には大きな穴があり、パンツの脚にも大きな穴がある濃い紫色のパンツ。 彼女の腰の周りには、ベルト付きのトロフィーとして身に着けているタイガークローの尻尾があります。')
  }
});
client.on('message', message => {
  if (message.content === 'About Alopex AL') {
    message.channel.send('Alopex është një dhelpër e hollë mutante humane me sy të ngjashëm me macen, ndryshe nga shumica e dhelprave. Veshja e saj përbëhet nga një bandana me kokë vjollcë me një etiketë metalike në pjesën e përparme, një bandana e gjatë, e kuqe rreth qafës së saj, këmishë me dritë të purpurt, me mëngë të gjata me hapje rrjetë dhe një pjatë kafe në gjoks mbi të që shtrihet në të gjithë zonën e gjoksit të majtë dhe vrima të mëdha në mëngë, dhe pantallona të purpurta të errëta që gjithashtu kanë vrima të mëdha në këmbën e pantallonave. Rreth belit të saj është bishti i Tiger Claw që ajo mban si një trofe me rripa.')
  }
});
client.on('message', message => {
  if (message.content === 'About Alopex RU') {
    message.channel.send('Алопекс - стройная лиса-мутант-гуманоид с кошачьими глазами, в отличие от большинства лисиц. Ее наряд состоит из фиолетовой банданы на голове с металлической биркой спереди, длинной красной банданы на шее, светло-фиолетовой рубашки с длинным рукавом с сетчатым вырезом и коричневой нагрудной пластинки над ней, которая проходит через ее левую область груди. и большие дырочки на рукавах, и темно-фиолетовые штаны с большими дырочками на штанине. Вокруг ее талии - хвост Тигриного Когтя, который она носит в качестве трофея с поясом.')
  }
});
client.on('message', message => {
  if (message.content === 'About Alopex GE') {
    message.channel.send('Alopex ist im Gegensatz zu den meisten Füchsen ein schlanker humanoider mutierter Fuchs mit katzenartigen Augen. Ihr Outfit besteht aus einem lila Kopftuch mit einem Metallschild auf der Vorderseite, einem langen, roten Kopftuch um den Hals, einem hellvioletten Langarmhemd mit Netzöffnung und einer braunen Brustplatte darüber, die sich über ihren linken Brustbereich erstreckt und große Löcher in den Ärmeln und dunkelviolette Hosen, die auch große Löcher im Hosenbein haben. Um ihre Taille liegt Tiger Claws Schwanz, den sie als Gürtel-Trophäe trägt.')
  }
});


client.on('message', message => {
  if (message.content === 'Sexy') {
    message.channel.send('Alopex is so sexy UwU')
      const attachment = new MessageAttachment('./pics/alopex.png');
    message.channel.send(attachment);
  }
});

client.on('message', message => {
  if (message.content === 'See you soon') {
    message.channel.send('Sou ta elega Louka, See you soon')
  }
});

client.on('message', message => {
	if (message.content === 'Kali Linux') {
		message.channel.send('Not recommended as a main driver. Good for a VM or boot from live cd.')
	}
})



// ------------------------------------------------
// Message session!
// Pictures will not be added!
// Updated LICENCE
// Removed useless bloat (Usless lines)
// ------------------------------------------------

client.login(process.env.DISCORDJS_BOT_TOKEN);
