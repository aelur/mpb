var recalcularHorizonte = function(){
	var imagenes_carousel = $('.carousel').find('img');
	$.each(imagenes_carousel, function(i,e){ 
		$(e).removeAttr('style');
		var pos = parseInt($(e).offset().left),
			dis_al_centro = parseInt( Math.floor(Math.abs(($(document).width()/2)-pos-100) / 200));
		if (dis_al_centro != 0){
			$(e).css({
				opacity: (0.9/dis_al_centro),
				//'transform': 'scale('+(1 - (0.08*dis_al_centro))+')'
				});
		}else{
			$(e).animate({
				//width:'210px',
				opacity: 1,
			}, 5);
		};
	});
	
}

var getNombreUnico= function(dato){
 	var url = dato;
    var nombre = url.substr(url.lastIndexOf("/") + 1);
	return nombre.substr(0,nombre.lastIndexOf("_"));
}

var animarImagenCentro = function(elemento_centro,datos_campeonatos,urlbg_viejo){
	var imgCentro = $.grep($('img'), function(e,i){return $(e).attr('alt') == elemento_centro;}),
		objTexto = $("#" + elemento_centro),
		objANIO = $("#a" + elemento_centro);
	
	imgCentro = $(imgCentro[0]);
	imgCentro.animate({
		width: '230px',
		opacity: 1,
		}, 500, function(){
			imgCentro.addClass('carousel-center');
		});
		
	//Si es internacional tengo que mover el año y el titulo mas abajo
	var tipo = $.grep(datos_campeonatos, function(elem,index){
		return elem.id ==  elemento_centro;
	})[0].tipo;	
	if(tipo=='INT') {
		objANIO.css({'bottom': '11%'});	
		objTexto.css({'bottom': '7%'});	
	}
	objANIO.css('z-index',9);
	objTexto.animate({fontSize: 28,opacity: .9},800);
	objANIO.animate({opacity: 1},800);
	
	var urlbg_nuevo = $.grep(datos_campeonatos, function(elem,index){
		return elem.id ==  elemento_centro;
	})[0].urlbg;
	
	if(!( tipo=='NAC' && urlbg_viejo == urlbg_nuevo) )
	$(".fondo_campeonato").css("background", 
			"url("+urlbg_nuevo+") no-repeat center center fixed");	
	
	urlbg_viejo = urlbg_nuevo;
}

var quitarAnimacionViejoCentro = function(elemento_centro){
	var imgCentro = $.grep($('img'), function(e,i){return $(e).attr('alt') == elemento_centro;}),
		objTexto = $("#" + elemento_centro),
		objANIO = $("#a" + elemento_centro);
	
	objTexto.animate({fontSize: 9,opacity: 0});
	objANIO.animate({opacity: 0});
	objANIO.css('z-index',0);
	
	imgCentro = $(imgCentro[0]);
	imgCentro.removeClass('carousel-center');
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
		$('.nac').animate({'margin-left':-90});
	}
	
	traducirLinks(lenguaje_pantalla);
}

var setup_timeline = function(datos_campeonatos,
	traducir_contenido_dinamico_es,
	traducir_contenido_dinamico_en,
	traducir_contenido_dinamico_por,
	lenguaje_pantalla,
	traducirLinks){
	
	var obtener_centro = function(anio){	
		if (typeof anio == 'undefined'){
			return datos_campeonatos[0].id;
		}
		var holder = $.grep(datos_campeonatos,function(elem,index){
			return elem.anio==anio;
		})[0];
		if (typeof holder != 'undefined'){
			holder = elemento_centro.id;
		};
		return holder;
	}
	
	var elemento_centro = $($('.carousel img')[parseInt(datos_campeonatos.length/2)]).attr('alt');
	var urlbg_viejo = '';
	
	var opciones = {			
			slidesToShow: 10,
			arrows: false,
			infinite: false,
			touchThreshold: 10,
			swipeToSlide: true,
			initialSlide: parseInt(datos_campeonatos.length/2),
	};
	
	var filtrar = function(tipo, slick){	
		$('em').css('opacity',0);
		$('.anio').css('opacity',0);
		quitarAnimacionViejoCentro(elemento_centro);	
		tipo = tipo[1].toUpperCase();
		if (tipo == 'I') tipo = 'INT';
		if (tipo == 'N') tipo = 'NAC';
				
		var filtrarSlides = function(index, element){
			var id = $(element).find('img').attr('alt');
			if (typeof id == 'undefined') return true;
			var tipo_elemento = $.grep(datos_campeonatos, function(elem, index){
				return (elem.id==id);
			})[0].tipo;
			return (tipo==tipo_elemento);
		}
		var devolverTodos = function(index,element){return true};
		
		if (typeof slick != 'undefined') {					
			// EL FILTRO ES POR TODOS
			if (tipo=='T' || tipo == 'A') {
				$('.carousel').slick('slickFilter', devolverTodos);
				var slidesActivas = $('.slick-active'),
					numCentro = parseInt(slidesActivas.length / 2),
					numImg = parseInt($('.slick-active img').length / 2);
				$('.carousel').slick('slickGoTo', (numCentro+1)-numImg,true);
			}else{
				$('.carousel').slick('slickFilter', filtrarSlides);
				var slidesActivas = $('.slick-active'),
					slidesFillerActivas = $('.slick-active .filler').length,
					numCentro = parseInt(slidesActivas.length / 2) +1;
				$('.carousel').slick('slickGoTo', numCentro-parseInt(slidesFillerActivas/2),true);
			}
			
		};		
		
		// ACTUALIZAR EL CENTRAL
		if (typeof slick == 'undefined') animarImagenCentro(elemento_centro,datos_campeonatos,urlbg_viejo);
		
		
	} 
	
	$(document).ready(function() {
		filtrar('>T');
		
		// CAROUSEL
		var slick = $(".carousel").slick(opciones);	
		
		$(".carousel").on('beforeChange', function(event,slick,currentSlide,nextSlide){
			quitarAnimacionViejoCentro(elemento_centro);
		});
		$(".carousel").on('afterChange', function(event,slick,currentSlide){
			// ACTUALIZAMOS EL NUEVO CENTRO
			var slideActivas = $('.slick-active'),
				slideCentro = $(slideActivas[parseInt(slideActivas.length / 2)-1]);
			elemento_centro = slideCentro.find('img').attr('alt');
			
			animarImagenCentro(elemento_centro,datos_campeonatos,urlbg_viejo);
		});
		
		recalcularHorizonte();
		
		$('.slick-track').attrchange({
			trackValues: true,
			callback: function(event){
					if (event.attributeName == 'style') {
						recalcularHorizonte();
					}
				}
			});		
		
		// FILTRO - SWIPE
		$('.left .typesetter').swipe({
			swipeLeft:function(event,direction,distance,duration,fingerCount){
				//traigo la imagen sobre la que se deslizo
				$trigger = $(event.target);
				//no hago nada si la imagen no es la activa
				if ($trigger.parent().attr('id') != 'copas_active') return;
				//defino a que voy a cambiar
				var nuevo;
				if ($trigger.attr('id') == 'todos') return;
				if ($trigger.attr('id') == 'int') nuevo = $('#todos').parent();
				if ($trigger.attr('id') == 'nac') nuevo = $('#int').parent();
				$trigger = $trigger.parent();
				$trigger.find(".titulo").animate({opacity:0, 'margin-top':40});	
				$trigger.find(".flecha").animate({opacity:0, 'margin-top':40});	
				$trigger.find("img").animate({opacity:0, 'margin-right':30});	
				$trigger.find("img").animate({'margin-right':0});	
				$trigger.attr('id','copas');
				
				nuevo.attr('id','copas_active');
				nuevo.find("img").animate({opacity:1});	
				nuevo.find(".titulo").animate({opacity:0.7, 'margin-top':97});	
				nuevo.find(".flecha").animate({opacity:0.7, 'margin-top':50});	
					
				$('.nombre').text($('#copas_active').find('.titulo').text());
				var tipo = nuevo.find('span').text();
				filtrar(tipo, slick);			
			},
			swipeRight:function(event,direction,distance,duration,fingerCount){
				//traigo la imagen sobre la que se deslizo
				$trigger =$(event.target);
				//no hago nada si la imagen no es la activa			
				if ($trigger.parent().attr('id') != 'copas_active') return;
				//defino a que voy a cambiar
				var nuevo;
				if ($trigger.attr('id') == 'nac') return;
				if ($trigger.attr('id') == 'int') nuevo = $('#nac').parent();
				if ($trigger.attr('id') == 'todos') nuevo = $('#int').parent();
				$trigger = $trigger.parent();
				$trigger.find(".titulo").animate({opacity:0, 'margin-top':40});	
				$trigger.find(".flecha").animate({opacity:0, 'margin-top':40});	
				$trigger.find("img").animate({opacity:0, 'margin-left':30});	
				$trigger.find("img").animate({'margin-left':0});	
				$trigger.attr('id','copas');
				
				nuevo.attr('id','copas_active');
				nuevo.find("img").animate({opacity:1});	
				nuevo.find(".titulo").animate({opacity:0.7, 'margin-top':97});	
				nuevo.find(".flecha").animate({opacity:0.7, 'margin-top':50});	
					
				$('.nombre').text($('#copas_active').find('.titulo').text());
				var tipo = nuevo.find('span').text();
				filtrar(tipo, slick);	
			},
			threshold: 5
		});

		// FILTRO - FUNCIONALIDAD
		$('.selector').click(function(){
			if ($(this).attr('id') == 'copas_active' || $(this).attr('id') == 'copas' ){
				$objActivo = $("#copas_active");			
				$objActivo.find(".titulo").animate({opacity:0, 'margin-top':40});	
				$objActivo.find(".flecha").animate({opacity:0, 'margin-top':40});					
				$("#copas_active").find("img").animate({opacity:0});	
				$objActivo.attr('id','copas');
				$(this).attr('id','copas_active');
				$(this).find(".titulo").animate({opacity:0.7, 'margin-top':97});	
				$(this).find(".flecha").animate({opacity:0.7, 'margin-top':50});					
				$(this).find("img").animate({opacity:1});	
				
				$('.nombre').text($('#copas_active').find('.titulo').text());
				var tipo = $(this).find('span').text();
				filtrar(tipo, slick);
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
		// ENTRADA
		 $('#body_timeline')
			.velocity({translateY: "30%", opacity:0.7, translateZ:"0%"}, {duration:1200})
			.velocity({
				 translateY: "0%"
				,translateZ:"0%"
				,opacity: 1
			},{ 
				duration: 300, 
				easing: "ease-out" 
			});		
	});
	
}