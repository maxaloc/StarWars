$(document).ready(function () {
    $('#fullpage').fullpage({
        css3: true,
        navigation: true,
        navigationPosition: 'left',
        keyboardScrolling: true,
        controlArrows: true
    });
});

$(window).load(function(){
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
   $('.overlay').fadeOut();
});

	var $videos = $("video");

    $(".episode-1").click(function(){
		$videos.each(function(){
			this.pause();
			this.currentTime = 0;
		});
		$(".E2, .E3, .E4, .E5, .E6").hide();
        $(".E1").fadeToggle(150);
});

    $(".episode-2").click(function(){
		$videos.each(function(){
			this.pause();
			this.currentTime = 0;
		});
		$(".E1, .E3, .E4, .E5, .E6").hide(),
        $(".E2").fadeToggle(150);
});

    $(".episode-3").click(function(){
		$videos.each(function(){
			this.pause();
			this.currentTime = 0;
		});
		$(".E2, .E1, .E4, .E5, .E6").hide(),
        $(".E3").fadeToggle(150);
});

    $(".episode-4").click(function(){
		$videos.each(function(){
			this.pause();
			this.currentTime = 0;
		});
		$(".E2, .E3, .E1, .E5, .E6").hide(),
        $(".E4").fadeToggle(150);
});

    $(".episode-5").click(function(){
		$videos.each(function(){
			this.pause();
			this.currentTime = 0;
		});
		$(".E2, .E3, .E4, .E1, .E6").hide(),
        $(".E5").fadeToggle(150); 
});

    $(".episode-6").click(function(){
		$videos.each(function(){
			this.pause();
			this.currentTime = 0;
		});
		$(".E2, .E3, .E4, .E5, .E1").hide(),
        $(".E6").fadeToggle(150);
});

$('.badguys, span').on('mouseenter', function () {
	$('.bg-bad').css( "opacity", 1 );
});
$('.badguys, span').on('mouseleave', function () {
    $('.bg-bad').css( "opacity", 0 );
});

$('.goodguys, span').on('mouseenter', function () {
	$('.bg-good').css( "opacity", 1 );
});
$('.goodguys, span').on('mouseleave', function () {
    $('.bg-good').css( "opacity", 0 );
});