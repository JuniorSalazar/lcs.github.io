$(document).on("ready",main);

function main(){
	$("#bEnviar").on("click",validarFormulario);
}

function validarFormulario(){
	var nombre = $("#tfNombre").val();
	var email = $("#tfEmail").val();
	var asunto = $("#tfAsunto").val();
	var mensaje = $("#tfMensaje").val();

	if(nombre == ""){
		$("#tfNombre").addClass("campo-vacio");
	}else{
		$("#tfNombre").removeClass("campo-vacio");
	}
	if(email == ""){
		$("#tfEmail").addClass("campo-vacio");
	}else{
		$("#tfEmail").removeClass("campo-vacio");
	}
	if(asunto == ""){
		$("#tfAsunto").addClass("campo-vacio");
	}else{
		$("#tfAsunto").removeClass("campo-vacio");
	}
	if(mensaje == ""){
		$("#tfMensaje").addClass("campo-vacio");
	}else{
		$("#tfMensaje").removeClass("campo-vacio");
	}

	if(nombre == "" || email == "" || asunto == "" || mensaje == ""){
		$("#errores").fadeIn();
		return false;
	}else{
		$("#errores").fadeOut();
		return false;
	}
}