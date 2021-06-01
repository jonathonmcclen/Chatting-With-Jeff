
let scene = 1;
let playerUsername = "";


// END VAR SECTION -----------------------------------------------------------------------------


function checkPlayerInput() {
	
	playerTXT = playerTXT.trim()
	//.toLowerCase()
	
	
    //Music
if (playerTXT == "music") {
	if (music_on) {
		current_music.pause();
		music_on = false;
	} else {
		current_music.play();
		music_on = true;
	}
        return;
}

//FOR TESTING... OR CHEATING
if (playerTXT == "Test") {

}
	
//MAIN GAME	

if(scene == 1) {
	playerUsername = playerTXT
	s1p2 = [
		["jeff", "It\'s nice to meet you " + playerUsername + ". What can I help you with today?"]
	];
	cutscene(s1p2,2000);
	scene++;

} else if(scene == 2) {
	cutscene(s1p3,3000);
	playFailSound(400,3);
	scene++;
	
} else if(scene == 3) {
	
	var lowerCaseAnswer = playerTXT.toLowerCase();
	console.log(lowerCaseAnswer);
	
	if (lowerCaseAnswer == "no"){
		
		playFailSound(400,3);
		cutscene(s1p4,3000);
		scene++;
		
	} else if (lowerCaseAnswer == "yes"){
		
		playFailSound(400,3);
		cutscene(s1p4,3000);
		console.log('player said yes!');
		//Function "Now youve done it..."
		scene++;
		
	} else {
		playFailSound(400,3);
		console.log('player said somthing else');
		cutscene(s1p4,3000);
		scene++;
		
	}
	
} else if(scene == 4) {
	
	if(playerTXT == "английский") {
		
		cutscene(s1p5,3000);
		playFailSound(400,3);
		scene++;
		
	} else {
		
		playFailSound(400,3);
		cutscene(s1p4Fail,4000);
		
	}

} else if(scene == 5) {
	if(playerTXT.toLowerCase() == "chan eil") {
		playFailSound(400,3);
		cutscene(s1p6,3000);
		scene++;
	} else {
		playFailSound(400,3);
		cutscene(LanguagePuzzleFail,3000);
	}
} else if(scene == 6) {
	if(playerTXT == "不") {
		playFailSound(400,3);
		cutscene(s1p7,3000);
		scene++;
	} else {
		playFailSound(400,3);
		cutscene(LanguagePuzzleFail,3000);
	}
} else if(scene == 7) {
	if(playerTXT.toLowerCase() == "ingiriisi") {
		playFailSound(400,3);
		cutscene(s1p8,3000);
		scene++;
	} else {
		playFailSound(400,3);
		cutscene(LanguagePuzzleFail,3000);
	}
} else if(scene == 8) {
	if(playerTXT == "الإنجليزية") {
		playFailSound(400,3);
		cutscene(s2p1,3000);
		scene++;
	} else {
		playFailSound(400,3);
		cutscene(LanguagePuzzleFail,3000);
	}
} else if(scene == 9) {
	cutscene(s2p2,3000);
	scene++;
} else if(scene == 10) {
	cutscene(s2p3,3000);
	scene++;
} else if(scene == 11) {
	cutscene(s2p4,3000);
	scene++;
} else if(scene == 12) {
	cutscene(s2p5,3000);
	scene++;
} else if(scene == 13) {
	let mph = parseInt(playerTXT.split(' ')[0])
	
	//24 miles per hour
	
	if (mph <= 20 && mph > 26){
		cutscene(s2p6,3000);
		scene++;
	}
	
} else if(scene == 14) {
	if (playerTXT.toLowerCase() == "mitochondria"){
		cutscene(s2p7,3000);
		scene++;
	}
} else if(scene == 15) {
	//3,000 miles 5 miles an hour
	if(parseInt(playerTXT) == 600){
		cutscene(s2p8,3000);
		scene++;
	}
} else if(scene == 16) {
	cutscene(s2p9,3000);
	scene++;
} else if(scene == 17) {
	cutscene(s2p10,5000);
	scene++;
}


};

function divider() {
addNewLogItem("", "..........................................................");
}

function incorrectSub() {
addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " NOT recognized");
    failure_sound.play();
};
