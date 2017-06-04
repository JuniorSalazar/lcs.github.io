var actual=1;
$(document).on("ready",main);

function main(){
	var intervalo = setInterval("runSlider()",3000);//ejecutar una funcion cada 3 segundos
}

function runSlider(){
	if(actual == ($("#containerSlider img").size())){
		actual = 0;
	}

	$("#containerSlider").animate({
		marginLeft: (-1*actual*$("#containerSlider img").eq(0).width())
	}, 700);
	actual++;

}