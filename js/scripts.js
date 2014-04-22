var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('height', (jumboHeight-scrolled) + '100px');
}

$(window).scroll(function(e){
	parallax();
});

$(".circle").hover(function(){
	$(this).addClass("animated pulse");
},function(){
	$(this).removeClass("animated pulse");
});

window.onload = function() {
	$("#home").height($(window).height()- 110);
}


$("#down-button").on('click', function(e) {
	e.preventDefault();
	var hash = this.hash;
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top - 50
	}, 500, function(){
		window.location.hash = hash;
	});
});

$("#nav ul li a").on('click', function(e) {
	e.preventDefault();
	var hash = this.hash;
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top - 50
	}, 500, function(){
		window.location.hash = hash;
	});
});