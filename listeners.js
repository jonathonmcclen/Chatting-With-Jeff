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
		respo2();
		puzzle = 2
		
	} else if(section == 1 && puzzle == 2) {
		respo3();
		puzzle = 3
	}
	

};

function divider() {
	addNewLogItem("", "..........................................................");
}

function incorrectSub() {
	addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " NOT recognized");
    failure_sound.play();
};