//Sounds
var button_beep_src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362KeyPress.wav";
var main_music_src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362MainMusic.wav';
var intense_music_src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Reeboot.wav";
var alabaster_music_src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362EndMusic.wav";

var main_music = document.createElement('audio');
main_music.src = main_music_src;
main_music.loop = true;

var intense_music = document.createElement('audio');
intense_music.src = intense_music_src;
intense_music.loop = true;

var alabaster_music = document.createElement('audio');
alabaster_music.src = alabaster_music_src;
alabaster_music.loop = true;

var music_on = false;
var current_music = main_music;

var inputAllowed = true;


//Style
var last_message;
var last_message_elem;


//Users
var playerUsername = "";
var firstName= "";
var lastName = "";
var firstPet
var playerPassword = "";
var Time = 0;


// PLAYER & COMPUTER SUBMITIONS
var playerTXT = "";

//Player Submition button
const ENTER = 13;
var ENTER_DOWN = false;

var worldMap = document.createElement("img");

var canvas,canvasContext;

window.onload = function(){

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	
	//var framerPerSecond = 0.50
    
    connectingAnimation();
   // addMessageSpace();

};

function AddMinute(){
	Time += 1;
}

function updateGraphics(){

}

function grabSub() {
	playerTXT = document.getElementById("txt").value;
};


var ms_per_char = 40;

function addNewLogItem(user, txt, blue=false) {
	if(user == "player"){
		
		var msg = document.createElement('div');
        msg.className = "player-message";

        if (last_message == "player") {
            //remove image, message tail, and margin from previous message
            last_message_elem.children[1].removeChild(last_message_elem.children[1].firstElementChild);
            last_message_elem.children[1].style.height = "0px";
            last_message_elem.style.marginBottom = "5px";
            last_message_elem.firstElementChild.classList.remove('right-message-tail');
        }
        
        msg.innerHTML = `
                    <div class="player-message-bubble right-message-tail">
                        <p class="message-text">` + txt + `</p>
                    </div>
                    <div class="player-message-img">
                        <img class="profile-img" src="img/user-profile-picture.png">
                    </div>
                `;
        
		document.getElementById("log").appendChild(msg);
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        
        last_message = "player";
        last_message_elem = msg;
		
	} else if(user == "jeff") {
        
        let typing_time = ms_per_char * txt.length;
        let typing_log_item = startTypingAnimation();
        
        setTimeout(function() {
            
            endTypingAnimation(typing_log_item);
            
            var msg = document.createElement('div');
            msg.className = "computer-message";

            if (last_message == "computer") {
                //remove image from previous message
                last_message_elem.firstElementChild.removeChild(last_message_elem.firstElementChild.firstElementChild);
                last_message_elem.firstElementChild.style.height = "0px";
                last_message_elem.style.marginBottom = "5px";
                last_message_elem.children[1].classList.remove('left-message-tail');
            }

            msg.innerHTML = `
                        <div class="computer-message-img">
                            <img class="profile-img" src="img/jeff-profile-picture.png">
                        </div>
                        <div class="computer-message-bubble left-message-tail">
                            <p class="message-text">` + txt + `</p>
                        </div>
                    `;

            document.getElementById("log").appendChild(msg);
            window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

            last_message = "computer";
            last_message_elem = msg;
            
        }, typing_time);
		
		
	} else if(user == "system") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        
        last_message = null;
        last_message_elem = null;
		
	} else if(user == "loading") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = txt;
		btn.className = "temp";
		btn.id = "temp";
		//myPara.setAttribute("id", "id_you_like");
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        
        last_message = null;
        last_message_elem = null;
		
	} else if(user == "important") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = txt;
		btn.className = "important";
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        
        last_message = null;
        last_message_elem = null;
		
	} else if(user == "End") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = "C:\\User\\Input> " + txt;
		btn.className = "End";
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        
        last_message = null;
        last_message_elem = null;
	}
    if (blue)
        btn.style.color = '#3B7ECF';
};

function clearTxtBox(){
	document.getElementById("txt").value = "";
};

//  PLAYER PRESSED ENTER
function keyPressed(evt) {
	
	//console.log(evt.keyCode);

	if(inputAllowed){
		if(evt.keyCode == ENTER) {
			let button_beep = document.createElement('audio');
    		button_beep.src = button_beep_src;
			button_beep.play();
			ENTER_DOWN = true;
			grabSub();
			if (section != 3 || puzzle != 6)
		  		addNewLogItem("player",playerTXT);
				checkPlayerInput();
				clearTxtBox();
		}
	}
};


// PLAYER RELEASED ENTER

function keyReleased(evt) {
	//console.log(evt.keyCode);
	if(evt.keyCode == ENTER) {
		ENTER_DOWN = false;
	} 
};