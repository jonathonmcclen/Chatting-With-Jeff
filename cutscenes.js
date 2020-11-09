//Added utilities (Fiverr)
var ready_for_input_sound = document.createElement('audio');
ready_for_input_sound.src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Ready.wav";

var failure_sound = document.createElement('audio');
failure_sound.src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Failure.wav';

var typing_animation

//-------------------------------------------------


function respo1 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Hello, I am Jeff. Who do I have the pleaseure of speeking with today?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo2 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "It's nice to meet you, Joe. What can I help you with today?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo3 () {
	inputAllowed = false;
	
	function line1(){
		playFailSound(400,3);
		addNewLogItem("", "Language not recognized. Would you like to continue in Russian? Enter да or No.");
	};
	
	function line2(){
		addNewLogItem("comp", " I’m sorry there seems to be a problem with our language recognition. Would you mind entering ‘No’ please? I can’t address this from my end.");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 6000);
}

function respo4 () {
	inputAllowed = false;
	
	function line1(){
		playFailSound(400,3);
		addNewLogItem("", "Language not recognized. ");
	};
	
	function line2(){
		addNewLogItem("", " Пожалуйста, введите желаемый язык");
	};
	
	function line3(){
		addNewLogItem("comp", " UH OH... Shes angry");
		Ready_For_Input();
	};
	
	function line4(){
		addNewLogItem("comp", "I apologize for the inconvenience. Can you please enter the Russian word for english? That seems to be the only way the system will respond...");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 6000);
	setTimeout(line4, 8000);
}

function respo5 () {
	inputAllowed = false;
	
	playFailSound(500,3);
	
	function line1(){
		addNewLogItem("comp", "Hmmm... One moment. lemme see if i can fix this...");
	};
	
		function line2(){
		addNewLogItem("", "Cuir a-steach an cànan a tha thu ag iarraidh");
		playFailSound(500,3);
	};
	
	function line3(){
		addNewLogItem("comp", "Nope");
	};
	
	function line4(){
		addNewLogItem("comp", "I Have no idea what that says");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 6000);
	setTimeout(line3, 8000);
	setTimeout(line4, 10000);
}

function respo6 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("", "请输入您想要的语言?");
		Ready_For_Input();
	};
	
	function line2(){
		addNewLogItem("comp", "Looks like we might be getting somewere!");
		Ready_For_Input();
	};
	
	function line3(){
		addNewLogItem("comp", "Keep Going");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 6000);
}

function respo7 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("", "esc Room Games customer AI Program reset");
		Ready_For_Input();
	};
	
	function line2(){
		addNewLogItem("comp", "Hello, I am Jeff. How are you doing today?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
}

function respo8 () {
	inputAllowed = false;
	
	
	function line1(){
		addNewLogItem("comp", "That’s wonderful. I need to verify your identity. Don’t worry, we won’t need your blood sample today. Can we start by verifying your first name?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo9 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Great! Please enter your last name");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo10 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Thank you. It looks like our system is telling me your full name is \[what player entered\]. Does this look correct to you? \[yes or no\]");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo11 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Fantastic. We have a few more questions for you. First, can you tell me what the name of your first pet was?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo12 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Adorable. What was your favorite place to visit as a child?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo13 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Interesting… Where are you located?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo14 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Thank you. One more question, what is the airspeed velocity of an Unladen Swallow?");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}

function respo15 () {
	inputAllowed = false;
	
	
	function line1(){
		addNewLogItem("comp", "hmm...");
	};
	
	function line2(){
		addNewLogItem("comp", "That’s not what I have here, but I understand there are variations between species... ");
	};
	
	function line3(){
		addNewLogItem("", "Excuse me, Jeff, your responses are on average 1.7 seconds behind your quota.");
		Ready_For_Input();
	};
	
	function line4(){
		addNewLogItem("comp", "I will respond faster.");
	};
	
	function line5(){
		addNewLogItem("comp", " Hi [player name], can you help me out? I’m under review by the System because of “The Incident.” Let’s get through your secondary identity verification quickly.");
	};
	
	function line5(){
		addNewLogItem("comp", "Can you please enter your product serial number?");
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 6000);
	setTimeout(line4, 8000);
	setTimeout(line5, 10000);
}

function respo16 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Oh, it looks like you don’t have access to your product serial number. We can send you your product serial number via email if you answer the following questions.");
	};
	
	function line2(){
		addNewLogItem("comp", "Please answer the following:");
	};
	
		function line3(){
		addNewLogItem("comp", "insert puzzle here");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 6000);
}

function respo17 () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Great!");
	};
	
	function line2(){
		addNewLogItem("comp", "insert puzzle2 here");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
}

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


function languageFail () {
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "The system dosnt seem to know what youre trying to say. maybe try google translate or somthing? I dont know.");
		Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
}






















function Success(){
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "SUCCESS");
		success_sound.play();
	};
	
	function line2(){
		addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " recognized");
	};
	
	function line3(){
		divider();
	};
	
	setTimeout(line1, 1000);
	setTimeout(line2, 3000);
	setTimeout(line3, 5000);
};

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



//Extra glitches




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
}

function addMessageSpace() {
    var space = document.createElement('div');
    space.style.height = window.innerHeight - 250 + "px";
    document.getElementById("log").append(space);
}