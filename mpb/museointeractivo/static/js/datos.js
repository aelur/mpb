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
		swipeDown:function(event,direction,distance,duration,fingerCount){
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
		swipeDown:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(3);
		},
		threshold: 10,
		fingers:'all'
	});
	$('a.camplink').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$impressslide.goto(1);
		});
	});	
	$('#swipecampania').bind("click", function (e) {
			e.preventDefault();
			$impressslide.goto(1);
		});
	$("#swipecampania").swipe({
		swipeDown:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(1);
		},
		threshold: 10,
		fingers:'all'
	});
	$(".body_tabla").swipe({
		swipeDown:function(event,direction,distance,duration,fingerCount){
			$impressslide.next();
		},
		swipeUp:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(0);
		},
		threshold: 20,
		fingers:'all'
	});
	$("#bodyjugadores").swipe({		
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(1);
		},
		swipeRight:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(3);
		},
		threshold: 30,
		fingers:'all'
		});
	$("#bodyposiciones").swipe({
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(2);
		},
		swipeRight:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(1);
		},
		threshold: 30,
		fingers:'all'
	});
	$("#bodyresultados").swipe({
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(2);
		},
		swipeRight:function(event,direction,distance,duration,fingerCount){
			$impressslide.goto(3);
		},
		threshold: 30,
		fingers:'all'
	});
	
	$('a.pantalladatos').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$impressslide.goto(0);
		});
	});
	
	var cargarVideo = function(video){
		$(video).get(0).pause();
		$(video).get(0).currentTime = '0';
		$(video).get(0).play();
	};
	
	$('#video1').on('click', function(){
		var $videoCentral = $('#videocentral');
		$videoCentral.get(0).pause();
		
		var $videoCentralSRC = $('source', $videoCentral).attr('src'),	
		$video1SRC = $('source', $(this)).attr('src');
		
		$('#videocentral source').attr('src', $video1SRC);
		$('source', $(this)).attr('src', $videoCentralSRC);
		
		$('.videobox span').velocity({opacity:0, scaleX: 1.1, scaleY: 1.1},{ duration: 2});
		$('.vid1 span').velocity({opacity:0, scaleX: 1.1, scaleY: 1.1},{ duration: 2});
		var $titulo = $('.videobox span').text();
		$('.videobox span').text($('.vid1 span').text());
		$('.videobox span').velocity({opacity:0.8, scaleX: 1, scaleY: 1},{ duration: 200});
		$('.vid1 span').text($titulo);
		$('.vid1 span').velocity({opacity:0.8, scaleX: 1, scaleY: 1},{ duration: 200});
		
		cargarVideo($videoCentral);
		cargarVideo($(this));
	});
	$('#video2').on('click', function(){
		var $videoCentral = $('#videocentral');
		$videoCentral.get(0).pause();
		
		var $videoCentralSRC = $('source', $videoCentral).attr('src'),	
		$video2SRC = $('source', $(this)).attr('src');
		
		$('#videocentral source').attr('src', $video2SRC);
		$('source', $(this)).attr('src', $videoCentralSRC);
		
		$('.videobox span').velocity({opacity:0, scaleX: 1.1, scaleY: 1.1},{ duration: 2});
		$('.vid2 span').velocity({opacity:0, scaleX: 1.1, scaleY: 1.1},{ duration: 2});
		var $titulo = $('.videobox span').text();
		$('.videobox span').text($('.vid2 span').text());
		$('.videobox span').velocity({opacity:0.8, scaleX: 1, scaleY: 1},{ duration: 200});
		$('.vid2 span').text($titulo);
		$('.vid2 span').velocity({opacity:0.8, scaleX: 1, scaleY: 1},{ duration: 200});
		
		cargarVideo($videoCentral);
		cargarVideo($(this));
		
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
		
		/* $("#videocentral").on('click', function(e){
			var $video = $(this).get(0);
			if ($video.paused){
				$video.play();
			}else {
				$video.pause();
			}
		});

		$("#videocentral").bind('pause', function(e) {			
			$('#play').velocity({opacity:1});
		});
		$("#videocentral").bind('play', function(e) {			
			$('#play').velocity({opacity:0});
		});
		$("#videocentral").bind('ended', function(e) {			
			$('#play').velocity({opacity:1});
		});
		$('#play').on('click', function(){
			$('#videocentral').get(0).play();
		}); */
		/*$('#stop').on('click', function(){
			$('#videocentral').get(0).pause();
		});		
		$('#reload').on('click', function(){
			$('#videocentral').get(0).pause();
			$('#videocentral').get(0).currentTime = '0';
			$('#videocentral').get(0).play();
		});*/
		/* $('.video').on('click',function(){
			$("#videocentral").get(0).pause();
			if ($(this).attr('id') == 'activevid'){
					$(this).find('img').remove();
					$(this).velocity({
						perspective: '+=300px',
						rotateY: '+=360deg',
						translateX:-503,
						translateY:-26,
						scaleX: 2.53,
						scaleY: 4.62,
						opacity:0.3,
						duration: 500,
						});
					$(this).css("z-index", "0");
					//CAMBIO EL SRC DEL SELECCIONADO EN EL ACTIVO				
					var $videoCentral = $('#videocentral'),
						$videoCentralSRC = $('source', $videoCentral).attr('src'),	
						$video1 = $('#video1'),
						$video1SRC = $('source', $video1).attr('src'),	
						$video2 = $('#video2'),
						$video2SRC = $('source', $video2).attr('src');					
					$('#videocentral source').attr('src', $video1SRC);
					loadVideos();

					$videoCentral.get(0).play();
				};
			}); */
	});
}