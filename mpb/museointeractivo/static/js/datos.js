

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
		$('#curiosidades_texto').text('CURIOSIDADES');
		traducir_contenido_dinamico_es();
		lenguaje_pantalla='es';
	};
	if(lenguaje=='en'){
		$('#curiosidades_texto').text('CURIOSITIES');	
		traducir_contenido_dinamico_en();
		lenguaje_pantalla='en';
	};
	if(lenguaje=='por'){
		$('#curiosidades_texto').html('<br>TRIVIA');
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
	traducirLinks){

	traducir(lenguaje_pantalla,
		traducir_contenido_dinamico_es,
		traducir_contenido_dinamico_en,
		traducir_contenido_dinamico_por,
		lenguaje_pantalla,
		traducirLinks);

	$("#1").css('opacity',1);
	$("#a1").css('opacity',1);
	
	
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
				$objActivo = $("#lang_active");
				$objActivo.find("img").animate({opacity:0.4});		
				$objActivo.attr('id','lang');
				$(this).attr('id','lang_active');
				$(this).find("img").animate({opacity:1});
				var lenguaje = $(this).find("img").attr('id');	
				traducir(lenguaje,
					traducir_contenido_dinamico_es,
					traducir_contenido_dinamico_en,
					traducir_contenido_dinamico_por,
					lenguaje_pantalla,
					traducirLinks);
				}
			});
		$("#formacion").colorbox({retinaImage:true,className:'modal',closeButton:true, overlayClose:true});
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