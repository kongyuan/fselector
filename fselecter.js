/*
 * A firebug like DOM selecter
 *
 * Dual licensed under the MIT and GPL licenses.
 * Copyright (c) 2012 Anubis
 * @name     fselecter
 * @author   Anubis (Kong Yuan)
 *
 */
 
(function($){
$.fn.fselecter = function(options) {
	if(!options){
		options = {};
	}
	var settings = {};
	$.extend(settings, $.fn.fselecter.defaults, options );
	return $.fselecter(this, settings);
};

$.fselecter = function(elm,settings){
	var e = $(elm)[0];
	return e.fselecter || (e.fselecter = new jQuery._fselecter(e, settings));
};

$._fselecter = function(elm, settings){
	
};

function log(any){
	if(typeof console.log == 'function'){
		console.log(any);
	}
}
	
$.fn.fselecter.defaults = {
	padding_display : true,
	border_display : true,
	margin_display : true
};

})(jQuery);