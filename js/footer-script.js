// JavaScript Document for Footer

$(document).ready (function(){
	//	set footer position
	set_footer();
});

$(window).resize(function(){
	set_footer();
});

function set_footer(){
	var window_h = $(window).height();
	var container_h = $('#main_container').height();
	var footer_h = $('footer').height();

	if((window_h-footer_h) < container_h){
	//console.log('container_h');
		$('footer').removeAttr('style');
	}
	else{
	//console.log('window_h');
		$('footer').css({position:'fixed', bottom:'0', width:100+'%'});		
	}
}