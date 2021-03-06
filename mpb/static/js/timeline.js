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
		itemWidth: 200, // The width of your images.
		itemHeight: 200 // The height of your images.
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
		
	} 
	
	$(document).ready(function() {
		// CAROUSEL
		var slick = $("#wrapperCarousel").carousel(opciones);	
		
		
		
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