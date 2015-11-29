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
		$('#curiosidades_texto').removeAttr('style');
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
		$('#curiosidades_texto').removeAttr('style');
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
		$('#curiosidades_texto').attr('style','top:29%;left:15%;');
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
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(2);
		});
	});
	$('#swipejugadores').bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(2);
		});
	$("#swipejugadores").swipe({
		swipeUp:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(2);
		},
		threshold: 5,
		fingers:'all'
	});
	$('a.poslink').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(3);
		});
	});	
	$('#swipeposiciones').bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(3);
		});
	$("#swipeposiciones").swipe({
		swipeUp:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(3);
		},
		threshold: 5,
		fingers:'all'
	});
	$('a.camplink').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(1);
		});
	});	
	$('#swipecampania').bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(1);
		});
	$("#swipecampania").swipe({
		swipeUp:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(1);
		},
		threshold: 5,
		fingers:'all'
	});
	$(".swipeup").swipe({
		swipeDown:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:1});
			$impressslide.goto(0);
		},
		threshold: 2,
		fingers:'all'
	});
	$("#bodyjugadores").swipe({		
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(1);
		},
		threshold: 5,
		fingers:'all'
		});
	$("#bodyposiciones").swipe({
		swipeRight:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(1);
		},
		threshold: 5,
		fingers:'all'
	});
	$("#bodydatos .swipeup").swipe({
		swipeDown:function(event,direction,distance,duration,fingerCount){
			$('#backtotimeline').click();
		},
		threshold: 2,
		fingers:'all'
	});
	$('#step-2 .arrow_up').swipe({
			swipeDown:function(e,dir,di,d,f){ $('#bodydatos').animate({opacity:1}); $impressslide.goto(0);}, threshold: 2,fingers:'all'});
	$('#step-3 .arrow_up').swipe({
			swipeDown:function(e,dir,di,d,f){ $('#bodydatos').animate({opacity:1}); $impressslide.goto(0);}, threshold: 2,fingers:'all'});
	$('#step-4 .arrow_up').swipe({
			swipeDown:function(e,dir,di,d,f){ $('#bodydatos').animate({opacity:1}); $impressslide.goto(0);}, threshold: 2,fingers:'all'});
	$('#bodydatos .arrow_up').swipe({
			swipeDown:function(e,dir,di,d,f){ $('#backtotimeline').click(); }, threshold: 2,fingers:'all'});		
	$('#step-2 .arrow_up').click(function(){ $('#bodydatos').animate({opacity:1}); $impressslide.goto(0); });
	$('#step-3 .arrow_up').click(function(){ $('#bodydatos').animate({opacity:1}); $impressslide.goto(0); });
	$('#step-4 .arrow_up').click(function(){ $('#bodydatos').animate({opacity:1}); $impressslide.goto(0); });
	
	$("#bodyresultados").swipe({
		swipeRight:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(2);
		},
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			$('#bodydatos').animate({opacity:0},900);
			$impressslide.goto(3);
		},
		threshold: 5,
		fingers:'all'
	});
	
	$('#step-4 .arrow_left').on('click',function(){
		$('#bodydatos').animate({opacity:0},900);
		$impressslide.goto(1); //POSICIONES VA A RESULTADOS
	});
	$('#step-3 .arrow_right').on('click',function(){
		$('#bodydatos').animate({opacity:0},900);
		$impressslide.goto(1); //JUGADORES VA A RESULTADOS
	});
	$('#step-2 .arrow_right').on('click',function(){
		$('#bodydatos').animate({opacity:0},900);
		$impressslide.goto(3);  //RESULTADOS VA A POSICIONES
	});
	$('#step-2 .arrow_left').on('click',function(){
			$('#bodydatos').animate({opacity:0},900);
		$impressslide.goto(2); //RESULTADOS VA A JUGADORES
	});
	
	$('a.pantalladatos').each(function(){
		$(this).bind("click", function (e) {
			e.preventDefault();
			$('#bodydatos').animate({opacity:1});
			$impressslide.goto(0);
		});
	});
	
	
	$('.vid1').on('click', function(){
		var videoCentral = $('.videobox').children()[0];
		$('.videobox').empty();
		$('.videobox').append($(this).children()[0]);		
		var video = $($('.videobox').children()[0]);
		video.get(0).play();
		
		$('.vid1').empty();
		$('.vid1').append(videoCentral);
		video = $($('.vid1').children()[0]);
		video.get(0).play();		
	});
	
	$('.vid2').on('click', function(){
		var videoCentral = $('.videobox').children()[0];
		$('.videobox').empty();
		$('.videobox').append($(this).children()[0]);
		var video = $($('.videobox').children()[0]);
		video.get(0).play();
		$('.vid2').empty();
		$('.vid2').append(videoCentral);
		video = $($('.vid2').children()[0]);
		video.get(0).play();				
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
		$("#formacion").colorbox({
			className:'modal',
			closeButton:true, 
			overlayClose:true,
			scalePhotos: true,
			width: '1500px',
			innerWidth: '1500px',
			maxWidth: '1500px'				
			});
		$('#colorbox').click(function (event){
			$('#cboxOverlay').click();
		});
		
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