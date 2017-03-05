(function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0]; //TagName
	var buton = document.getElementsByClassName("btn")[0]; //ClassName
	//Utilizamos .innerHTML para cambiar el texto del titulo y el boton.
	//Usamos .placeholder para cambiar el texto del ATRIBUTO placeholder.
	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	buton.innerHTML = "Iniciar Sesión";	
})();

var printAll = document.getElementById("printAll");
var boton = document.getElementById("button");

document.getElementById("form1").addEventListener("submit",function(evento){
	evento.preventDefault();

	var email = document.getElementById("inputEmail").value.trim();
	var password = document.getElementById("inputPassword").value.trim();

	if( ! (email && password)){
		alert("Verifique que todos los campos estén llenos correctamente.");
		return false;
	}
	printAll.innerHTML = 	"<center><br><h3>Datos del Formulario</h3></center>"  + 
							"<h5>Email: " + email + "</h5>" +
							"<h5>Contraseña: " + password + "</h5>";
							
 
});




















