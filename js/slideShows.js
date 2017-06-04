$(document).on("ready",main);

function main(){
	$("body").append("<div id='previewSlideShow'><div id='imagen'><img src='' width='700' height='350'/><div id='descripcion'> </div>	<div id='cerrar'> Cerrar </div> </div> </div>");
	$("#slideShow img").on("click",abrirImagen);
	$("#previewSlideShow #cerrar").on("click",cerrarImagen); // solo se sale con el cerrar
	//$("#previewSlideShow").on("click",cerrarImagen); si le doy click afuera de la imagen
}

function abrirImagen(){
	$("#previewSlideShow").fadeIn();
	$("#previewSlideShow img").attr("src","img/slideshow" + ($(this).index() + 1) + ".jpg");
	$("#previewSlideShow #descripcion").text($(this).attr("title"));
}
function cerrarImagen(){
	$("#previewSlideShow").fadeOut();
}
