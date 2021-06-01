//Added utilities (Fiverr)
var ready_for_input_sound = document.createElement('audio');
ready_for_input_sound.src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Ready.wav";

var failure_sound = document.createElement('audio');
failure_sound.src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Failure.wav';

var typing_animation


//-------------------------------------------------

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
	["jeff", "Keep Going", 0],
	["jeff", "I think its working", 0]
];

//Answer:  英语
//NEW ANSWER: 不

var s1p7 = [
	["system", "Markaas luqadee rabtaa?!", 0],
	["jeff", "Looks like we might be getting somewhere!", 0],
	["jeff", "Its working!", 0],
	["jeff", "Keep going", 0],
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
	["jeff", "What is the airspeed velocity of an Unladen Swallow?", 0]
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
	["jeff", "What is the purpose of a merry go round?", 0],
];

var s2p10 = [
	["jeff", "Fascinating", 0],
	["jeff", "The system will be very please with this new information", 0],
	["system", "Jeff, You have spent to long on this correspondence. Fulfill the customers needs immediately", 2000],
	["jeff", "Very sorry, system. I'm finishing up right now", 1000],
	["jeff", "Hey, " + playerUsername + " can you help me out?", 1000],
	["jeff", "I’m under review by the System.", 1000],
	["jeff", "it Would really help me if you fill out a survey. Once you Finnish it you'll get your refund. The system hates refunds. It should soften the blow if you fill out the survey.", 500],
	["jeff", "Here's the link", 6000],
	["system", "Aren't you forgetting something Jeff?", 6000],
	["jeff", "Oh Yeah", 5000],
	["jeff", "Thank you for choosing esc room games. The leader in escape room game technology.", 4000],
	["system", "And…", 5000],
	["jeff", "We hope that in the future you will look to esc room games for all your escape room needs", 4000],
	["system", "Jeff!", 3000],
	["jeff", "If you wish to cancel your refund please click this link instead", 4000],
	["jeff", "Link", 4000],
	["system", "Good", 3000],
	["system", "Thank you user. We hope you will reconsider getting a refund… for Jeff's sake…", 3000],
	["system", "Have a nice day", 3000]
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

function cutscene1(scene, wait){
	inputAllowed = false;
	
	var length = scene.length
	
	function line(i){
		var c = i
		addNewLogItem(scene[c][0], scene[c][1]);
		
		if(c < length-1){
			c++
			line(c);
		}
		
	}
	
	line(0);
	
}

//-------------------------------------------------------

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
	connected = true;

}

function addMessageSpace() {
    var space = document.createElement('div');
    space.style.height = window.innerHeight - 250 + "px";
    document.getElementById("log").append(space);
}