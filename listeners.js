var section = 1;
var puzzle = 1;

var playerUsername = "";

function checkPlayerInput() {
	
    //Music
    if (playerTXT == "music") {
        if (music_on) {
            current_music.pause();
            music_on = false;
        }
        else {
            current_music.play();
            music_on = true;
        }
        return;
    }
	
	//FOR TESTING... OR CHEATING
	if (playerTXT == "Test") {
		puzzle = 1;
		section = 3;
    }
	
	if(section == 1 && puzzle == 1) {
		playerUsername = playerTXT
		cutscene(s1p2, 2000);
		puzzle = 2
	} else if(section == 1 && puzzle == 2) {
		cutscene(s1p3,2000);
		playFailSound(400,3);
		puzzle = 3
	} else if(section == 1 && puzzle == 3) {
		if (playerTXT == "no" || "No" || "NO"){
				cutscene(s1p4,2000);
				puzzle = 4
		} else if (playerTXT == "yes" || "Yes" || "YEs" || "YES"){
			console.log('player said yes!');
			//Function "Now youve done it..."
		} else{
			console.log('player said somthing else');
			//Function "thats not right..."
		}
	}  else if(section == 1 && puzzle == 4) {
		if(playerTXT == "английский") {
			cutscene(s1p5,2000);
			puzzle = 5
		} else {
			cutscene(LanguagePuzzleFail,2000);
		}

	} else if(section == 1 && puzzle == 5) {
		if(playerTXT == "Sasannach") {
			cutscene(s1p6,2000);
			puzzle = 6
		} else {
			cutscene(LanguagePuzzleFail,2000);
		}
	} else if(section == 1 && puzzle == 6) {
		if(playerTXT == "英语") {
			cutscene(s1p7,2000);
			puzzle = 7
		} else {
			cutscene(LanguagePuzzleFail,2000);
		}
	} else if(section == 1 && puzzle == 7) {
		if(playerTXT == "Ingiriis") {
			cutscene(s1p8,2000);
			puzzle = 8
		} else {
			cutscene(LanguagePuzzleFail,2000);
		}
	} else if(section == 1 && puzzle == 8) {
		if(playerTXT == "ພາສາອັງກິດ") {
			cutscene(s1p9,2000);
			puzzle = 9
			section = 2
		} else {
			cutscene(LanguagePuzzleFail,2000);
		}
	} else if(section == 2 && puzzle == 9) {
		respo10();
		puzzle = 10
	} else if(section == 1 && puzzle == 10) {
		respo11();
		puzzle = 11
	} else if(section == 1 && puzzle == 11) {
		respo12();
		puzzle = 12
	} else if(section == 1 && puzzle == 12) {
		respo13();
		puzzle = 13
	} else if(section == 1 && puzzle == 13) {
		respo14();
		puzzle = 14
	} else if(section == 1 && puzzle == 14) {
		respo15();
		puzzle = 15
	} else if(section == 1 && puzzle == 15) {
		respo16();
		puzzle = 16
	} else if(section == 1 && puzzle == 16) {
		respo17();
		puzzle = 17
	} else if(section == 1 && puzzle == 17) {
		respo18();
		puzzle = 18
	}
	

};

function divider() {
	addNewLogItem("", "..........................................................");
}

function incorrectSub() {
	addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " NOT recognized");
    failure_sound.play();
};


// END VAR SECTION -----------------------------------------------------------------------------