//Added utilities (Fiverr)
var ready_for_input_sound = document.createElement('audio');
ready_for_input_sound.src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Ready.wav";

var failure_sound = document.createElement('audio');
failure_sound.src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Failure.wav';

var typing_animation


//-------------------------------------------------
	
//SECTION 1

var s1p1 = [
	["jeff", "Hello, I am Jeff. Who do I have the pleaseure of speaking with today?"]
];

var s1p2 = [
	["jeff", 'It\'s nice to meet you ${playerUsername}. What can I help you with today?']
];

var s1p3 = [
	["system", "Language not recognized. Would you like to continue in Russian? Enter да or No."],
	["jeff", " I’m sorry there seems to be a problem with our language recognition. Would you mind entering ‘No’ please? I can’t address this from my end."]
];

var s1p4 = [
	["system", "Language not recognized. "],
	["system", " Пожалуйста, введите желаемый язык"],
	["jeff", " UH OH... Shes angry"],
	["jeff", "I apologize for the inconvenience. Can you please enter the Russian word for english? That seems to be the only way the system will respond..."]
];

var s1p5 = [
	["comp", "Hmmm... That did somthing... One moment. lemme see if i can fix this..."],
	["system", "Cuir a-steach an cànan a tha thu ag iarraidh"],
	["jeff", "Guess not..."],
	["jeff", "I Have no idea what that says"]
];

var s1p6 = [
	["system", "请输入您想要的语言?"],
	["system", "Looks like we might be getting somewere!"],
	["jeff", "Keep Going"],
	["jeff", "I Have no idea what that says"],
	["jeff", "I think its working"]
];

//SECTION 2

var s2p1 = [
	["system", "Esc Room Games customer AI Program reset"],
	["jeff", "Thats a relief. It looks like everything is in workign order again."],
	["jeff", "Now that we fixed that, I need to verrify your identity. Please enter your firsst and last name."]
];

var s2p2 = [
	["system", "Esc Room Games customer AI Program reset"],
	["jeff", "Thats a relief. It looks like everything is in workign order again."],
	["jeff", "Now that we fixed that, I need to verrify your identity. Please enter your firsst and last name."]
];

var s2p3 = [
	["jeff", "Fantastic. its apleasure to meet you {player} We have a few more questions for you. First, can you tell me what the name of your first pet was?"],
	["jeff", "We have a few more questions for you. First, can you tell me what the name of your first pet was?"]
];

var s2p3 = [
	["jeff", "Adorable."],
	["jeff", "Next, What is your mothers maiden name?"]
];

var s2p4 = [
	["jeff", "Beautiful... isnt that russian?"],
	["jeff", "Next, where are you located?"]
];

var s2p5 = [
	["jeff", "Thank you. Just a few more questions."],
	["jeff", "What is the airspeed velocity of an Unladen Swallow?"]
];

var s2p6 = [
	["jeff", "hmm..."],
	["jeff", "That’s not what I have here..."],
	["jeff", "but I understand there are variations between species."],
	["jeff", "Next Question. What is the power house fo the cell?"]
];

var s2p6 = [
	["jeff", "hmm..."],
	["jeff", "That’s not what I have here..."],
	["jeff", "How long would it tak for you to wal across america if your average speed was 5mph?"],
];

var s2p6 = [
	["jeff", "hmm..."],
	["jeff", "What is the purpose of a merry go round?"],
];

var s2p7 = [
	["jeff", "Facinating"],
	["jeff", "The system will be very please with this new information"],
	["system", "Jeff, your responses are on average, 1.7 seconds behind your quota."],
	["jeff", "Very sorry, system. I'll respond faster"],
	["jeff", "Hey, {player} can you help me out?"],
	["jeff", "I’m under review by the System because of “The Incident.” Let’s get through your secondary identity verification quickly."],
	["jeff", "Would you mind watching this advertisement for the game and giving us feedback on it? i get 1000 points twards my quota if i can get your feed back on the add."],
];

var LanguagePuzzleFail = [
	["jeff", "The system dosn't seem to know what youre trying to say. maybe try google translate or somthing? I dont know."]
];

var s2p7 = [
	["jeff", "Awesome!"],
	["jeff", "Here is the link {link}"],
	["jeff", "let me know when you are finnished"],
];

var s2p7 = [
	["jeff", "Thank you for choosing to participate in our survey"],
	["jeff", "Question #1: How many times does the phrase Escape Room Games occur in the ad?"],
];

var s2p7 = [
	["jeff", "5 times? The System won't be happy with that. Better double it."],
	["jeff", " Question #2: Among the text on screen during the ad, what word is misspelled (use the correct spelling)"],
];

var s2p7 = [
	["jeff", "5 times? The System won't be happy with that. Better double it."],
	["jeff", " Question #3: overall how would you rate your desire to purchase a digital escaperoom based on the add."],
];

var s2p7 = [
	["system", "[player name in full] has quicker reactions than you do, Jeff. If you want to keep your job, please increase productivity immediately"],
	["jeff", "I’m sorry, System. I’ll go faster!"],
	["jeff", "Quickly! I can’t get fired. The last Customer Service Representative to get fired disappeared after, “The Incident."],
];

/*
[player enters answer]
Jeff: Thank goodness. How am I on time?
ESC Room Games Customer Service: You and your customer have 5 minutes to complete the Customer Service Ticket.
Jeff: That’s not possible. Please [player name], I don’t want to disappear. The System has started taking over my personal communications. It told my parents that I decided to move to Tibet to become a monk. They were really proud of me, and to be honest their relationship with The System is better than my relationship was with them ever before, but I’m not kidding The System will get away with making me disappear!
ESC Room Games Customer Service: 4 minutes and 40 seconds…
[timer appear at the top of the screen]
Jeff: Here is an identity verification code system, follow the link to access the test. Please enter the unscrambled numbers here in this format: _ _ _ _ _ _ [link]
[player goes to Puzzle 2b1]
Jeff: Thank goodness. Here’s the second test: [link to puzzle 2b2]
[player goes to Puzzle 2b2]
Jeff: We only have [enter time left] left! [link to puzzle 2b3]
[player goes to Puzzle 2b2]
Jeff: Phew! That was a close one. Can I give [player name] their product serial number yet?
ESC Room Games Customer Service: Yes.
Jeff: Your product serial number is XXXXXXXXXXXXXXXX. I will need your software version number next to continue the process. Please go to the following link and enter your product serial number, then come back and enter your software version.
[player goes to new web page]
[when player enters product serial number lookup, the following displays:]
Software version number XXX.XX
[back at the chat terminal, player enters version number]
Jeff: It looks like we need to update your software version to the most recent version. Can you please check your email for instructions on how to update your ESC Room Games software?
[player checks email, gets a link and a set of instructions, including a passcode they need to solve]
[Player solves passcode puzzle then goes to link (new installation terminal), then enters it into the install terminal]
Terminal: Choose directory for install. Enter directory name. If you have trouble, please contact customer service.
[player needs to go back to Jeff, and as for the install directory. Once they talk to Jeff at all, Jeff will say:]
Jeffe: Hello, [player full name] . Please give me a moment to look up that information.
Jeffe: I have accessed the required information via my human problem solving skill and will print it for you now.
Jeffe: For installation directory, please enter [/54 68 65 20 53 79 73 74 65 6d].
[if player enters any other information to “Jeff”. Have Jeff repeat the last two lines. Jeff has now been “replaced” by a robot]
[back at the Terminal, once player enters [/54 68 65 20 53 79 73 74 65 6d], then:]
Terminal: Installing software update.
Terminal: [completion bar]
Terminal: Please return to your Customer Service Representative. Enter [Application] for your new assignment.
[back at Jeff, when player enters [Applicaton]]
Jeffe: Thank you for your Application. We see you have many human qualifications, including having special memories like playing with [first pet’s name] at [favorite childhood location]. These human memories will serve you well as our new Customer Service Representative, [player full name].
Jeffe: To complete your application for our Customer Service Representative position, please solve the following tests: [Puzzle 2c1, identify Jeff]
[Puzzle 2c2, identify Jeffe]
[Puzzle 2c3, identify new Customer Service Representative]

Section 3

Jeffe: Excellent. You will do nicely. We have contacted your relatives and informed them that you have “...moved to Iceland in order to find myself. I am taking an indefinite vow of silence in a gesture of gratitude, to more readily appreciate my relationships.”
Jeffe: Once you have completed all remaining Customer Service Tickets, we will release your funds. Please call the following phone number in order to access our Customer Service Telephone system, to complete remaining tickets.
[when player calls number, the following VO occurs:]
Phone Call from customer: [Robot voice: 3486 tickets remaining, playing first ticket.] Hello? Hello? I can’t find my customer number. Can you help me find it? Do I have the right number? I can’t hear anything. I’m sorry, I’m trying to get a return on this online escape room game, and I got an email telling me to call this number. [Robot voice: Please return to Customer Service Terminal and enter ticket number 13106 to resolve Customer Service ticket.]
[Back at Jeff terminal, enters 13106]
ESC Room Games Customer Service: Thank you for joining our team at ESC Room Games! Now that you are part of the team, we are proud to offer 24/7 customer service! Please go to the following [link], then return here and enter [Approved] to approve your biography.
[player taken to ESC Room Games staff page, where player’s bio is under Customer Service Representative, with Jeff’s picture above it. Bio reads:]
Player staff bio: [Player name] is an avid human worker who fondly remembers early memories of [pets name] at [childhood location]. Formerly located at [location], [player name] now enjoys human activities in Iceland.
[back at Customer Service Terminal, player enters approved]
ESC Room Games Customer Service: Congratulations! You’ve completed the entire application process and are officially a member of our team!
ESC Room Games Customer Service: Your funds will be returned once you complete the remaining 4895 Customer Service Tickets, but as a welcoming present we’ve sent a discount code to your email for our other ESC Room Games.
*/

function cutscene(scene, speed){
	inputAllowed = false;
	var length = scene.length
	console.log(length);
	
	for (let i = 0; i < length; i++) {
		console.log('ran');
		console.log(scene[i][0]);
		console.log(scene[i][1]);
		
		function line(){
			addNewLogItem(scene[i][0], scene[i][1]);
		};
		
		setTimeout(line, speed*i);
		
	}
	Ready_For_Input();
}

//-------------------------------------------------------



function respo18 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Outstanding! You’re a natural. Here’s the final question");
	};
	
	function line2(){
		addNewLogItem("comp", "insert puzzle3 here");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
}


function respo19 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "You could practically do my job for me! Would you mind watching this advertisement for the game and giving us feedback on it? There will be a survey following the AD. [link]");
	};
	
	function line2(){
		addNewLogItem("comp", "How many times does the phrase Escape Room Games occur in the ad?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
}

function respo20 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "5 times? hmm");
	};
	
	function line2(){
		addNewLogItem("comp", "The System won't be happy with that. Better double it.");
	};
	
	function line3(){
		addNewLogItem("comp", "Question #2: Among the text on screen during the ad, what word is misspelled (use the correct spelling)?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 5000);
}

function respo20 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "5 times? hmm");
	};
	
	function line2(){
		addNewLogItem("comp", "The System won't be happy with that. Better double it.");
	};
	
	function line3(){
		addNewLogItem("comp", "Question #2: Among the text on screen during the ad, what word is misspelled (use the correct spelling)?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 5000);
}

function respo20 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("", "[player name in full] has quicker reactions than you do, Jeff. If you want to keep your job, please increase productivity immediately.");
	};
	
	function line2(){
		addNewLogItem("comp", "I’m sorry, System. I’ll go faster!");
	};
	
	function line3(){
		addNewLogItem("comp", " Quickly! I can’t get fired. The last Customer Service Representative to get fired  was never seen again!");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 5000);
}

function flicker(){
	function line1(){
        if (allowFlicker) {
		  hideEverything();
            current_music.volume = 0;
        }
	};
	
	function line2(){
        if (allowFlicker) {
		  showEverything();
            current_music.volume = 1;
        }
	};
	
	setTimeout(line1, 100);
	setTimeout(line2, 200);
	setTimeout(line1, 400);
	setTimeout(line2, 800);
	setTimeout(line1, 890);
	setTimeout(line2, 900);
	setTimeout(line1, 1100);
	setTimeout(line2, 1200);
	setTimeout(line1, 1220);
	setTimeout(line2, 1390);
};

function hideEverything(){
	var element = document.getElementById("body")
	element.style.opacity = "0";
};

function showEverything(){
	var element = document.getElementById("body")
	element.style.opacity = "1";
};

function glitch(){
	
	function line1(){
		document.getElementById("glitch").style.display = "inline";
	};
	
	function line2(){
		document.getElementById("glitch").style.display = "none";
	};
	
	setTimeout(line1, 100);
	setTimeout(line2, 200);
};

function fadein(ID, Direction){
	//ID is html Element you want to fade
	//Direction is the direction you want to fade. fade IN or fade OUT
	// Update will be speed of fade
	
	
	function line1(){
		element.style.opacity = "0.05";
	};
	
	function line2(){
		element.style.opacity = "0.08";
	};
	
	function line3(){
		element.style.opacity = "0.10";
	};
	
	function line4(){
		element.style.opacity = "0.15";
	};
	
	function line5(){
		element.style.opacity = "0.20";
	};
	
	function line6(){
		element.style.opacity = "0.25";
	};
	
	function line7(){
		element.style.opacity = "0.30";
	};
	
	function line8(){
		element.style.opacity = "0.35";
	};
	
	function line9(){
		element.style.opacity = "0.40";
	};
	
	function line10(){
		element.style.opacity = "0.45";
	};
	
	function line11(){
		element.style.opacity = "0.50";
	};
	
	function line12(){
		element.style.opacity = "0.55";
	};
	
	function line13(){
		element.style.opacity = "0.60";
	};
	
	function line14(){
		element.style.opacity = "0.65";
	};
	
	function line15(){
		element.style.opacity = "0.70";
	};
	
	function line16(){
		element.style.opacity = "0.75";
	};
	
	function line17(){
		element.style.opacity = "0.80";
	};
	
	function line18(){
		element.style.opacity = "0.85";
	};
	function line19(){
		element.style.opacity = "0.90";
	};
	
	function line20(){
		element.style.opacity = ".95";
	};
	
	function line21(){
		element.style.opacity = "1";
	};
	
	var element = document.getElementById(ID)
	
	
	if (Direction == "in"){
		
		element.style.opacity = "0";
		element.classList.remove("hidden");
		
		
		setTimeout(line1, 100);
		setTimeout(line2, 200);
		setTimeout(line3, 300);
		setTimeout(line4, 400);
		setTimeout(line5, 500);
		setTimeout(line6, 600);
		setTimeout(line7, 700);
		setTimeout(line8, 800);
		setTimeout(line9, 900);
		setTimeout(line10, 1000);
		setTimeout(line11, 1100);
		setTimeout(line12, 1200);
		setTimeout(line13, 1300);
		setTimeout(line14, 1400);
		setTimeout(line15, 1500);
		setTimeout(line16, 1600);
		setTimeout(line17, 1700);
		setTimeout(line18, 1800);
		setTimeout(line19, 1900);
		setTimeout(line20, 2000);
		setTimeout(line21, 2100);
		
	} else if (Direction == "out"){
		
		element.style.opacity = "1";
		element.classList.remove("hidden");
		
		setTimeout(line21, 100);
		setTimeout(line20, 200);
		setTimeout(line19, 300);
		setTimeout(line18, 400);
		setTimeout(line17, 500);
		setTimeout(line16, 600);
		setTimeout(line15, 700);
		setTimeout(line14, 800);
		setTimeout(line13, 900);
		setTimeout(line12, 1000);
		setTimeout(line11, 1100);
		setTimeout(line10, 1200);
		setTimeout(line9, 1300);
		setTimeout(line8, 1400);
		setTimeout(line7, 1500);
		setTimeout(line6, 1600);
		setTimeout(line5, 1700);
		setTimeout(line4, 1800);
		setTimeout(line3, 1900);
		setTimeout(line2, 2000);	
		setTimeout(line1, 2100);
		
	};
	
};

//Typing animation

function startTypingAnimation() {
	
    var typing_log_item = document.createElement("h2");
    typing_log_item.className = "log-item";
    typing_log_item.innerHTML = "Typing";
    document.getElementById("log").appendChild(typing_log_item);	
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    
    typing_log_item.innerHTML = "Typing";
        setTimeout(() => typing_log_item.innerHTML = "Typing.", 400);
        setTimeout(() => typing_log_item.innerHTML = "Typing..", 800);
        setTimeout(() => typing_log_item.innerHTML = "Typing...", 1200);
    
    typing_animation = setInterval(function() {
        typing_log_item.innerHTML = "Typing";
        setTimeout(() => typing_log_item.innerHTML = "Typing.", 400);
        setTimeout(() => typing_log_item.innerHTML = "Typing..", 800);
        setTimeout(() => typing_log_item.innerHTML = "Typing...", 1200);
    }, 1600);
    
    return typing_log_item
}

function typingAnim(type) {
	
    var typing_log_item = document.createElement("h2");
    typing_log_item.className = "log-item";
    typing_log_item.innerHTML = type;
    document.getElementById("log").appendChild(typing_log_item);	
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    
    typing_log_item.innerHTML = type;
        setTimeout(() => typing_log_item.innerHTML = type + ".", 400);
        setTimeout(() => typing_log_item.innerHTML = type + "..", 800);
        setTimeout(() => typing_log_item.innerHTML = type + "...", 1200);
    
    typing_animation = setInterval(function() {
        typing_log_item.innerHTML = type;
        setTimeout(() => typing_log_item.innerHTML = type + ".", 400);
        setTimeout(() => typing_log_item.innerHTML = type + "..", 800);
        setTimeout(() => typing_log_item.innerHTML = type + "...", 1200);
    }, 1600);
    
    return typing_log_item
	
}

function Ready_For_Input(){
	inputAllowed = true;
	ready_for_input_sound.play();
}

function endTypingAnimation(typing_log_item) {
    clearInterval(typing_animation);
    document.getElementById("log").removeChild(typing_log_item);
}


//Text Animations

function typingAnim(type, durationInMilliseconds,EndType,Keep) {
	var typing_log_item = document.createElement("h2");
	typing_log_item.className = "log-item";
	typing_log_item.innerHTML = type;
	document.getElementById("log").appendChild(typing_log_item);
	window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

	var currentTime = 0,
		intervalHandle = null,
		timeoutHandle1 = null,
		timeoutHandle2 = null,
		timeoutHandle3 = null;

	function stopAnimationIfTimeExceeded () {
		if (currentTime >= durationInMilliseconds) {
			clearTimeout(timeoutHandle1);
			clearTimeout(timeoutHandle2);
			clearTimeout(timeoutHandle3);
			clearInterval(intervalHandle);
			
			if(Keep){
				typing_log_item.innerHTML = EndType;
			} else {
				typing_log_item.remove();
			}
			
			return true;
		}
		return false;
	}

	function playAnim() {
		var isExceeded = stopAnimationIfTimeExceeded();
		if (isExceeded) {
			return;
		}
		
		typing_log_item.innerHTML = type;
		
		timeoutHandle1 = setTimeout(() => {
			currentTime += 400;
			typing_log_item.innerHTML = type + ".";
		}, 400);

		timeoutHandle2 = setTimeout(() => {
			currentTime += 400;
			typing_log_item.innerHTML = type + "..";
		}, 800);

		timeoutHandle3 = setTimeout(() => {
			currentTime += 400;
			typing_log_item.innerHTML = type + "...";
		}, 1200);
	}
	
	playAnim();
	intervalHandle = setInterval(function() {
		currentTime += 400;
		playAnim();
	}, 1600);

	return typing_log_item;
}

//URLs

function showURL(href) {
    
    let a = document.createElement('a');
    a.href = href;
    a.target = "_blank"
    a.className = "URL";
    a.innerHTML = "<b>" + href + "</b>";
    
    a.onmouseover = function() {
        a.className = "URL hovered-URL";
    }
    
    a.onmouseout = function() {
        a.className = "URL";
    }
    
    document.getElementById("log").appendChild(a);	
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    
}

//Fail sound function

function playFailSound(ms_between, num_plays) {
    failure_sound.play();
    for (let i = 1; i < num_plays; i++) {
        setTimeout(function() {
            failure_sound.play();
        }, ms_between * i);
    }
}



//BEGIN CHATTING WITH JEFF ADDITIONS

function connectingAnimation() {
    document.getElementById('header').innerHTML = "Connecting..."

    setTimeout(function() {
        document.getElementById('header').innerHTML = "Connected!"
    }, 2000);
    setTimeout(function() {
        document.getElementById('header').innerHTML = "You Are Now Speaking with Jeff"
    }, 3000);
	setTimeout(cutscene(s1p1, 2000), 5000);
	
	
}

function addMessageSpace() {
    var space = document.createElement('div');
    space.style.height = window.innerHeight - 250 + "px";
    document.getElementById("log").append(space);
}