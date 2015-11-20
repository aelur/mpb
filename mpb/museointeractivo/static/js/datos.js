var toggleTranslation_multipleSelectors = function (lenguaje){
	$("."+lenguaje).each(function(){
			$(this).parent().addClass("lang_active");
			$(this).animate({opacity:1});
		});
} 

var traducir = function(lenguaje,
	traducir_contenido_dinamico_es,
	traducir_contenido_dinamico_en,
	traducir_contenido_dinamico_por,
	lenguaje_pantalla,
	traducirLinks){
	if(lenguaje=='es'){
		$('#curiosidades_texto').text('CURIOSIDADES');
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
		$('#arqueros').text('Arqueros');
		$('#defensores').text('Defensores');
		$('#mediocampistas').text('Mediocampistas');
		$('#delanteros').text('Delanteros');
		$('#dt').text('Director técnico');
		$('.sub_jug').text('Protagonistas');
		$('#bodyjugadores .sub_jug').css('right','8%');
		$('.sub_pos').text('Posiciones');
		$('.sub_pos').css('right', '8%');
		$('.sub_camp').text('Resultados');
		$('#bodyposiciones .sub_camp').css('left', '142px');
		$('#jugtabla').css('right','8%');
		$('.sub_dat').text('Datos');
		traducir_contenido_dinamico_es();
		lenguaje_pantalla='es';
	};
	if(lenguaje=='en'){
		$('#curiosidades_texto').text('CURIOSITIES');
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
		$('#arqueros').text('goalkeepers');
		$('#defensores').text('Defenders');
		$('#mediocampistas').text('midfielders');
		$('#delanteros').text('strikers');
		$('#dt').text('Coach');
		$('.sub_jug').text('Protagonists');
		$('.sub_pos').text('Scores');
		$('.sub_pos').css('right', '9%');
		$('.sub_camp').text('Results');
		$('#bodyposiciones .sub_camp').css('left', '161px');
		$('#jugtabla').css('right','171px');
		$('.sub_dat').text('Data');
		traducir_contenido_dinamico_en();
		lenguaje_pantalla='en';
	};
	if(lenguaje=='por'){
		$('#curiosidades_texto').html('<br>TRIVIA');
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
		$('#arqueros').text('Arqueiros');
		$('#defensores').text('Defensors');
		$('#mediocampistas').text('meio-campistas');
		$('#delanteros').text('dianteiros');
		$('#dt').text('treinador');
		$('.sub_jug').text('Protagonistas');
		$('#bodyjugadores .sub_jug').css('right','8%');
		$('.sub_pos').text('posições');
		$('.sub_pos').css('right','164px');
		$('#bodyposiciones .sub_camp').css('left', '142px');
		$('#jugtabla').css('right','8%');
		$('.sub_camp').text('Resultados');
		$('.sub_dat').text('Data');
		traducir_contenido_dinamico_por();
		lenguaje_pantalla='por';
	};
	traducirLinks(lenguaje_pantalla);
}



var setup_datos = function(
	traducir_contenido_dinamico_es,
	traducir_contenido_dinamico_en,
	traducir_contenido_dinamico_por,
	lenguaje_pantalla,
	traducirLinks,
	$impressslide){

	traducir(lenguaje_pantalla,
		traducir_contenido_dinamico_es,
		traducir_contenido_dinamico_en,
		traducir_contenido_dinamico_por,
		lenguaje_pantalla,
		traducirLinks);
	
	
	$('a.juglink').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$impressslide.goto(2);
		});
	});
	$('#swipejugadores').bind("click", function (e) {
			e.preventDefault();
			$impressslide.goto(2);
		});
	$("#swipejugadores").swipe({
		swipeUp:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(2);
		},
		threshold: 10,
		fingers:'all'
	});
	$('a.poslink').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$impressslide.goto(3);
		});
	});	
	$('#swipeposiciones').bind("click", function (e) {
			e.preventDefault();
			$impressslide.goto(3);
		});
	$("#swipeposiciones").swipe({
		swipeUp:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(3);
		},
		threshold: 10,
		fingers:'all'
	});
	$('a.camplink').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:0});
			$impressslide.goto(1);
		});
	});	
	$('#swipecampania').bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:0});
			$impressslide.goto(1);
		});
	$("#swipecampania").swipe({
		swipeUp:function(event,direction,distance,duration,fingerCount){
			$('#body_datos').animate({opacity:0});
			$impressslide.goto(1);
		},
		threshold: 10,
		fingers:'all'
	});
	$(".swipeup").swipe({
		swipeDown:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:1});
			$impressslide.goto(0);
		},
		threshold: 20,
		fingers:'all'
	});
	$("#bodyjugadores").swipe({		
		/* swipeRight:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0});
			$impressslide.goto(1);
		}, */
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0});
			$impressslide.goto(1);
		},
		threshold: 10,
		fingers:'all'
		});
	$("#bodyposiciones").swipe({
		swipeRight:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0});
			$impressslide.goto(1);
		},
		/* swipeLeft:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0});
			$impressslide.goto(1);
		}, */
		threshold: 10,
		fingers:'all'
	});
	$("#bodydatos").swipe({
		swipeDown:function(event,direction,distance,duration,fingerCount){
			$('#backtotimeline').click();
		},
		threshold: 10,
		fingers:'all'
	});
	$("#bodyresultados").swipe({
		swipeRight:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(2);
		},
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(3);
		},
		threshold: 10,
		fingers:'all'
	});
	
	$('#step-4 .arrow_right').on('click',function(){
			$('#bodydatos').animate({opacity:0});
		$impressslide.goto(1);
	});
	$('#step-4 .arrow_left').on('click',function(){
		$impressslide.goto(2);
	});
	$('#step-3 .arrow_right').on('click',function(){
		$impressslide.goto(3);
	});
	$('#step-3 .arrow_left').on('click',function(){
			$('#bodydatos').animate({opacity:0});
		$impressslide.goto(1);
	});
	$('#step-2 .arrow_right').on('click',function(){
		$impressslide.goto(3);
	});
	$('#step-2 .arrow_left').on('click',function(){
		$impressslide.goto(2);
	});
	
	$('a.pantalladatos').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:1});
			$impressslide.goto(0);
		});
	});
	
	
	$('#video1').on('click', function(){
		var $videoCentral = $('#videocentral');		
		var $videoCentralSRC = $('source', $videoCentral).attr('src'),	
		$video1SRC = $('source', $(this)).attr('src');
		
		var currentTimeCentralVideo = $videoCentral.get(0).currentTime,
			currentTimeClickedVideo = $(this).get(0).currentTime;
			
		$('#videocentral source').attr('src', $video1SRC);
		$('#videocentral').get(0).load();
		$('#videocentral').get(0).currentTime = currentTimeClickedVideo;
		$('source', $(this)).attr('src', $videoCentralSRC);
		$(this).get(0).load();
		$(this).get(0).currentTime = currentTimeCentralVideo;
		
	});
	$('#video2').on('click', function(){
		var $videoCentral = $('#videocentral');
		var $videoCentralSRC = $('source', $videoCentral).attr('src'),	
		$video2SRC = $('source', $(this)).attr('src');
		
		var currentTimeCentralVideo = $videoCentral.get(0).currentTime,
			currentTimeClickedVideo = $(this).get(0).currentTime;
		
		$('#videocentral source').attr('src', $video2SRC);
		$('#videocentral').get(0).load();
		$('#videocentral').get(0).currentTime = currentTimeClickedVideo;
		$('source', $(this)).attr('src', $videoCentralSRC);
		$(this).get(0).load();
		$(this).get(0).currentTime = currentTimeCentralVideo;
						
	});
	
	$(document).ready(function() {
		$('.animada').attr('style','animation: pulse 1s infinite;');

		$('.selector').click(function(){
			if ($(this).attr('id') == 'copas_active' || $(this).attr('id') == 'copas' ){
				$objActivo = $("#copas_active");			
				$objActivo.find(".titulo").animate({opacity:0, 'margin-top':40});	
				$objActivo.find(".flecha").animate({opacity:0, 'margin-top':40});	
				$objActivo.attr('id','copas');
				$(this).attr('id','copas_active');
				$(this).find(".titulo").animate({opacity:0.7, 'margin-top':97});	
				$(this).find(".flecha").animate({opacity:0.7, 'margin-top':50});	
			}else{
				$('.lang_active').each(function(){
					$(this).find("img").animate({opacity:0.4});
					$(this).removeClass('lang_active');
				});
				$('.'+$(this).find('img').attr('class')).each(function(){
					$(this).animate({opacity:1});
					$(this).parent().addClass('lang_active');
				});					
				var lenguaje = $(this).find("img").attr('class');
					traducir(lenguaje,
						traducir_contenido_dinamico_es,
						traducir_contenido_dinamico_en,
						traducir_contenido_dinamico_por,
						lenguaje_pantalla,
						traducirLinks);
				       
				}
			});
		$("#formacion").colorbox({retinaImage:true,className:'modal',closeButton:true, overlayClose:true});
		
		
		$('#backtotimeline').click(function (event) {
			event.preventDefault();
			var link = $(this).attr("href");
			$('.body_datos')
				.velocity({translateY: "-10%", opacity:0.7}, {duration:300})
				.velocity({
				translateY: "150%"
				,opacity: 0
				},{ 
					duration: 500, 
					easing: "ease-out" ,
					complete: function(elements) { location.href = link;}
					});		
		});
	});
}