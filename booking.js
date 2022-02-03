// ------------------- Variables ------------------- \\

var tarif;
var gear__box = 0;
var fuel = 0;
var dur = document.getElementById("duration");
var sum;

// ------------------- Functions ------------------- \\

function f__sel(){
	let mylist = document.getElementById("select");
	let result = mylist.options[mylist.selectedIndex].text;

	if(result == 'Moto'){
		tarif = 10;
		document.getElementById("Manual").disabled = true;
		document.getElementById("Automatique").disabled = true;
		document.getElementById("Automatique").checked = false;

		document.getElementById("Essence").disabled = false;
		document.getElementById("Diesel").disabled = true;
		document.getElementById("Electrique").disabled = false;
		document.getElementById("Hybride").disabled = true;

	}else if(result == 'compact'){
		tarif = 14;
		document.getElementById("Manual").disabled = false;
		document.getElementById("Manual").checked = true;
		document.getElementById("Automatique").disabled = true;
		document.getElementById("Automatique").checked = false;

		document.getElementById("Essence").disabled = false;
		document.getElementById("Diesel").disabled = false;
		document.getElementById("Electrique").disabled = true;
		document.getElementById("Hybride").disabled = false;

	}else if(result == 'citadine'){
		tarif = 12;
		document.getElementById("Manual").disabled = false;
		document.getElementById("Manual").checked = true;
		document.getElementById("Automatique").disabled = true;
		document.getElementById("Automatique").checked = false;

		document.getElementById("Essence").disabled = false;
		document.getElementById("Diesel").disabled = false;
		document.getElementById("Electrique").disabled = false;
		document.getElementById("Hybride").disabled = false;

	}else if(result == 'utilitaire'){
		tarif = 16;
		document.getElementById("Manual").disabled = false;
		document.getElementById("Manual").checked = true;
		document.getElementById("Automatique").disabled = true;
		document.getElementById("Automatique").checked = false;

		document.getElementById("Essence").disabled = true;
		document.getElementById("Diesel").disabled = false;
		document.getElementById("Diesel").checked = true;
		document.getElementById("Electrique").disabled = true;
		document.getElementById("Hybride").disabled = true;

	}else if(result == 'sedan/berlin'){
		tarif = 20;
		document.getElementById("Manual").disabled = true;
		document.getElementById("Automatique").disabled = false;
		document.getElementById("Automatique").checked = true;

		document.getElementById("Essence").disabled = false;
		document.getElementById("Diesel").disabled = false;
		document.getElementById("Electrique").disabled = true;
		document.getElementById("Hybride").disabled = false;

	}else if(result == 'camion'){
		tarif = 250;
		document.getElementById("Manual").disabled = true;
		document.getElementById("Automatique").disabled = false;
		document.getElementById("Automatique").checked = true;

		document.getElementById("Essence").disabled = true;
		document.getElementById("Diesel").disabled = false;
		document.getElementById("Diesel").checked = true;
		document.getElementById("Electrique").disabled = true;
		document.getElementById("Hybride").disabled = true;

	}else if(result == 'engin de chantier'){
		tarif = 900;
		document.getElementById("Manual").disabled = false;
		document.getElementById("Manual").checked = true;
		document.getElementById("Automatique").disabled = true;
		document.getElementById("Automatique").checked = false;

		document.getElementById("Essence").disabled = false;
		document.getElementById("Diesel").disabled = false;
		document.getElementById("Electrique").disabled = true;
		document.getElementById("Hybride").disabled = true;

	}
	else{
		document.getElementById("Manual").disabled = true;
		document.getElementById("Automatique").disabled = true;

		document.getElementById("Essence").disabled = true;
		document.getElementById("Diesel").disabled = true;
		document.getElementById("Electrique").disabled = true;
		document.getElementById("Hybride").disabled = true;
	}
}

function total(){

	if(document.getElementById("Automatique").checked === true){
		gear__box = 0.19;
	}else{
		gear__box = 0;
		
	}

	// ------ \\

	if(document.getElementById("Essence").checked === true){
		fuel = 0.14;

	}else if(document.getElementById("Diesel").checked === true){
		fuel = 0.21;


	}else if(document.getElementById("Electrique").checked === true){
		fuel = 0.05;

	
	}else if(document.getElementById("Hybride").checked === true){
		fuel = 0.09;

	}

	sum = ((tarif * fuel) + (tarif * gear__box) + tarif)*dur.value;
	
	alert(sum);
}