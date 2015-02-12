/*	JS Document Written by Front-End Developer's Team of Trigma Solutions Pvt. Ltd. (http://www.trigma.com)
*	In this file you will find all the scripts and functions used in site with proper comments.
*	This file is copyright to Trigma Solutions and no reproduction of this file is allowed without the prior written permission from Trigma Solutions
*	Version of file : V1.0
*/

$(function() {
	$('input, textarea').placeholder();				//Placeholder for IE
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }
});
$(".totop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });