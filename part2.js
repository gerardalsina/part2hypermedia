// Gerard Alsina Darder

var results = {
	wins: 0,
	loses: 0,
	first: 0,
	second: 0,
	third: 0,
	fourth: 0,
	fifth: 0,
	sixth: 0,
	seventh: 0,
	eigth: 0,
	nineth: 0,
	tenth: 0,
	round: 1,
};

var player = {
	nom: "Nom Jugador",
};

var perEndevinar = {
	valor1: 0,
	valor2: 0,
	valor3: 0,
	valor4: 0,
};

function load(){
	document.getElementById("Stats").style.display="none";
	document.getElementById("Game").style.display="none";
	document.getElementById("wins").innerHTML = "Wins: " + results.wins;
	document.getElementById("loses").innerHTML = "Loses: " + results.loses;
};

function play(){
	
	var nomJugador = document.getElementById("Name").value;
	if(nomJugador == ""){
		player.nom="You";
	}
	else{
		player.nom=nomJugador;
	}
	
	document.getElementById("Nom").innerHTML=player.nom;
	document.getElementById("Stats").style.display="block";
	document.getElementById("Game").style.display="block";
	document.getElementById("identification").style.display="none";
	document.getElementById("Round").innerHTML = "Round " + results.round;
	document.getElementById("wins").innerHTML = "Wins: " + results.wins;
	document.getElementById("loses").innerHTML = "Loses: " + results.loses;
	document.getElementById("First").style.display="none";
	document.getElementById("Second").style.display="none";
	document.getElementById("Third").style.display="none";
	document.getElementById("Fourth").style.display="none";
	document.getElementById("Fifth").style.display="none";
	document.getElementById("Sixth").style.display="none";
	document.getElementById("Seventh").style.display="none";
	document.getElementById("Eigth").style.display="none";
	document.getElementById("Nineth").style.display="none";
	document.getElementById("RoundTry").value="";
	
	// We generate the random numbers
	perEndevinar.valor1 = Math.floor(Math.random() * 10);
	perEndevinar.valor2 = Math.floor(Math.random() * 10);
	perEndevinar.valor3 = Math.floor(Math.random() * 10);
	perEndevinar.valor4 = Math.floor(Math.random() * 10);
}

function checkCorrectes(r1,r2,r3,r4){
	var correctes = 0;
	if (perEndevinar.valor1==r1){
		correctes++;
	}
	if(perEndevinar.valor2==r2){
		correctes++;
	}
	if(perEndevinar.valor3==r3){
		correctes++;
	}
	if(perEndevinar.valor4==r4){
		correctes++;
	}
	return correctes;
}

function checkIncorrectes(r1,r2,r3,r4){
	var incorrectes = 0;
	if(perEndevinar.valor2==r1 || perEndevinar.valor3==r1 || perEndevinar.valor4==r1){
		incorrectes++;
	}
	if(perEndevinar.valor1==r2 || perEndevinar.valor3==r2 || perEndevinar.valor4==r2){
		incorrectes++;
	}
	if(perEndevinar.valor2==r3 || perEndevinar.valor1==r3 || perEndevinar.valor4==r3){
		incorrectes++;
	}
	if(perEndevinar.valor2==r4 || perEndevinar.valor3==r4 || perEndevinar.valor1==r4){
		incorrectes++;
	}
	return incorrectes;
}

function roundWon(rnd){
	if(rnd==2){
		results.first++;
	}
	else if(rnd==3){
		results.second++;
	}
	else if(rnd==4){
		results.third++;
	}
	else if(rnd==5){
		results.fourth++;
	}
	else if(rnd==6){
		results.fifth++;
	}
	else if(rnd==7){
		results.sixth++;
	}
	else if(rnd==8){
		results.seventh++;
	}
	else if(rnd==9){
		results.eigth++;
	}
	else if(rnd==10){
		results.nineth++;
	}
	else if(rnd==11){
		results.tenth++;
	}
}

function guess(){
	var playerGuess = document.getElementById("RoundTry").value;
	var correctes=0;
	var incorrectes=0;
	if (playerGuess.length==4){
		var val1 = parseInt(playerGuess.charAt(0));
		var val2 = parseInt(playerGuess.charAt(1));
		var val3 = parseInt(playerGuess.charAt(2));
		var val4 = parseInt(playerGuess.charAt(3));
		correctes = checkCorrectes(val1, val2, val3, val4);
		incorrectes=checkIncorrectes(val1, val2, val3, val4);
		// Correct input, we check the results
		if (perEndevinar.valor1 == val1 && perEndevinar.valor2==val2 && perEndevinar.valor3==val3 && perEndevinar.valor4==val4){
			results.wins++;
			roundWon(results.round);
			results.round=1;
			var s1 = "\nFirst Round Wins: "+results.first;
			var s2 = "\nSecond Round Wins: "+results.second
			var s3 = "\nThird Round Wins: "+results.third;
			var s4 = "\nFourth Round Wins: "+results.fourth;
			var s5 = "\nFifth Round Wins: "+results.fifth;
			var s6 = "\nSixth Round Wins: "+results.sixth;
			var s7 = "\nSeventh Round Wins: "+results.seventh;
			var s8 = "\nEigth Round Wins: "+results.eigth;
			var s9 = "\nNineth Round Wins: "+results.nineth;
			var s10 = "\nTenth Round Wins: "+results.tenth;
			alert("You win! Congrats, "+player.nom+"!"+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10);
			play();
		}
		else{
			results.round++;
			if (results.round==2){
				document.getElementById("First").style.display="block";
				document.getElementById("R1").innerHTML=playerGuess;
				document.getElementById("C1").innerHTML=correctes;
				document.getElementById("I1").innerHTML=incorrectes;
			}
			else if (results.round==3){
				document.getElementById("Second").style.display="block";
				document.getElementById("R2").innerHTML=playerGuess;
				document.getElementById("C2").innerHTML=correctes;
				document.getElementById("I2").innerHTML=incorrectes;
			}
			else if (results.round==4){
				document.getElementById("Third").style.display="block";
				document.getElementById("R3").innerHTML=playerGuess;
				document.getElementById("C3").innerHTML=correctes;
				document.getElementById("I3").innerHTML=incorrectes;
			}
			else if (results.round==5){
				document.getElementById("Fourth").style.display="block";
				document.getElementById("R4").innerHTML=playerGuess;
				document.getElementById("C4").innerHTML=correctes;
				document.getElementById("I4").innerHTML=incorrectes;
			}
			else if (results.round==6){
				document.getElementById("Fifth").style.display="block";
				document.getElementById("R5").innerHTML=playerGuess;
				document.getElementById("C5").innerHTML=correctes;
				document.getElementById("I5").innerHTML=incorrectes;
			}
			else if (results.round==7){
				document.getElementById("Sixth").style.display="block";
				document.getElementById("R6").innerHTML=playerGuess;
				document.getElementById("C6").innerHTML=correctes;
				document.getElementById("I6").innerHTML=incorrectes;
			}
			else if (results.round==8){
				document.getElementById("Seventh").style.display="block";
				document.getElementById("R7").innerHTML=playerGuess;
				document.getElementById("C7").innerHTML=correctes;
				document.getElementById("I7").innerHTML=incorrectes;
			}
			else if (results.round==9){
				document.getElementById("Eigth").style.display="block";
				document.getElementById("R8").innerHTML=playerGuess;
				document.getElementById("C8").innerHTML=correctes;
				document.getElementById("I8").innerHTML=incorrectes;
			}
			else if (results.round==10){
				document.getElementById("Nineth").style.display="block";
				document.getElementById("R9").innerHTML=playerGuess;
				document.getElementById("C9").innerHTML=correctes;
				document.getElementById("I9").innerHTML=incorrectes;
			}
			else if (results.round==11){
				// We lost as it is round 11
				results.loses++;
				results.round=1;
				// Create a popup window
				alert("You lost! The result was"+perEndevinar.valor1+perEndevinar.valor2+perEndevinar.valor3+perEndevinar.valor4);
				play();
			}
		}
		
		document.getElementById("Round").innerHTML = "Round "+results.round;
	}
	else{
		alert("Incorrect input, please, try again!");
	}
	
	
}