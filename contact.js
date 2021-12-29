// --------- letiables ---------
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
// --------- Functions ---------

function display(){
	alert("Full Name : " + fname.value + "\n" + "Email : " + email.value + "\n" + "tel : " + tel.value
	+ "\n" + "Subject : " + subject.value + "\n" + "message : " + message.value);
}
