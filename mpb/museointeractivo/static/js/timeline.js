var idCampeonatoCentroViejo = 0;
var carouselSeleccionado = '#wrapperCarousel';

var filtrar = function(tipo, datos_campeonatos,idCampeonatoCentro){
	tipo = tipo[1];
	$(carouselSeleccionado).css({'opacity':0, 'z-index': -1000});
	if (tipo == 'N'){
		carouselSeleccionado = "#carouselNacionales";
	}if (tipo == 'I'){
		carouselSeleccionado = "#carouselInternacionales";
	}if (tipo == 'T'){
		carouselSeleccionado = "#wrapperCarousel";
	}
	
	$(carouselSeleccionado).css({'opacity':1, 'z-index': -0});
	idCampeonatoCentroViejo = idCampeonatoCentro;
	idCampeonatoCentro = $($(carouselSeleccionado +' .sc-selected').find('img')).attr('alt');
	animarImagenCentro(idCampeonatoCentro,datos_campeonatos,idCampeonatoCentroViejo);
};

var obtenerAnio = function(datos_campeonatos,idBuscado){
	return $.grep(datos_campeonatos, function(elem,index){
		return elem.id ==  idBuscado;
	})[0].anio;
};
var mismaDecada = function(anio1,anio2){
	return String(anio1).substr(2,1) == String(anio2).substr(2,1);
};
var animarImagenCentro = function(elemento_centro,datos_campeonatos,idCampeonatoCentroViejo){
	var anioViejo = obtenerAnio(datos_campeonatos,idCampeonatoCentroViejo),
		anioNuevo = obtenerAnio(datos_campeonatos,elemento_centro);
		
	var elem_centro = $.grep(datos_campeonatos, function(elem,index){
		return elem.id ==  elemento_centro;
	})[0],
		urlbg_nuevo = elem_centro.urlbg,
		tipo = elem_centro.tipo;
	
	if(!( tipo=='NAC' && mismaDecada(anioViejo,anioNuevo) ) ){
		$(".fondo_campeonato").animate({opacity:0}, 300, "linear", function(){
			$(".fondo_campeonato").css("background", "url("+urlbg_nuevo+") no-repeat center center fixed");	
			$(".fondo_campeonato").animate({opacity:0.8}, 400, "linear");
		})
		
	}
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
	
	var opciones = {			
		itemWidth: 200, // The width of your images.
		itemHeight: 200, // The height of your images.
		selectByClick: false,
		reflectionVisible: true,
		gradientOverlayVisible: false,
		navigationButtonsVisible: false,
		slideSpeed: 0.86,
		distance: 95,
	};	
	
	$(document).ready(function() {
		// CAROUSEL
		var carousel = $("#wrapperCarousel").carousel(opciones);		
		var carouselInternacionales = $("#carouselInternacionales").carousel(opciones);		
		var carouselNacionales = $("#carouselNacionales").carousel(opciones);
		
		idCampeonatoCentro = $($(carouselSeleccionado+' .sc-selected').find('img')).attr('alt');
		animarImagenCentro(idCampeonatoCentro, datos_campeonatos, 11);
		
		//EVENTOS TODOS
		carousel.on('itemSelected.sc', function(evt) {
			idCampeonatoCentroViejo = idCampeonatoCentro;
			idCampeonatoCentro = $($(carouselSeleccionado +' .sc-selected').find('img')).attr('alt');
		});
		carousel.on('selectionAnimationEnd.sc', function(evt) {
			animarImagenCentro(idCampeonatoCentro,datos_campeonatos,idCampeonatoCentroViejo);		
		});
		//EVENTOS INTERNACIONALES
		carouselInternacionales.on('itemSelected.sc', function(evt) {
			idCampeonatoCentroViejo = idCampeonatoCentro;
			idCampeonatoCentro = $($(carouselSeleccionado +' .sc-selected').find('img')).attr('alt');
		});
		carouselInternacionales.on('selectionAnimationEnd.sc', function(evt) {
			animarImagenCentro(idCampeonatoCentro,datos_campeonatos,idCampeonatoCentroViejo);		
		});
		//EVENTOS NACIONALES
		carouselNacionales.on('itemSelected.sc', function(evt) {
			idCampeonatoCentroViejo = idCampeonatoCentro;
			idCampeonatoCentro = $($(carouselSeleccionado +' .sc-selected').find('img')).attr('alt');
		});
		carouselNacionales.on('selectionAnimationEnd.sc', function(evt) {
			animarImagenCentro(idCampeonatoCentro,datos_campeonatos,idCampeonatoCentroViejo);		
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
				filtrar(tipo,datos_campeonatos,idCampeonatoCentro);			
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
				filtrar(tipo,datos_campeonatos,idCampeonatoCentro);	
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
				filtrar(tipo,datos_campeonatos,idCampeonatoCentro);
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