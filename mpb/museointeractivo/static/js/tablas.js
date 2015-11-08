$("#1").css('opacity',1);
$("#a1").css('opacity',1);

var traducir = function(lenguaje,
	traducir_contenido_dinamico_es,
	traducir_contenido_dinamico_en,
	traducir_contenido_dinamico_por,
	lenguaje_pantalla,
	traducirLinks){
	if (lenguaje != 'es' && lenguaje != 'por' && lenguaje != 'en'){
		lenguaje = $("#lang_active").find("img").attr('id');	
	}
	if(lenguaje=='es'){
		$('#text_resultados').text('Resultados');
		$('#text_fecha').text('Fecha');
		$('#text_jornada').text('Jornada');
		$('#text_equipos').text('Equipos');
		$('#text_res').text('Resultados');
		$('#text_estadio').text('Estadio');
		$('#text_jugadores').text('Jugador');
		$('#text_partidos').text('Partidos Jugados');
		$('#text_goles').text('Goles');
		$('#text_protagonistas').text('Protagonistas');
		$('#text_posiciones').text('Posiciones');
		$('#text_equipos').text('Equipos');
		$('#text_puntos').text('Pts.');
		$('#text_jugados').text('Jugados');
		$('#text_ganados').text('Ganados');
		$('#text_empatados').text('Empatados');
		$('#text_perdidos').text('Perdidos');
		$('#text_golesfavor').text('Goles a Favor');
		$('#text_golescontra').text('Goles En Contra');
		traducir_contenido_dinamico_es();
		lenguaje_pantalla='es';
	};
	if(lenguaje=='en'){
		$('#text_resultados').text('Results');
		$('#text_fecha').text('Date');
		$('#text_jornada').text('Round');
		$('#text_equipos').text('Teams');
		$('#text_res').text('Results');
		$('#text_estadio').text('Stadium');
		$('#text_jugadores').text('Player');
		$('#text_partidos').text('Matches Played');
		$('#text_goles').text('Goals');
		$('#text_protagonistas').text('Protagonists');
		$('#text_posiciones').text('Scores');
		$('#text_equipos2').text('Teams');
		$('#text_puntos').text('Pts.');
		$('#text_jugados').text('Played');
		$('#text_ganados').text('Won');
		$('#text_empatados').text('Tied');
		$('#text_perdidos').text('Lost');
		$('#text_golesfavor').text('Goals Scored');
		$('#text_golescontra').text('Goals Against');
		traducir_contenido_dinamico_en();
		lenguaje_pantalla='en';
	};
	if(lenguaje=='por'){
		$('#text_resultados').text('Resultados');
		$('#text_fecha').text('Data');
		$('#text_jornada').text('Volta');
		$('#text_equipos').text('Equipos');
		$('#text_res').text('Resultados');
		$('#text_estadio').text('Estádio');
		$('#text_jugadores').text('Jogador');
		$('#text_partidos').text('Partidas Jogadas');
		$('#text_goles').text('Gols');
		$('#text_protagonistas').text('Protagonistas');
		$('#text_posiciones').text('posições');
		$('#text_equipos2').text('Equipes');
		$('#text_puntos').text('Pts.');
		$('#text_jugados').text('Jogados');
		$('#text_ganados').text('Ganhou');
		$('#text_empatados').text('empatados');
		$('#text_perdidos').text('Perdidos');
		$('#text_golesfavor').text('Gols a Favor');
		$('#text_golescontra').text('Gols Em Contra');
		traducir_contenido_dinamico_por();
		lenguaje_pantalla='por';
	};
	traducirLinks(lenguaje_pantalla);
}

var handler_clicker = function(){
	$('.activa').removeClass('activa');
	$(this).addClass('activa');
	handler_imagenes();	
}

var handler_imagenes = function(){
	var imgactiva = $('.activa').attr('id');
	if (imgactiva == 'imgcampania') {
		$("#imgjugadores").attr('style', "width: 100px;opacity: 0.5;transform: translateX(-1637%) translateY(450%); position: fixed;");
		$("#imgposiciones").attr('style', "opacity: 0.5;width: 100px;position: fixed;transform: translatey(510%) translateX(-6%);");
		$('#tablaposiciones').fadeOut();
		$('#tablajugadores').fadeOut();
		$('#tablaresultados').fadeIn();
		$('#imgcampania').off('click');
		$("#imgcampania").attr("style"," ");
		$('#imgjugadores').on('click', handler_clicker);	
		$('#imgposiciones').on('click',  handler_clicker);
	};
	if (imgactiva == 'imgjugadores') {
		$("#imgcampania").attr('style', "width: 100px;opacity: 0.5;transform: translateX(-1637%) translateY(608%); position: fixed;");
		$("#imgposiciones").attr('style', "opacity: 0.5;width: 100px;position: fixed;transform: translatey(510%) translateX(-6%);");
		$('#tablaposiciones').fadeOut();
		$('#tablaresultados').fadeOut();
		$('#tablajugadores').fadeIn();
		$('#imgjugadores').off('click');
		$("#imgjugadores").attr("style"," ");
		$('#imgposiciones').on('click',  handler_clicker);
		$('#imgcampania').on('click', handler_clicker);
	};
	if (imgactiva == 'imgposiciones') {
		$("#imgjugadores").attr('style', "width: 100px;opacity: 0.5;transform: translateX(-1636%) translateY(450%); position: fixed;");
		$("#imgcampania").attr('style', "opacity: 0.5;width: 100px;position: fixed;transform: translatey(608%) translateX(-6%);");
		$('#tablajugadores').fadeOut();
		$('#tablaresultados').fadeOut();
		$('#tablaposiciones').fadeIn();
		$('#imgposiciones').off('click');
		$("#imgposiciones").attr("style"," ");
		$('#imgjugadores').on('click', handler_clicker);	
		$('#imgcampania').on('click', handler_clicker);
	};
};

var setup_tablas = function(traducir_contenido_dinamico_es,
		traducir_contenido_dinamico_en,
		traducir_contenido_dinamico_por,
		lenguaje_pantalla,
		traducirLinks){

	traducir(lenguaje_pantalla,
		traducir_contenido_dinamico_es,
		traducir_contenido_dinamico_en,
		traducir_contenido_dinamico_por,
		lenguaje_pantalla,
		traducirLinks);
	
	$(document).ready(function() {
		handler_imagenes();	
		
		$("body_tabla").mousedown(function(){	return false; 	});
		
		$('.selector').click(function(){
			$objActivo = $("#lang_active");
			$objActivo.find("img").animate({opacity:0.4});		
			$objActivo.attr('id','lang');
			$(this).attr('id','lang_active');
			var img = $(this).find("img");
			img.animate({opacity:1});	
			var lenguaje = img.attr('id');
			traducir(lenguaje,
				traducir_contenido_dinamico_es,
				traducir_contenido_dinamico_en,
				traducir_contenido_dinamico_por,
				lenguaje_pantalla,
				traducirLinks);
			
		});
	});
	
};