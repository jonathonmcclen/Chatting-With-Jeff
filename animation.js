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