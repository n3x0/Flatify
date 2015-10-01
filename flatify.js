function fade (color, alpha, steps, step){
	return Math.round( (color*((1-((1-alpha)/steps*step)))) );
}

function flatify(target, r, g, b, f, w, s, a){
	var text_shadow = '';// = 'text-shadow: ';
	var shadows = s;
	var alpha = a;
	var r = r;
	var f = f;
	var g = g;
	var b = b;
	var w = w;
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
		"text-align":"center"
	};
	//alert(text_shadow);
	//alert(JSON.stringify(css));

	$(target).css(css);
}

function flatifyColor(target, r, g, b){
	flatify(target, r, g, b, 20, 30, 5, 0.9);
}
function flatifyColorShadow(target, color, shadow){
	flatify(target, settings.r, settings.g, settings.b, (settings.w-10), settings.w, settings.s, settings.a);
}

function flatifySettings(target, settings){
	flatify(target, settings.r, settings.g, settings.b, (settings.w-10), settings.w, settings.s, settings.a);
}
