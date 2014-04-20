var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
	parallax();
});

$(".circle").hover(function(){
	$(this).addClass("animated pulse");
},function(){
	$(this).removeClass("animated pulse");
});