//Deshabilitar dragging
$("img").mousedown(function(){	return false; 	});

//Deshabilitar menu contextual
$(document).on("contextmenu",function(){
    return false;
});

//Seleccionar lenguaje
var toggleTranslation = function (lenguaje){
	$("#"+lenguaje).parent().attr("id","lang_active");
} 

var traducirLinks = function(lenguaje_pantalla){
	$("a").each(function(){
		var valAntig = $(this).attr("href");
		valAntig = valAntig.substr(0,valAntig.lastIndexOf('/')); 
		valAntig = valAntig.substr(0,valAntig.lastIndexOf('/')+1); 
		$(this).attr("href", valAntig+lenguaje_pantalla+"/");
	});
};