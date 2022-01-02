//Added utilities (Fiverr)
var ready_for_input_sound = document.createElement('audio');
ready_for_input_sound.src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Ready.wav";

var failure_sound = document.createElement('audio');
failure_sound.src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Failure.wav';

var typing_animation


//-------------------------------------------------
	
//SECTION 1

var s1p1 = [
	["jeff", "Hello, I am Jeff. Who do I have the pleasure of speaking with today?"]
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
	["jeff", " UH OH... She's angry"],
	["jeff", "I apologize for the inconvenience. Can you please enter the Russian word for English? That seems to be the only way the system will respond..."]
];

//Answer: английский

var s1p5 = [
	["jeff", "Hmmm... That did something... One moment. lemme see if i can fix this..."],
	["system", "Cuir a-steach an cànan a tha thu ag iarraidh"],
	["jeff", "Guess not..."],
	["jeff", "I Have no idea what that says"]
];

//Answer: Sasannach

var s1p6 = [
	["system", "请输入您想要的语言"],
	["jeff", "Looks like we might be getting somewhere!"],
	["jeff", "Keep Going"],
	["jeff", "I think its working"]
];

//Answer:  英语

var s1p7 = [
	["system", "Fadlan qor luqaddaada"],
	["jeff", "Looks like we might be getting somewhere!"],
	["jeff", "Its working!"],
	["jeff", "Keep going"],
];

//Answer: Ingiriis

var s1p8 = [
	["system", "ຂ້ອຍບໍ່ເຂົ້າໃຈ. ກະລຸນາຂຽນພາສາທີ່ທ່ານເວົ້າຕາມປະເພນີ"],
	["system", "Looks like we might be getting somewhere!"],
];

//Answer: ພາສາອັງກິດ


//SECTION 2

var s2p1 = [
	["system", "Esc Room Games customer AI Program reset"],
	["jeff", "Hello, I'm jeff. What can I help you with today?"],
];

var s2p1 = [
	["jeff", "I can certainly help you with that."],
	["jeff", "I'll just need to verify your identity. Please enter your first and last name."]
];

var s2p3 = [
	["jeff", "Fantastic. its a pleasure to meet you {player} We have a few more questions for you. First, can you tell me what the name of your first pet was?"],
];

var s2p3 = [
	["jeff", "Adorable."],
	["jeff", "Next, What is your mothers maiden name?"]
];

var s2p4 = [
	["jeff", "Beautiful... isn't that Russian?"],
	["jeff", "Next, what city are you located?"]
];

var s2p5 = [
	["jeff", "Thank you. Just a few more questions."],
	["jeff", "What is the airspeed velocity of an Unladen Swallow?"]
];

var s2p6 = [
	["jeff", "hmm..."],
	["jeff", "That’s not what I have here..."],
	["jeff", "but I understand there are variations between species."],
	["jeff", "Next Question. What is the power house of the cell?"]
];

var s2p6 = [
	["jeff", "Correct!"],
	["jeff", "just a few more."]
	["jeff", "How long would it take for you to walk across America if your average speed was 5mph?"],
];

var s2p6 = [
	["jeff", "Very good!"],
	["jeff", "Last but certainly not least…"]
	["jeff", "What is the purpose of a merry go round?"],
];

var s2p7 = [
	["jeff", "Fascinating"],
	["jeff", "The system will be very please with this new information"],
	["system", "Jeff, You have spent to long on this correspondence. Fulfill the customers needs immediately"],
	["jeff", "Very sorry, system. I'm finishing up right now"],
	["jeff", "Hey, {player} can you help me out?"],
	["jeff", "I’m under review by the System."],
	["jeff", "it Would really help me if you fill out a survey. Once you Finnish it you'll get your refund. The system hates refunds. It should soften the blow if you fill out the survey."],
	["jeff", "Here's the link"],
	["system", "Aren't you forgetting something Jeff?"],
	["jeff", "Oh Yeah"],
	["jeff", "Thank you for choosing esc room games. The leader in escape room game technology."],
	["system", "And…"],
	["jeff", "We hope that in the future you will look to esc room games for all your escape room needs"],
	["system", "Jeff!"],
	["jeff", "If you wish to cancel your refund please click this link instead"],
	["jeff", "Link"],
	["system", "Good"],
	["system", "Thank you user. We hope you will reconsider getting a refund… for Jeff's sake…"],
	["system", "Have a nice day"],
];

var LanguagePuzzleFail = [
	["jeff", "The system doesn't seem to know what you're trying to say. maybe try google translate or something? I don't know."]
];


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