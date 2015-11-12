var getNombreUnico= function(dato){
 	var url = dato;
    var nombre = url.substr(url.lastIndexOf("/") + 1);
	return nombre.substr(0,nombre.lastIndexOf("_"));
}

var traducir = function(lenguaje,
	traducir_contenido_dinamico_es,
	traducir_contenido_dinamico_en,
	traducir_contenido_dinamico_por,
	lenguaje_pantalla,
	traducirLinks){
	
	if(lenguaje=='es'){
		$('.todos').text('TODOS');
		$('.nac').text('NACIONALES');
		$('.int').text('INTERNACIONALES');
		$('.nombre').text($('#copas_active').find('.titulo').text());
		traducir_contenido_dinamico_es();
		
		lenguaje_pantalla='es';
	}
	if(lenguaje=='en'){
		$('.todos').text('ALL');
		$('.nac').text('NATIONALS');
		$('.int').text('INTERNATIONALS');
		$('.nombre').text($('#copas_active').find('.titulo').text());
		traducir_contenido_dinamico_en();
		
		$('.todos').animate({'margin-left':-58});
		$('.int').animate({'margin-left':-114});
		$('.nac').animate({'margin-left':-90});
		lenguaje_pantalla='en';
	}
	if(lenguaje=='por'){
		$('.todos').text('TODOS');
		$('.nac').text('NACIONAIS');
		$('.int').text('INTERNACIONAIS');
		$('.nombre').text($('#copas_active').find('.titulo').text());
		traducir_contenido_dinamico_por();
		lenguaje_pantalla='por';
		
		$('.todos').animate({'margin-left':-74});
		$('.int').animate({'margin-left':-114});
		$('.nac').animate({'margin-left':-90});
	}
	
	traducirLinks(lenguaje_pantalla);
}


var prevCentroCarousel;

var setup_timeline = function(datos_campeonatos,
	traducir_contenido_dinamico_es,
	traducir_contenido_dinamico_en,
	traducir_contenido_dinamico_por,
	lenguaje_pantalla,
	traducirLinks){
	
	var default_starter = $.grep(datos_campeonatos,function(elem,index){
		return elem.anio=="2000";
	})[0];
	if (typeof default_starter != 'undefined'){
		default_starter = default_starter.id;
	}
	// OPCIONES DEL CAROUSEL
	var opciones = {
			horizon: 110,
			horizonOffset: 10,
			startingItem:0,
			horizonOffsetMultiplier: .4,
			sizeMultiplier: .7,
			separationMultiplier: .8,
			separation: 150,
			edgeFadeEnabled: true,
			animationEasing: 'linear',
			linkHandling: 2,
			preloadImages: false,
			forcedImageWidth:200,
			forcedImageHeight: 200,
			movingFromCenter: function($newCenterItem){	
				$objTexto = $("#" + $newCenterItem.attr('alt'));
				$objTexto.stop(true,true).animate({fontSize: 9,opacity: 0});
				$objANIO = $("#a" + $newCenterItem.attr('alt'));
				$objANIO.stop(true,true).animate({opacity: 0});
				prevCentroCarousel = $('.carousel-center').attr('alt');
			},
			movedToCenter: function($newCenterItem){
				var indexCentro =$newCenterItem.attr('alt');
				$objTexto = $("#" + indexCentro);
				$objTexto.stop(true,true).animate({fontSize: 18,opacity: .9});
				$objANIO = $("#a" + indexCentro);
				$objANIO.stop(true,true).animate({opacity: 1});
				
				//Si es internacional tengo que mover el año y el titulo mas abajo
				var tipo = $.grep(datos_campeonatos, function(elem,index){
					return elem.id ==  indexCentro;
				})[0].tipo;	
				if(tipo=='INT') $objANIO.css({'transform': 'translate(-50%,570%)'});					
				
				var urlbg_nuevo = $.grep(datos_campeonatos, function(elem,index){
					return elem.id ==  indexCentro;
				})[0].urlbg;
				var urlbg_viejo = $.grep(datos_campeonatos, function(elem,index){
					return elem.id ==  prevCentroCarousel;
				})[0].urlbg;				
				if(!( tipo=='NAC' && urlbg_viejo == urlbg_nuevo) )
				$(".fondo_campeonato").css("background", 
						"url("+urlbg_nuevo+") no-repeat center center fixed");		
			}
	};
	
	var filtrar = function(tipo, carousel){
		var filtrados;
		var primero;
		tipo = tipo[1];
		if (tipo=='T' || tipo == 'A') {
			filtrados = datos_campeonatos;
			if (typeof default_starter == 'undefined'){
				primero = filtrados[0].id;
				opciones.startingItem = 1;
			} else{
				primero = default_starter;
				$.each(filtrados,function(index,elem){
					if (elem.id==default_starter) opciones.startingItem = index + 1;
				});
			};
		}else{
			if (tipo == 'I') tipo = 'INT';
			if (tipo == 'N') tipo = 'NAC';
			filtrados = $.grep(datos_campeonatos, function(elem, index){
				return (elem.tipo==tipo);
			});
			primero=filtrados[0].id;
			opciones.startingItem = 1;
		};
		$("#carousel").empty();
		$.each(filtrados, function(index, elemento){
				var html_nuevo = "<div id=div_camp"+elemento.id+">"
						+"<a href='"+elemento.url+"'><img src="
						+elemento.imgcopa+" width='140px' height='140px' alt="+elemento.id+" >"
						+"<span class='anio' id='a"+elemento.id+"' >"
						+elemento.anio+"</span></a>"
						+"<em id="+elemento.id+">"+elemento.titulo+"</em></div>"
				$("#carousel").append(html_nuevo);
			});
		
		var elem = $.grep(filtrados, function(e,i){return (e.id==primero)})[0];
		$('em').css('opacity',0);
		$('.anio').css('opacity',0);
		$("#"+primero).css('opacity',1);
		$("#a"+primero).css('opacity',1);
		$(".fondo_campeonato").css({"background": 
							"url("+elem.urlbg+") no-repeat center center fixed"});
		if (typeof carousel != 'undefined') carousel.reload(opciones);
	} 

	$(document).ready(function() {
		//Levantar Carousel	
		var carousel = $("#carousel").waterwheelCarousel(opciones);
		
		prevCentroCarousel = $('.carousel-center').attr('alt');
		
		// Swipe del Carousel
		$("#carousel").swipe({
			swipeLeft:function(event,direction,distance,duration,fingerCount){
				var numero_pasadas = Math.round(distance/200);
				for (var i = 0; i < numero_pasadas; i++){
					carousel.prev();
				};
				console.log(distance);
			},
			swipeRight:function(event,direction,distance,duration,fingerCount){
				carousel.next();
				console.log(distance);
			},
			threshold: 20,
			fingers:'all'
		});
		
		//swipe del filtro
			$('.left .typesetter').swipe({
		swipeLeft:function(event,direction,distance,duration,fingerCount){
			var trigger = $(event.target);
			console.log(trigger);
			//defino a que voy a cambiar
			var nuevo;
			if (trigger.attr('id') == 'todos') return;
			if (trigger.attr('id') == 'int') nuevo = $('#todos').parent();
			if (trigger.attr('id') == 'nac') nuevo = $('#int').parent();
			trigger = trigger.parent();
			trigger.find(".titulo").animate({opacity:0, 'margin-top':40});	
			trigger.find(".flecha").animate({opacity:0, 'margin-top':40});	
			trigger.find("img").animate({opacity:0, 'margin-left':10});	
			trigger.find("img").animate({'margin-left':0});	
			trigger.attr('id','copas');
			
			nuevo.attr('id','copas_active');
			nuevo.find(".titulo").animate({opacity:0.7, 'margin-top':97});	
			nuevo.find(".flecha").animate({opacity:0.7, 'margin-top':50});	
				
			$('.nombre').text($('#copas_active').find('.titulo').text());
			var tipo = nuevo.find('span').text();
			filtrar(tipo, carousel);			
		},
		swipeRight:function(event,direction,distance,duration,fingerCount){
			var trigger =$(event.target);
			//defino a que voy a cambiar
			var nuevo;
			if (trigger.attr('id') == 'nac') return;
			if (trigger.attr('id') == 'int') nuevo = $('#nac').parent();
			if (trigger.attr('id') == 'todos') nuevo = $('#int').parent();
			trigger = trigger.parent();
			trigger.find(".titulo").animate({opacity:0, 'margin-top':40});	
			trigger.find(".flecha").animate({opacity:0, 'margin-top':40});	
			trigger.find("img").animate({opacity:0, 'margin-left':10});	
			trigger.find("img").animate({'margin-left':0});	
			trigger.attr('id','copas');
			
			nuevo.attr('id','copas_active');
			nuevo.find(".titulo").animate({opacity:0.7, 'margin-top':97});	
			nuevo.find(".flecha").animate({opacity:0.7, 'margin-top':50});	
				
			$('.nombre').text($('#copas_active').find('.titulo').text());
			var tipo = nuevo.find('span').text();
			filtrar(tipo, carousel);	
		},
		threshold: 5
	});
		
		$('#prev').bind('click', function () {
			carousel.prev();
			return false
		});
	
		$('#next').bind('click', function () {
			carousel.next();
			return false;
		});
			
		$('.selector').click(function(){
			if ($(this).attr('id') == 'copas_active' || $(this).attr('id') == 'copas' ){
				$objActivo = $("#copas_active");			
				$objActivo.find(".titulo").animate({opacity:0, 'margin-top':40});	
				$objActivo.find(".flecha").animate({opacity:0, 'margin-top':40});	
				$objActivo.attr('id','copas');
				$(this).attr('id','copas_active');
				$(this).find(".titulo").animate({opacity:0.7, 'margin-top':97});	
				$(this).find(".flecha").animate({opacity:0.7, 'margin-top':50});	
				
				$('.nombre').text($('#copas_active').find('.titulo').text());
				var tipo = $(this).find('span').text();
				filtrar(tipo, carousel);
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
		traducir(lenguaje_pantalla,
			traducir_contenido_dinamico_es,
			traducir_contenido_dinamico_en,
			traducir_contenido_dinamico_por,
			lenguaje_pantalla,
			traducirLinks);
	});
	
	filtrar('>TODOS');
}