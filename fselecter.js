/*
 * A firebug like DOM selecter
 *
 * Dual licensed under the MIT and GPL licenses.
 * Copyright (c) 2012 Anubis
 * @name     fselecter
 * @author   Anubis (Kong Yuan)
 *
 */

(function($) {
	$.fn.fselecter = function(options) {
		if(!options) {
			options = {};
		}
		var settings = {};
		$.extend(settings, $.fn.fselecter.defaults, options);
		return $.fselecter(this, settings);
	};

	$.fselecter = function(elm, settings) {
		var e = $(elm)[0];
		return e.fselecter || (e.fselecter = new jQuery._fselecter(e, settings));
	};

	$._fselecter = function( elm, settings ) {
		var paddingBlock = this.getHighLightBlock( elm.width() , elm.height() , settings['padding_color'] 
								, elm.css('padding-top')
								, elm.css('padding-right')
								, elm.css('padding-bottom')
								, elm.css('padding-left')
								);
		var marginBlock = this.getHighLightBlock( elm.width() , elm.height() , settings['margin_color'] 
								, elm.css('margin-top')
								, elm.css('margin-right')
								, elm.css('margin-bottom')
								, elm.css('margin-left')
								);
								
								
		//TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO 
	};
	
	// default options
	$.fn.fselecter.defaults = {
		padding_display : true,
		// border_display : true,
		margin_display : true ,
		padding_color : "green",
		margin_color : "yellow",
	};
	
	
	//提供6个代表宽度的数值和一个颜色,生成显示用矩形框体
	function getHighLightBlock( width , height , color , top , right , bottom , left ){
		var highLightBlock = $(
			  "<div class='fselecter_highlight_block' style='position:absolut;'>"
			+		"<div class='fselecter_highlight_lt fselecter_highlight' style='position:absolut;'></div>"
			+		"<div class='fselecter_highlight_t fselecter_highlight' style='position:absolut;'></div>"
			+		"<div class='fselecter_highlight_rt fselecter_highlight' style='position:absolut;'></div>"
			+		"<div class='fselecter_highlight_l fselecter_highlight' style='position:absolut;'></div>"
			+		"<div class='fselecter_highlight_r fselecter_highlight' style='position:absolut;'></div>"
			+		"<div class='fselecter_highlight_lb fselecter_highlight' style='position:absolut;'></div>"
			+		"<div class='fselecter_highlight_b fselecter_highlight' style='position:absolut;'></div>"
			+		"<div class='fselecter_highlight_rb fselecter_highlight' style='position:absolut;'></div>"
			+ "</div>"
			);
		
		if(arguments.length == 4){
			right = bottom = left = top;
		}else if(arguments.length == 5){
			bottom = top;
			left = right;
		}else if(arguments.length == 7){
			//do nothing
		}
		
		/* 防御 */
		if( !width || !height ){
			return highLightBlock;
		}
		top = top ? top:0;
		right = right ? right:0;
		bottom = bottom ? bottom:0;
		left = left ? left:0;
		/* 防御end */
		
		var sPrefix = 'fselecter_highlight_';
		highLightBlock.width( left+right+width );
		highLightBlock.height( top+height+bottom );
		
		highLightBlock.find(sPrefix+'lt').css({backgroundColor:color,top:0,left:0,width:left,height:top});
		highLightBlock.find(sPrefix+'t').css({backgroundColor:color,top:0,left:left,width:width,height:top});
		highLightBlock.find(sPrefix+'rt').css({backgroundColor:color,top:0,left:left+width,width:left,height:top});
		
		highLightBlock.find(sPrefix+'l').css({backgroundColor:color,top:top,left:0,width:left,height:height});
		highLightBlock.find(sPrefix+'r').css({backgroundColor:color,top:top,left:left+width,width:right,height:height});
		
		highLightBlock.find(sPrefix+'lb').css({backgroundColor:color,top:top+height,left:0,width:left,height:bottom});
		highLightBlock.find(sPrefix+'b').css({backgroundColor:color,top:top+height,left:left,width:right,height:bottom});
		highLightBlock.find(sPrefix+'rb').css({backgroundColor:color,top:top+height,left:left+width,width:width,height:bottom});
		
		return highLightBlock;
	}
	
	function log() {
		if( typeof console.log == 'function') {
			var sArgs = new Array();
			for(var n=0;n < arguments.length;n++){
				sArgs.push("arguments["+n+"]");
			}
			sArgs = sArgs.join(',');
			
			eval("console.log("+sArgs+")");
		}
	}

})(jQuery);
