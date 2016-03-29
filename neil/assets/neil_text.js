
$(function() {

	var audio1 = $("#soundclip-1")[0];
	var audio1Played = false;
	var audio2 = $("#soundclip-2")[0];
	var audio2Played = false;
	var audio3 = $("#soundclip-3")[0];
	var audio3Played = false;
	var audio4 = $("#soundclip-4")[0];
	var audio4Played = false;
	var audio5 = $("#soundclip-5")[0];
	var audio5Played = false;



	$(".square1").click(function() {
		audio1.play();
		audio1Played = true;
	}, function() {
		audio1.play();
	});

	if (audio1Played == true) {
		getElementbyClass.square1.display
	}


	$(".square2").click(function() {
		audio2.play();
		audio2Played = true;
	}, function() {
		audio2.play();
	});

	$(".square3").click(function() {
		audio3.play();
		audio3Played = true;
	}, function() {
		audio3.play();
	});

	var audio = $("#myFourthSoundClip")[0];

	$(".square4").click(function() {
		audio4.play();
		audio4Played = true;
	}, function() {
		audio4.play();
	});

	var audio = $("#myFifthSoundClip")[0];

	$(".square5").click(function() {
		audio5.play();
		audio5Played = true;
	}, function() {
		audio5.play.stop();
	});

	$(".square1").click(function(){
	$(".square2").show();
	});

	$(".square2").click(function(){
	$(".square3").show();
	});

	$(".square3").click(function(){
	$(".square4").show();
	});

	$(".square4").click(function(){
	$(".square4").hide();
	$(".square3").hide();
	$(".square2").hide();
	});
});


if ($('square4').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('square4').addClass('show');
            } else {
                $('square4').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('square4').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}




