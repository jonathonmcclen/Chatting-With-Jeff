//Added utilities (Fiverr)
var ready_for_input_sound = document.createElement('audio');
ready_for_input_sound.src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Ready.wav";

var failure_sound = document.createElement('audio');
failure_sound.src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Failure.wav';

var typing_animation

//-------------------------------------------------

//Section 1/ INTRO
function login1Done(){
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "User " + "\"" + playerUsername + "\"" + " recognized");
		
	};
	
	function line2(){
		addNewLogItem("comp", "Welcome " + playerUsername);
	};
	
	function line3(){
		addNewLogItem("comp", "Please enter your password");
        Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 6000);
};

function login2Done(){
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Command Entry Recognized");
	};
	
	function line2(){
		typingAnim("Logging in",2000,"FAILED",true);
	};
	
	function line3(){
		divider();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 6000);
	
	function line4(){
		playFailSound(1000, 3);
		addNewLogItem("comp","ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR");
	};
	
	function line5(){
		addNewLogItem("comp","Could NOT verify identity");
	};
	
	function line6(){
		addNewLogItem("comp","Please complete authenticate to gain access.");
	};
	
	function line7(){
		divider();
	};
	
	function line8(){
		addNewLogItem("comp","AUTHENTICATION 1/10");
	};
	
	function line9(){
		addNewLogItem("comp", "287601, 876012, 760128, _ _ _ _ _ _");
	};

	function line10(){
		addNewLogItem("comp","Complete The Sequence Then Press ENTER");
        Ready_For_Input();
	};
	
	setTimeout(line4, 8000);
	setTimeout(line5, 10000);
	setTimeout(line6, 12000);
	setTimeout(line7, 14000);
	setTimeout(line8, 16000);
	setTimeout(line9, 18000);
	setTimeout(line10, 20000);
}


//Section 2
function puzzle1Done() {
	inputAllowed = false;
	
	Success();
	
	//Animation starts at 5000ms
	
	//842431
	
	function line1(){
		addNewLogItem("comp","AUTHENTICATION 2/10");
	};
	
	function line2(){
		addNewLogItem("comp", "431842, 243184, 424318, _ _ _ _ _ _");
	};
	
	function line3(){
		addNewLogItem("comp","Complete The Sequence Then Press ENTER");
        Ready_For_Input();
	};
	
	setTimeout(line1, 7000);
	setTimeout(line2, 9000);
	setTimeout(line3, 11000);
};

function puzzle2Done() {
	inputAllowed = false;
	
	Success();
	
	//Animation starts at 5000ms
	
	function line4(){
		addNewLogItem("comp", "AUTHENTICATION 3/10");
	};
	
	function line5(){
		addNewLogItem("comp", "CODE OUT OF ORDER");
	};
	
	function line6(){
		addNewLogItem("comp", "5. InputFive(5)**REFERENCE#…4…END");
	};
	
	function line7(){
		addNewLogItem("comp", "3. InputThree(3)**REFERENCE#…6…END");
	};
	
	function line8(){
		addNewLogItem("comp", "1. InputOne(1)**REFERENCE#…9…END");
	};
	
	function line9(){
		addNewLogItem("comp", "6. InputSix(6)**REFERENCE#…2…END");
	};
	
	function line10(){
		addNewLogItem("comp", "2. InputTwo(2)**REFERENCE#…7…END");
	};
	
	function line11(){
		addNewLogItem("comp", "4. InputFour(4)**REFERENCEE#…1…END");
	};
	
	function line12(){
		addNewLogItem("comp", "TYPE REFERENCE NUMBERS IN ORDER THEN PRESS ENTER");
        Ready_For_Input();
	};
	
	
	
	setTimeout(line4, 7000);
	setTimeout(line5, 9000);
	setTimeout(line6, 11000);
	setTimeout(line7, 11500);
	setTimeout(line8, 12000);
	setTimeout(line9, 12500);
	setTimeout(line10, 13000);
	setTimeout(line11, 13500);
	setTimeout(line12, 14500);

};
function puzzle3Done() {
	inputAllowed = false;
	
	
	Success();
	
	//Animation starts at 5000ms
	
	//452863
	
	function line1(){
		addNewLogItem("comp", "AUTHENTICATION 4/10");
	};
	
	function line2(){
		addNewLogItem("comp", "CODE OUT OF ORDER");
	};
	
	function line3(){
		addNewLogItem("comp", "4. InputFour(4)**REFERENCE#…8…END");
	};
	
	function line4(){
		addNewLogItem("comp", "1. InputOne(1)**REFERENCE#…4…END");
	};
	
	function line5(){
		addNewLogItem("comp", "3. InputThree(3)**REFERENCE#…2…END");
	};
	
	function line6(){
		addNewLogItem("comp", "6. InputSix(6)**REFERENCE#…3…END");
	};
	
	function line7(){
		addNewLogItem("comp", "5. InputFive(5)**REFERENCE#…6…END");
	};
	
	function line8(){
		addNewLogItem("comp", "2. InputTwo(2)**REFERENCE#…5…END");
	};
	
	function line12(){
		addNewLogItem("comp", "TYPE REFERENCE NUMBERS IN ORDER THEN PRESS ENTER");
        Ready_For_Input();
	};
	
	
	setTimeout(line1, 7000);
	setTimeout(line2, 9000);
	setTimeout(line3, 10000);
	setTimeout(line4, 10500);
	setTimeout(line5, 11000);
	setTimeout(line6, 11500);
	setTimeout(line7, 12000);
	setTimeout(line8, 12500);
	setTimeout(line12, 14500);
	
};

function puzzle4Done() {
	inputAllowed = false;
	
	Success();
	
	//Animation starts at 5000ms
	
	//203896
	
	function line1(){
		addNewLogItem("comp", "AUTHENTICATION 5/10");
	};
	
	function line2(){
		addNewLogItem("comp", "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_2___");
	};
	
	function line3(){
		addNewLogItem("comp", "LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_0___");
	};
	
	function line4(){
		addNewLogItem("comp", "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENEC#_3___");
	};
	
	function line5(){
		addNewLogItem("comp", "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_8___");
	};
	
	function line6(){
		addNewLogItem("comp", "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_9___");
	};
	
	function line7(){
		addNewLogItem("comp", "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_6___");
        
	};
	
	function line8(){
		addNewLogItem("comp", "LOG LINES TOO LONG TYPE REFRENCE NUMBERS THEN PRESS ENTER");
		Ready_For_Input();
	};
	
	setTimeout(line1, 7000);
	setTimeout(line2, 9000);
	setTimeout(line3, 10000);
	setTimeout(line4, 10500);
	setTimeout(line5, 11000);
	setTimeout(line6, 11500);
	setTimeout(line7, 12000);
	setTimeout(line8, 12500);
};



function puzzle10Done(){
	inputAllowed = false;
	
	
	decrypt("decrypt3");
	
	//Animation starst at 9000ms
	
	function line1(){
		addNewLogItem("comp", "COMPLETE");
		success_sound.play();
	};
	
	function line2(){
		divider();
	};
	
	function line3(){
		addNewLogItem("comp", "SERVER IP: 62.746.271");
	};
	
	function line4(){
		addNewLogItem("comp", "Passcode: 651697597"); 
	};
	
	function line5(){
		addNewLogItem("comp", "DECRYPTED URL: "); //9235613951
        showURL(URLPuzzleTwo);
	};
	
	function line6(){
		addNewLogItem("comp", "DECRYPTED URL's can be pasted into your browser.");
	};
	
	function line7(){
		divider();
	};
	
	function line8(){
		addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
	};
	
	function line9(){
		divider();
        Ready_For_Input();
	};
	
	
	setTimeout(line1, 9000);
	setTimeout(line2, 9500);
	setTimeout(line3, 10000);
	setTimeout(line4, 10500);
	setTimeout(line5, 11000);
	setTimeout(line6, 11500);
	setTimeout(line7, 12000);
	setTimeout(line8, 12500);
	setTimeout(line9, 13000);
};

function puzzle11Done(){
	inputAllowed = false;
	
	
	decrypt("decrypt4");
	
	//Animation starst at 9000ms
	
	function line1(){
		addNewLogItem("comp", "COMPLETE");
		success_sound.play();
	};
	
	function line2(){
		divider();
	};
	
	function line3(){
		addNewLogItem("comp", "DECRYPTED URL:");
        showURL("https://twitter.com/Anonymo00841943");
	};
	
	function line4(){
		addNewLogItem("comp", "This URL is hackable,");
	};
	
	function line5(){
		addNewLogItem("comp", "DECRYPTED URL's can be pasted into your browser");
	};
	
	function line6(){
		divider();
	};
	
	function line7(){
		addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT");
	};
	
	function line8(){
		divider();
        Ready_For_Input();
	};
	
	setTimeout(line1, 9000);
	setTimeout(line2, 9500);
	setTimeout(line3, 10000);
	setTimeout(line4, 10500);
	setTimeout(line5, 11000);
	setTimeout(line6, 11500);	
	setTimeout(line7, 12000);
	setTimeout(line8, 12500);
	
};

function puzzle13Done(){
	inputAllowed = false;
	
	
	decrypt("decrypt5");
	
	//Animation starst at 9000ms
	
	function line1(){
		addNewLogItem("comp", "COMPLETE");
		success_sound.play();
	};
	
	function line2(){
		divider();
	};
	
	function line3(){
		addNewLogItem("comp", "Decrypted URL: ");
        showURL(URLPuzzleFive);
	};
	
	function line4(){
		divider();
	};
	
	function line5(){
		addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
	};
	
	function line6(){
		divider();
        Ready_For_Input();
	};
	
	setTimeout(line1, 9000);
	setTimeout(line2, 9500);
	setTimeout(line3, 10000);
	setTimeout(line4, 10500);
	setTimeout(line5, 11000);
	setTimeout(line6, 11500);
};

function puzzle14Done(){
	inputAllowed = false;
	
	hack("hack4");
	
	//Animation starst at 9000ms
	
	function line1(){
		addNewLogItem("comp", "COMPLETE");
		success_sound.play();
	};
	
	function line2(){
		divider();
	};
	
	function line3(){
		addNewLogItem("comp", "Message1> FileLok Code: 6597");
	};
	
	function line4(){
		addNewLogItem("comp", "Message2> @Ax7> I forgot my username again!");
	};
	
	function line5(){
		addNewLogItem("comp", "Message3> @Anonymous5> Seriously? Here, I reset it...");
	};
	
	function line6(){
		addNewLogItem("comp", "Message4> @Anonymous5> Username: DontForgetAgain");
	};
	
	function line7(){
		divider();
	};
	
	function line8(){
		addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
	};
	
	function line9(){
		divider();
        Ready_For_Input();
	};
	
	setTimeout(line1, 9000);
	setTimeout(line2, 9500);
	setTimeout(line3, 10000);
	setTimeout(line4, 10500);
	setTimeout(line5, 11000);
	setTimeout(line6, 11500);
	setTimeout(line7, 12000);
	setTimeout(line8, 12500);
	setTimeout(line9, 13000);
	
};
function puzzle15Done(){
	inputAllowed = false;
	
	decrypt("decrypt6");
	
	//Animation starst at 9000ms
	
	function line1(){
		addNewLogItem("comp", "COMPLETE");
		success_sound.play();
	};
	
	function line2(){
		divider();
	};
	
	function line3(){
		addNewLogItem("comp", "Decrypted URL: ");
        showURL(alabasterTerminalURL);
	};
	
	function line4(){
		addNewLogItem("comp", "Decrypted URLs can be pasted into your browser.");
	};
	
	function line5(){
		addNewLogItem("comp", "Some Decrypted URLs can be Hacked.");
	};
	
	function line6(){
		addNewLogItem("comp", "This URL IS hackable.");
	};
	
	function line7(){
		divider();
	};
	
	function line8(){
		addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT:");
	};
	
	function line9(){
		divider();
        Ready_For_Input();
	};
	
	setTimeout(line1, 9000);
	setTimeout(line2, 9500);
	setTimeout(line3, 10000);
	setTimeout(line4, 10500);
	setTimeout(line5, 11000);
	setTimeout(line6, 11500);	
	setTimeout(line7, 12000);
	setTimeout(line8, 12500);
	setTimeout(line9, 13000);
};


//FINAL SECTION 


function repeatInstructions() {
	inputAllowed = false;
	
	function line1(){
		divider();
	};
	
	function line2(){
		addNewLogItem("comp", "Enter URL to hack or decrypt:");
        Ready_For_Input();
	};
	
	setTimeout(line1, 500);
	setTimeout(line2, 1000);
	
};

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

function hack(ID){
	
	function line1(){
		addNewLogItem("comp", "Hacking...");
	};
	
	function line2(){
		addNewLogItem("loading", " █2%");
	};
	
	function line3(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██5%");
	};
	
	function line4(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████7%");
	};
	
	function line5(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████9%");
	};
	
	function line6(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████10%");
	};
	
	function line7(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ███████12%");
	};
	
	function line8(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████17%");
	};
	
	function line9(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████████19%");
	};
	
	function line10(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████25%");
	};
	
	function line11(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████45%");
	};
	
	function line12(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████████████████50%");
	};
	
	function line13(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████████████████████████75%");
	};
	
	function line14(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████████████████████████████████████100%");
	};
	
	function line15(){
		var elmnt = document.getElementById("temp");
		elmnt.id = ID;
	};
	
	setTimeout(line1, 1000);
	setTimeout(line2, 1200);
	setTimeout(line3, 1400);
	setTimeout(line4, 1800);
	setTimeout(line5, 2000);
	setTimeout(line6, 2200);
	setTimeout(line7, 2400);
	setTimeout(line8, 2600);
	setTimeout(line9, 2800);
	setTimeout(line10, 3000);
	setTimeout(line11, 3200);
	setTimeout(line12, 3400);
	setTimeout(line13, 3600);
	setTimeout(line14, 4000);
	setTimeout(line15, 5000);
	
};
	
function decrypt(ID){
	
	function line1(){
		addNewLogItem("comp", "Decrypting...");
	};
	
	function line2(){
		addNewLogItem("loading", " █2%");
	};
	
	function line3(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██5%");
	};
	
	function line4(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████7%");
	};
	
	function line5(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████9%");
	};
	
	function line6(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████10%");
	};
	
	function line7(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ███████12%");
	};
	
	function line8(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████17%");
	};
	
	function line9(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████████19%");
	};
	
	function line10(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████25%");
	};
	
	function line11(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████45%");
	};
	
	function line12(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████████████████50%");
	};
	
	function line13(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████████████████████████75%");
	};
	
	function line14(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████████████████████████████████████100%");
	};
	
	function line15(){
		var elmnt = document.getElementById("temp");
		elmnt.id = ID;
	};
	
	setTimeout(line1, 1000);
	setTimeout(line2, 1200);
	setTimeout(line3, 1400);
	setTimeout(line4, 1800);
	setTimeout(line5, 2000);
	setTimeout(line6, 2200);
	setTimeout(line7, 2400);
	setTimeout(line8, 2600);
	setTimeout(line9, 2800);
	setTimeout(line10, 3000);
	setTimeout(line11, 3200);
	setTimeout(line12, 3400);
	setTimeout(line13, 3600);
	setTimeout(line14, 4000);
	setTimeout(line15, 5000);

};

function download(ID,what, blue=false){
	
	function line1(){
		addNewLogItem("comp", "Downloading:" + what, blue);
	};
	
	function line2(){
		addNewLogItem("loading", " █2%", blue);
	};
	
	function line3(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██5%", blue);
	};
	
	function line4(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████7%", blue);
	};
	
	function line5(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████9%", blue);
	};
	
	function line6(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████10%", blue);
	};
	
	function line7(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ███████12%", blue);
	};
	
	function line8(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████17%", blue);
	};
	
	function line9(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████████19%", blue);
	};
	
	function line10(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████25%", blue);
	};
	
	function line11(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████45%", blue);
	};
	
	function line12(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████████████████50%", blue);
	};
	
	function line13(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████████████████████████75%", blue);
	};
	
	function line14(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████████████████████████████████████100%", blue);
	};
	
	function line15(){
		var elmnt = document.getElementById("temp");
		elmnt.id = ID;
	};
	
	setTimeout(line1, 0);
	setTimeout(line2, 200);
	setTimeout(line3, 400);
	setTimeout(line4, 600);
	setTimeout(line5, 800);
	setTimeout(line6, 1000);
	setTimeout(line7, 1200);
	setTimeout(line8, 1400);
	setTimeout(line9, 1600);
	setTimeout(line10, 1800);
	setTimeout(line11, 2000);
	setTimeout(line12, 2200);
	setTimeout(line13, 2400);
	setTimeout(line14, 2600);
	setTimeout(line15, 2800);

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

function deleteEverything(){
	
	//Delete LOG
	var element = document.getElementById("log");
	element.parentNode.removeChild(element);
	
	//Delete header
	var element = document.getElementById("header");
	element.parentNode.removeChild(element);
	
	//create blank log to draw to
	var newLogDiv = document.createElement("div");
	document.getElementById("body").appendChild(newLogDiv);
	newLogDiv.id = "log";		
	
	//create blank header to draw to
	var newHeaderDiv = document.createElement("div");
	newHeaderDiv.id = "header";
	document.getElementById("body").appendChild(newHeaderDiv);		
	
	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0;
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

function boot(){
	
	function line1(){
		addNewLogItem("comp", "Rebooting...");
	};
	
	function line2(){
		addNewLogItem("loading", " █2%");
	};
	
	function line3(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██5%");
	};
	
	function line4(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████7%");
	};
	
	function line5(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████9%");
	};
	
	function line6(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████10%");
	};
	
	function line7(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ███████12%");
	};
	
	function line8(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████17%");
	};
	
	function line9(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " █████████19%");
	};
	
	function line10(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████25%");
	};
	
	function line11(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████45%");
	};
	
	function line12(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ████████████████████████50%");
	};
	
	function line13(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", " ██████████████████████████████████████75%");
	};
	
	function line14(){
		var elmnt = document.getElementById("temp");
		elmnt.remove();
		addNewLogItem("loading", "");
	};
	
	function line15(){
		var elmnt = document.getElementById("temp");
		elmnt.id = "BootUp";
	};
	
	function line16(){
		addNewLogItem("loading", "CRITICAL FAILURE");
	};
	
	setTimeout(line1, 100);
	setTimeout(line2, 300);
	setTimeout(line3, 500);
	setTimeout(line4, 700);
	setTimeout(line5, 900);
	setTimeout(line6, 1100);
	setTimeout(line7, 1300);
	setTimeout(line8, 1500);
	setTimeout(line9, 1700);
	setTimeout(line10, 1900);
	setTimeout(line11, 2100);
	setTimeout(line12, 2300);
	setTimeout(line13, 2500);
	setTimeout(line14, 2700);
	setTimeout(line15, 2900);
	setTimeout(line16, 3100);
	setTimeout(line16, 3300);
	setTimeout(line16, 3400);
	setTimeout(line16, 3500);
	setTimeout(line16, 3600);
	setTimeout(line16, 3700);
	setTimeout(line16, 3800);
	setTimeout(line16, 3900);
	setTimeout(line16, 4000);
	setTimeout(line16, 4100);
	setTimeout(line16, 4200);
	setTimeout(line16, 4300);
	setTimeout(line16, 4400);
	setTimeout(line16, 4500);
	setTimeout(line16, 4600);
	setTimeout(line16, 4700);
	setTimeout(line16, 4800);
	setTimeout(line16, 4900);
	setTimeout(line16, 5000);
	setTimeout(line16, 5100);
	setTimeout(line16, 5200);
	setTimeout(line16, 5300);
	setTimeout(line16, 5400);
	setTimeout(line16, 5500);
	
};

function decryptFail(){
	function line1(){
		addNewLogItem("comp", "FAIL");
        failure_sound.play();
	};
	
	function line2(){
		addNewLogItem("comp", "THIS IS NOT A VALID URL");
	};
	
	function line3(){
		divider();
	};
	
	function line4(){
		addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
	};
	
	function line5(){
		divider();
        Ready_For_Input();
	};
	
	setTimeout(line1, 0);
	setTimeout(line2, 2000);
	setTimeout(line3, 4000);
	setTimeout(line4, 4500);
	setTimeout(line5, 5000);
}

function finalCutscene(){
	
	inputAllowed = false;
	
	document.getElementById("txt").style.display = "none";
	
	function line1(){
		flicker();// animation stops at 1400
        
        //Intense music
        if (music_on) {
            current_music.pause();
        }
        current_music = intense_music;
        if (music_on) {
            current_music.play();
        }
        
	};
	
	function line2(){
		deleteEverything();
	};
	
	function line3(){
		flicker();
		systemCrash();// 3000ms
	};
	
	function line4(){
		deleteEverything();
	};
	
	function line5(){
		flicker();
		boot();// ends at 11200ms
	};
	
	function line6(){
		deleteEverything();
	};
	
	function line7(){
		var element = document.getElementById("AlabasterHeader")
		element.classList.remove("hidden");
        
        //Alabaster music
        if (music_on) {
            current_music.pause();
        }
        current_music = alabaster_music;
        if (music_on) {
            current_music.play();
        }
	};
	
	function line8(){
		flicker();
	};
	
	function line9(){
		flicker();
		fadein("glitch", "in");
	};
	
	function line10(){
		fadein("finalInstruction", "in");
		inputAllowed = true;
	};
	
	
	
	setTimeout(line1, 100);
	setTimeout(line2, 4300);
	setTimeout(line3, 6000);
	setTimeout(line4, 10000);
	setTimeout(line5, 15000);
	setTimeout(line6, 25000);
	setTimeout(line7, 26000);
	setTimeout(line8, 26001);
	setTimeout(line9, 28000);
	setTimeout(line10, 30000);
};

function systemCrash(){
	
	function line1(){
		addNewLogItem("comp", "SYSTEM CRASH");
	};
	
	function line2(){
		addNewLogItem("comp", "ATTEMPTING RESTART");
	};
	
	function line3(){
		addNewLogItem("comp", "RESTARTING...");
	};
	
	setTimeout(line1, 0);
	setTimeout(line2, 1000);
	setTimeout(line3, 3000);
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

function terminalAnim(){
	ForeverFade();
};

function ForeverFade(){
	
	//ID is html Element you want to fade
	//Direction is the direction you want to fade. fade IN or fade OUT
	// Update will be speed of fade
	
	
	var element = document.getElementById("body")
	
	
	function line1(){
		element.style.opacity = "0.60";
	};
	
	function line2(){
		element.style.opacity = "0.65";
	};
	
	function line3(){
		element.style.opacity = "0.70";
	};
	
	function line4(){
		element.style.opacity = "0.75";
	};
	
	function line5(){
		element.style.opacity = "0.80";
	};
	
	function line6(){
		element.style.opacity = "0.85";
	};
	
	function line7(){
		element.style.opacity = "0.90";
	};
	
	function line8(){
		element.style.opacity = "1";
	};
	
	
	setTimeout(line1, 0);
	setTimeout(line2, 500);
	setTimeout(line3, 1000);
	setTimeout(line4, 1500);
	setTimeout(line5, 2000);
	setTimeout(line6, 2500);
	setTimeout(line7, 3000);	
	setTimeout(line8, 3500);
	setTimeout(line7, 4000);
	setTimeout(line6, 4500);
	setTimeout(line5, 5000);
	setTimeout(line4, 5500);
	setTimeout(line3, 6000);
	setTimeout(line2, 6500);
	
		
};

function fadeGlitch(){
	
	//ID is html Element you want to fade
	//Direction is the direction you want to fade. fade IN or fade OUT
	// Update will be speed of fade
	
	
	var element = document.getElementById("body")
	element.style.opacity = "0.25";
	
	function line2(){
		element.style.opacity = "1";
	};
	
	function line3(){
		element.style.opacity = ".95";
	};
	
	function line4(){
		element.style.opacity = "0.90";
	};
	
	function line5(){
		element.style.opacity = "0.85";
	};
	
	function line6(){
		element.style.opacity = "0.80";
	};
	
	function line7(){
		element.style.opacity = "0.75";
	};
	
	function line8(){
		element.style.opacity = "0.70";
	};
	
	function line9(){
		element.style.opacity = "0.65";
	};
	
	function line10(){
		element.style.opacity = "0.60";
	};
	
	function line11(){
		element.style.opacity = "0.55";
	};
	

	
	
	
	setTimeout(line2, 150);
	setTimeout(line3, 200);
	setTimeout(line4, 250);
	setTimeout(line5, 300);
	setTimeout(line6, 350);
	setTimeout(line7, 400);	
	setTimeout(line8, 450);
	setTimeout(line9, 500);
	setTimeout(line10, 550);
	setTimeout(line11, 600);

	setTimeout(line11, 1200);
	setTimeout(line10, 1250);
	setTimeout(line9, 1300);
	setTimeout(line8, 1350);
	setTimeout(line7, 1400);
	setTimeout(line6, 1450);
	setTimeout(line5, 1500);
	setTimeout(line4, 1550);
	setTimeout(line3, 1600);
	setTimeout(line2, 1650);
		
};

function FinalCutscenept2(){
	inputAllowed = false;
	
	function line1(){
		var element = document.getElementById("glitch")
		element.classList.add("hidden");
		var element = document.getElementById("finalInstruction")
		element.classList.add("hidden");
		download("downlaod1","Secret#1", true)
	};
	
	function line2(){
		download("downlaod2","Hacking 1st-3rd Level Security", true)
	};
	
	function line3(){
		download("downlaod3","Downloading operator files", true)
	};
	
	function line4(){
		download("downlaod4","Obtaining operative names", true)
	};
	
	function line5(){
		download("downlaod5","Grandma's Secret Recipe", true)
	};
	
	function line6(){
		download("downlaod6","Making Cookies", true)
	};
	
	function line7(){
		download("downlaod7","Beaming Player", true)
	};
	
	function line8(){
		download("downlaod7","loaction of CODE NAME: Rabit's Foot", true)
	};
	
	function line9(){
		download("downlaod7","Santa's Workshop Cordinates", true)
	};
	
	function line10(){
		download("downlaod1","WiFi Password", true)
	};
	
	function line11(){
		download("downlaod2","JFK Assasination", true)
	};
	
	function line12(){
		download("downlaod3","Downloading Covid-19 Vaccine", true)
	};
	
	function line13(){
		download("downlaod4","Nordstroms Cupon Codes", true)
	};
	
	function line14(){
		download("downlaod5","Minecraft", true)
	};
	
	function line15(){
		download("downlaod6","The Atist Flower's New Album", true)
	};
	
	function line16(){
		download("downlaod7","Unlocking Back Door", true)
	};
	
	function line17(){
		download("downlaod7","Opening Back Door", true)
	};
	
	function line18(){
		download("downlaod7","Closing Back Door, So We Dont Let The Secrets Out", true)
	};
	
	document.getElementById("txt").style.display = "none";
	
	function line19(){
		//flicker();// animation stops at 1400
        clearInterval(glitchAnim);
        endExtraGlitches();
        //allowFlicker = false;
	};
	
	function line20(){
		deleteEverything();
	};
	
	function line21(){
		flicker();
		var element = document.getElementById("AlabasterHeader")
		element.classList.add("hidden");
		
		var element = document.getElementById("credits")
		element.classList.remove("hidden");
	};
	
	function line22(){
		addNewLogItem("comp", playerUsername);
	}
	
	function line23(){
		addNewLogItem("comp", "User " + "\"" + playerUsername + "\"" + " recognized");
	}
	
	function line24(){
		addNewLogItem("comp", "Welcome " + playerUsername);
	}
	
	function line25(){
		addNewLogItem("comp", "Please enter your password " + playerUsername);
	}
	
	function line26(){
		addNewLogItem("comp", playerPassword);
	}
	
	function line27(){
		addNewLogItem("comp", "Command Submission Recognized");
	}
	
	function line28(){
		addNewLogItem("comp", "Logging in...");
	}
	
	function line29(){
		addNewLogItem("comp", "Login Successful.");
	}
	
	function line30(){
		addNewLogItem("comp", "Have a nice day.");
	}
	
	function line31(){
		divider();
	}
	
	function line32(){
		addNewLogItem("comp", "CONGRATULATIONS!");
	}
	
	function line33(){
		addNewLogItem("important", "You have completed game one: Daffodil362");
	}
	
	function line34(){
		addNewLogItem("important", "Your time: " + Time + " Minutes");
	}
	
	function line35(){
		divider();
	}
	
	function line36(){
		addNewLogItem("comp", "CREDITS:");
	}
	
	function line37(){
		addNewLogItem("comp", "Story & Puzzle Design: Jonathon McClendon");
	}
	
	function line38(){
		divider();
	}
	
	function line39(){
		addNewLogItem("comp", "Coding Team:");
	}
	
	function line40(){
		addNewLogItem("comp", "Jonathon McClendon");
	}
	
	function line41(){
		addNewLogItem("comp", "Jonathon McClendon");
	}
	
	function line42(){
		addNewLogItem("comp", "&");
	}
	
	function line43(){
		addNewLogItem("comp", "Jonathon McClendon");
	}
	
	function line44(){
		divider();
	}
	
	function line45(){
		addNewLogItem("comp", "Assistant Writer: John McClendon");
	}
	
	function line46(){
		divider();
	}
	
	function line47(){
		addNewLogItem("comp", "Play Testers:");
	}
	
	function line48(){
		addNewLogItem("comp", "John McClendon");
	}
	
	function line49(){
		addNewLogItem("comp", "Gretchen McClendon");
	}
	
	function line50(){
		addNewLogItem("comp", "Gabriela Piluk");
	}
	
	function line51(){
		addNewLogItem("comp", "Jay Dallen");
	}
	
	function line52(){
		
		addNewLogItem("comp", "Aaron Rickles");
	}
	
	function line52B(){
		
		addNewLogItem("comp", "Scott Rickles");
	}
	
	function line53(){
		divider();
	}
	
	function line54(){
		addNewLogItem("comp", "Special Thanks to:");
	}
	
	function line55(){
		addNewLogItem("comp", "~ Gretchen McClendon (mom)");
	}
	
	function line56(){
		addNewLogItem("comp", "Sorry for all the computers I ruined in my youth");
		addNewLogItem("comp", "trying to take them apart and figure out how they worked.");
	}
	
	function line57(){
		addNewLogItem("comp", "~ Johnson Family");
	}
	
	function line58(){
		addNewLogItem("comp", "~ Rickeles Family");
	}
	
	function line59(){
		addNewLogItem("comp", "~ Bradley & The Tompkins Family");
	}
	
	function line60(){
		addNewLogItem("comp", "Thank you for the guidance and knowledge you provided me.");
	}

	
	setTimeout(line1, 0);
	setTimeout(line2, 3010);
	setTimeout(line3, 6010);
	setTimeout(line4, 9010);
	setTimeout(line5, 12010);
	setTimeout(line6, 15010);
	setTimeout(line7, 18010);
	setTimeout(line8, 21010);
	setTimeout(line9, 24010);
	setTimeout(line10, 27010);
	setTimeout(line11, 30010);
	setTimeout(line12, 33010);
	setTimeout(line13, 36010);
	setTimeout(line14, 39010);
	setTimeout(line15, 42010);
	setTimeout(line16, 45010);
	setTimeout(line17, 48010);
	setTimeout(line18, 52010);
	setTimeout(line19, 55000);
	setTimeout(line20, 57000);
	setTimeout(line21, 58000);
	setTimeout(line22, 68000);
	setTimeout(line23, 69000);
	setTimeout(line24, 70000);
	setTimeout(line25, 71500);
	setTimeout(line26, 72000);
	setTimeout(line27, 73000);
	setTimeout(line28, 74000);
	setTimeout(line29, 75000);
	setTimeout(line30, 76000);
	
	setTimeout(line31, 77000);
	setTimeout(line32, 78000);
	setTimeout(line33, 79000);
	setTimeout(line34, 80000);
	setTimeout(line35, 81000);
	setTimeout(line36, 82000);
	setTimeout(line37, 83000);
	setTimeout(line38, 84000);
	setTimeout(line39, 85000);
	setTimeout(line40, 86000);
	setTimeout(line41, 87000);
	setTimeout(line42, 88000);
	setTimeout(line43, 89000);
	setTimeout(line44, 90000);
	setTimeout(line45, 91000);
	setTimeout(line46, 92000);
	setTimeout(line47, 93000);
	setTimeout(line48, 94000);
	setTimeout(line49, 95000);
	setTimeout(line50, 96000);
	setTimeout(line51, 97000);
	setTimeout(line52, 98000);
	setTimeout(line52B, 99000);
	setTimeout(line53, 100000);
	setTimeout(line54, 101000);
	setTimeout(line55, 102000);
	setTimeout(line56, 103000);
	setTimeout(line57, 104000);
	setTimeout(line58, 105000);
	setTimeout(line59, 106000);
	setTimeout(line60, 107000);

	
	// need 40 seconds or 40,000 milaseconds
};



//Extra glitches

var randomTextShiftInterval;

function randomTextShift() {
    
    randomTextShiftInterval = setInterval(function() {
        var h2_elems = document.querySelectorAll('h2.log-item');
        var index = Math.floor(Math.random() * h2_elems.length);
        
        if (h2_elems.length > 0) {
        
            if (Math.floor(Math.random() * 2) == 0) {
                let originalLineHeight = h2_elems[index].style.lineHeight
                h2_elems[index].style.lineHeight = '10px';

                setTimeout(() => h2_elems[index].style.lineHeight = originalLineHeight, Math.floor(Math.random() * 1000));
            }
            else {
                let originalHTML = h2_elems[index].innerHTML;
                let htmlIndex = Math.floor(Math.random() * originalHTML.length);
                h2_elems[index].innerHTML = originalHTML.substring(0, htmlIndex) + '&nbsp&nbsp&nbsp&nbsp' + originalHTML.substring(htmlIndex);

                setTimeout(() => h2_elems[index].innerHTML = originalHTML, Math.floor(Math.random() * 1000))
            }
            
        }
    }, 200);
    
}

function musicShift() {
    var current_wait = 0;
    for (let i = 0; i < 9; i++) {
        let wait = Math.floor(Math.random() * 500) + 200;
        setTimeout(function() {
            current_music.playbackRate += (Math.floor(Math.random() * 3) - 1) / 10;
        }, wait + current_wait);
        current_wait += wait;
    }
    
    setTimeout(function() {
        current_music.playbackRate = 0.5;
    }, current_wait + 1000);
}


function endExtraGlitches() {
    clearInterval(randomTextShiftInterval);
    let musicFadeInterval = setInterval(function() {
        if (current_music.volume > 0.1) {
            current_music.volume -= 0.05;
        }
        else {
            current_music.pause();
            clearInterval(musicFadeInterval);
        }
    }, 100);
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

function TestingGuestAnim(){
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Guest User Recognized");
		
	};
	
	function line2(){
		addNewLogItem("comp", "Welcome " + "Guest");
	};
	
	function line3(){
		addNewLogItem("comp", "Please enter your password");
        Ready_For_Input();
	};
	
	setTimeout(line1, 2000);
	setTimeout(line2, 4000);
	setTimeout(line3, 6000);
	
}

function GuestLoggedIn(){
	inputAllowed = false;
	
	function line1(){
		addNewLogItem("comp", "Guest Password Correct");
	};
	
	function line1(){
		addNewLogItem("comp", "Login Successful for Guest user");
	};
	
	function line2(){
		addNewLogItem("comp", "Your C.I.A terminal is now capable of Hacking and Decrypting URLs");
	};
	
	function line3(){
		addNewLogItem("comp", "ENCRYPTED URLs look like this:");
	};
	
	function line4(){
		addNewLogItem("comp", "*** EXAMPLE **** https://75896-29742-69504-22231");
	};

	function line5(){
		addNewLogItem("comp", "All DECRYPTED URls can be used in a browser to visit web pages.");
	};
	
	function line6(){
		addNewLogItem("comp", "ENCRYPTED URL's MUST be DECRYPTED before pasting into browser address window.");
	};
	
	function line7(){
		divider();
	};
	
	function line8(){
		addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT:");
	};
	
	function line9(){
		divider();
        Ready_For_Input();
	};
	
	setTimeout(line1, 7000);
	setTimeout(line2, 9000);
	setTimeout(line3, 11000);
	setTimeout(line4, 13000);
	setTimeout(line5, 15000);
	setTimeout(line6, 13000);
	setTimeout(line7, 15000 );
	setTimeout(line8, 15500);
	setTimeout(line9, 16000);
	
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