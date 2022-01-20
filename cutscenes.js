//Added utilities (Fiverr)
var ready_for_input_sound = document.createElement('audio');
ready_for_input_sound.src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Ready.wav";

var failure_sound = document.createElement('audio');
failure_sound.src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Failure.wav';

var typing_animation
var playerUsername = "";

// GAME START
//BEGIN CHATTING WITH JEFF

function connectingAnimation() {
    document.getElementById('header').innerHTML = "Connecting..."

    setTimeout(function() {
        document.getElementById('header').innerHTML = "Connected!"
    }, 2000);
    setTimeout(function() {
        document.getElementById('header').innerHTML = "You Are Now Speaking with Jeff"
    }, 3000);
	connected = true;

}

function addMessageSpace() {
    var space = document.createElement('div');
    space.style.height = window.innerHeight - 250 + "px";
    document.getElementById("log").append(space);
}

	
//SECTION 1

var s1p1 = [
	["jeff", "Hello, I am Jeff. Who do I have the pleasure of speaking with today?", 0 ]
];

var s1p2 = [
	["jeff", "It\'s nice to meet you. What can I help you with today?", 0]
];

var s1p3 = [
	["system", "Language not recognized. Would you like to continue in Russian? Enter да or No.", 0],
	["jeff", " I’m sorry there seems to be a problem with our language recognition. Would you mind entering ‘No’ please? I can’t address this from my end.", 0]
];

var s1p4 = [
	["system", "Language not recognized. ", 0],
	["system", " Пожалуйста, введите желаемый язык", 0],
	["jeff", " UH OH...I think that made it worse", 0],
	["jeff", "I apologize for the inconvenience. Can you please enter the Russian word for English? That seems to be the only way the system will respond...", 0]
];

var s1p4Fail = [
	["system", "Language not recognized. ", 0],
	["system", " Пожалуйста, введите желаемый язык", 0],
	["jeff", "Hmmm... That doesnt seem right...", 0],
	["jeff", "I took 3 years of russian in college. I think the russian word for english is английский.", 0],
	["jeff", "I usualy just used google translate to get though that class.", 0]
];

//Answer: английский

var s1p5 = [
	["system", "Am bu mhath leat leantainn air adhart sa chànan seo?", 0],
	["jeff", "Hmmm... That did something...", 0],
	["jeff", "But i have no idea what that says.", 0]
];

//Answer: Sasannach
// NEW ANSWER: Chan eil

var s1p6 = [
	["system", "这种语言怎么样?", 0],
	["jeff", "Looks like we might be getting somewhere!", 0],
	["jeff", "Keep Going", 0]
];

//Answer:  英语
//NEW ANSWER: 不

var s1p7 = [
	["system", "Markaas luqadee rabtaa?!", 0],
	["jeff", "Its working!", 0],
	["jeff", "Try to do that one now.", 0]
];

//Answer: Ingiriis

var s1p8 = [
	["system", "ຂ້ອຍບໍ່ເຂົ້າໃຈ. ກະລຸນາພິມພາສາທີ່ທ່ານຕ້ອງການເປັນພາສາອາຣັບ", 0],
	["jeff", "Looks like we might be getting somewhere!", 0],
];

//Answer: ພາສາອັງກິດ
//NEW ANSWER: الإنجليزية


//SECTION 2

var s2p1 = [
	["system", "Esc Room Games customer AI Program reset", 0],
	["jeff", "Hello, I'm jeff. What can I help you with today?", 0],
];

var s2p2 = [
	["jeff", "I can certainly help you with that.", 0],
	["jeff", "I'll just need to verify your identity. Please enter your first and last name.", 0]
];

var s2p3 = [
	["jeff", "Fantastic. its a pleasure to meet you. We have a few more questions for you. First, can you tell me what the name of your first pet was?", 0],
];

var s2p4 = [
	["jeff", "Adorable.", 0],
	["jeff", "Next, What is your mothers maiden name?", 0]
];

var s2p5 = [
	["jeff", "Beautiful... isn't that Russian?", 0],
	["jeff", "Next, what city are you located?", 0]
];

var s2p6 = [
	["jeff", "Thank you. Just a few more questions.", 0],
	["jeff", "What is the airspeed velocity, in miles per hour, of an Unladen Swallow?", 0]
];

var s2p7 = [
	["jeff", "hmm..."],
	["jeff", "That’s not what I have here...", 0],
	["jeff", "but I understand there are variations between species.", 0],
	["jeff", "Next Question. What is the power house of the cell?", 0]
];

var s2p8 = [
	["jeff", "Correct!", 0],
	["jeff", "just a few more.", 0],
	["jeff", "In hours, how long would it take for you to walk across America if your average speed was 5mph?", 0],
];

var s2p9 = [
	["jeff", "Very good!", 0],
	["jeff", "Last but certainly not least…", 0],
	["jeff", "What exactly is the purpose of a rubber duck?", 0],
];

var s2p10 = [
	["jeff", "Fascinating", 0],
	["jeff", "The system will be very please with this new information.", 0],
	["system", "Jeff, You have spent too long on this correspondence. Fulfill the customers needs immediately", 2000],
	["jeff", "Very sorry, system. I'm finishing up right now", 1000],
	["jeff", "Hey, " + playerUsername + " can you help me out?", 1000],
	["jeff", "I’m under review by the System.", 1000],
	["jeff", "it Would really help me if you fill out a survey. Once you Finnish it you'll get your refund. The system hates refunds. It should soften the blow if you fill out the survey.", 500],
	["jeff", `Here's the link: <a target="_blank" href="https://escroomgames.com/Games/I-Want-My-Money-Back/Review">Review Link</a>`, 6000],
	["system", "Aren't you forgetting something Jeff?", 10000],
	["jeff", "Oh Yeah", 9000],
	["jeff", "Thank you for choosing esc room games. The leader in escape room game technology.", 8000],
	["system", "And…", 11000],
	["jeff", "We hope that in the future you will look to esc room games for all your escape room needs", 9000],
	["system", "Jeff!", 12500],
	["jeff", "If you wish to cancel your refund please click this link instead", 11000],
	["jeff", `<a target="_blank" href="https://escroomgames.com/Games/I-Want-My-Money-Back/you-will-be-redirected-shortly">Cancel Refund Link<a>`, 11000],
	["system", "Good", 14000],
	["system", "Thank you user. We hope you will reconsider getting a refund… for Jeff's sake…", 13000],
	["system", "You have been disconected from the chat.", 15000]
];

var LanguagePuzzleFail = [
	["jeff", "The system doesn't seem to know what you're trying to say. maybe try google translate or something? I don't know."]
];

function cutscene(scene, speed){
	inputAllowed = false;
	var length = scene.length
	//console.log(length);

	for (let i = 0; i < length; i++) {
		//Ready for next line false
		//console.log('ran');
		//console.log(scene[i][0]);
		//console.log(scene[i][1]);

		function line(){
			addNewLogItem(scene[i][0], scene[i][1]);
			// ready for next line = true
		};

		setTimeout(line, (speed*i)+scene[i][2]);

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

