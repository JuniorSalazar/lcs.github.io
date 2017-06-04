$(document).on("ready",main);

function main(){
	$(".item").on("click",abrirAcordeon);

}

function abrirAcordeon(){
	$(".acordeonActivado").children().eq(1).hide();//para ocultar la respuesta
	$(".acordeonActivado").removeClass("acordeonActivado"); // para quitar el color 
	$(this).children().eq(1).fadeIn();//para que se abra la respuesta
	$(this).addClass("acordeonActivado");//agregar el color
}