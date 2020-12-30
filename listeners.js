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
	

};

function divider() {
	addNewLogItem("", "..........................................................");
}

function incorrectSub() {
	addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " NOT recognized");
    failure_sound.play();
};