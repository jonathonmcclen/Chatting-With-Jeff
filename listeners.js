<<<<<<< HEAD
<<<<<<< HEAD
// Story progression
const FileLokPuzzle1En = "https://17928-05613-01573-57099";
const FileLokPuzzle2En = "https://08958-08678-00000-67409";
const FileLokPuzzle3En = "https://30304-28387-90909-14241";
const FileLokPuzzle4En = "https://20239-68775-00989-83838";
const FileLokPuzzle5En = "https://87665-76501-10129-30483";
const FileLokPuzzle6En = "https://48597-30482-08223-96574";
const FileLokPuzzle7En = "https://40743-98076-44732-12864";
const FileLokPuzzle8En = "https://74646-40332-80653-56392";

var finalCut = true;

//-----------------------------------------------------------
var hintCode = "001";
//-----------------------------------------------------------

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
		playerTXT = playerUsername
		cutscene(s1p2,2000);
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
=======

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

=======
// Story progression
const FileLokPuzzle1En = "https://17928-05613-01573-57099";
const FileLokPuzzle2En = "https://08958-08678-00000-67409";
const FileLokPuzzle3En = "https://30304-28387-90909-14241";
const FileLokPuzzle4En = "https://20239-68775-00989-83838";
const FileLokPuzzle5En = "https://87665-76501-10129-30483";
const FileLokPuzzle6En = "https://48597-30482-08223-96574";
const FileLokPuzzle7En = "https://40743-98076-44732-12864";
const FileLokPuzzle8En = "https://74646-40332-80653-56392";

var finalCut = true;

//-----------------------------------------------------------
var hintCode = "001";
//-----------------------------------------------------------

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
		playerTXT = playerUsername
		cutscene(s1p2,2000);
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
			cutscene(s1p3,2000);
			puzzle = 5
		} else {
			languageFail();
		}

	} else if(section == 1 && puzzle == 5) {
		respo6();
		puzzle = 6
	} else if(section == 1 && puzzle == 6) {
		respo7();
		puzzle = 7
	} else if(section == 1 && puzzle == 7) {
		respo8();
		puzzle = 8
	} else if(section == 1 && puzzle == 8) {
		respo9();
		puzzle = 9
	} else if(section == 1 && puzzle == 9) {
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
	
>>>>>>> parent of 2630882 (new cutscene engine)

};

function divider() {
<<<<<<< HEAD
addNewLogItem("", "..........................................................");
}

function incorrectSub() {
addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " NOT recognized");
    failure_sound.play();
};
>>>>>>> 6bfb0c4a42c8d1d1e4d3e68a008b57511a07d03e
=======
	addNewLogItem("", "..........................................................");
}

function incorrectSub() {
	addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " NOT recognized");
    failure_sound.play();
};
>>>>>>> parent of 2630882 (new cutscene engine)
