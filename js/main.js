function validateForm(){
	var inpName = document.getElementById("name").value;  //valor de nombre
	var inpLastname = document.getElementById("lastname").value; //valor de apellido
	var inpEmail = document.getElementById("input-email").value;  //valor de email
	var inpPassword = document.getElementById("input-password").value; //valor de contraseña
	var inpOpciones = document.getElementsByTagName("select")[0].selectedIndex; //valor del select

	function validarNombre() {
		if(inpName == null || inpName.length == 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(inpName)){
			var divName = document.getElementsByClassName("name-container")[0];
			var spName = document.createElement("span");
			var msgName = document.createTextNode("El nombre que ingresaste no es correcto");
			spName.appendChild(msgName);
			spName.setAttribute("id", "spanMsgName");
			divName.appendChild(spName);
			return false;
		} else {
			var spanName = document.getElementById("spanMsgName")
			spanName.setAttribute("display", "none")
			return true;
		}	
	}
	validarNombre();

	function validarApellido() {

	}

}