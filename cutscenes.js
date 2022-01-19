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
	["jeff", "It\'s nice to meet you. What can I help you with today?"]
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
		//console.log('ran');
		console.log(scene[i][0]);
		console.log(scene[i][1]);
		
		function line(){
			addNewLogItem(scene[i][0], scene[i][1]);
		};
		
		setTimeout(line(), speed*i);
		
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