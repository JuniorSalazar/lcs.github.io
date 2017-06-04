var tabInicial = 1; //para que muestre la primera
$(document).on("ready",main);

function main(){
	$("#tabs a").on("click",abrirTab);
	$(".tabContent").eq(tabInicial - 1).fadeIn(); //para que muestre la primera
	$("#tabs a").eq(tabInicial - 1).addClass("tabActual"); // para mostrar las pestañas en color
}

function abrirTab(){
	$(".tabContent").hide();// para q se esconda
	$("#tabs a").removeClass("tabActual");//para que elimine la clase tabActual y deje las pestañas sin color
	$(".tabContent").eq($(this).index()).fadeIn();//para que aparesca el contenido animadamente
	$(this).addClass("tabActual");// para a;adir el color a la pestaña actual
	return false; // se coloca falso porque si no se actualiza el index
}