function fade (color, alpha, steps, step){
	return Math.round( (color*((1-((1-alpha)/steps*step)))) );
}

jQuery.fn.extend({
	flatify: function(settings) {
    	var text_shadow = '';
    	var shadows
    	var alpha
    	var r;
    	var g;
    	var b;
    	var f;
    	var w;
    	var c;

    	//checkeos de existencia e inicialización
    	//Colores
    	(settings.r >= 0 && settings.r <= 255) ? r = settings.r : r = 59;
    	(settings.g >= 0 && settings.g <= 255) ? g = settings.g : g = 89;
    	(settings.b >= 0 && settings.b <= 255) ? b = settings.b : b = 152;

    	//Forma
    	settings.f > 20 ? f = settings.f : f = 20;
    	settings.w > 30 ? w = settings.w : w = 30;
    	(settings.c >= 0 && settings.c <= 50) ? c = settings.c : c = 0;

    	//Sombra
    	(settings.a >= 0 && settings.a <= 1) ? alpha = settings.a : alpha = 0.7;
    	(settings.s >= 0 && settings.s <= 100) ? shadows = settings.s : shadows = 5;


    	for (i = 1; i <= shadows; i++) {
    		text_shadow =  " " + (shadows - i) + "px " + (shadows - i) + "px rgb(" + fade(r, alpha, shadows, i) + ", " + fade(g, alpha, shadows, i) + ", "  + fade(b, alpha, shadows, i) + ")," + text_shadow;
    	}
    	text_shadow = text_shadow.substring(0, text_shadow.length - 1);
    	var css = {
    		"text-shadow":text_shadow,
    		"font-size": f+"px",
    		"color":"white",
    		"background-color":"rgb(" + r + ", " + g + ", " + b + ")",
    		"height":w+"px",
    		"width":w+"px",
    		"line-height":w+"px",
    		"border-radius":c+"%",
    		"text-align":"center"
    	};
    	$(this).css(css);
    }
});