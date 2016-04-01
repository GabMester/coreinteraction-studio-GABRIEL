
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


	$(".square1").hover(function() {
		audio1.play();
		audio1Played = true;
	}, function() {
		audio1.play.stop();
	});

	$(".square2").hover(function() {
		audio2.play();
		audio2Played = true;
	}, function() {
		audio2.play.stop();
	});

	$(".square3").hover(function() {
		audio3.play();
		audio3Played = true;
	}, function() {
		audio3.play.stop();
	});

	var audio = $("#myFourthSoundClip")[0];

	$(".square4").hover(function() {
		audio4.play();
		audio4Played = true;
	}, function() {
		audio4.play.stop();
	});

	var audio = $("#myFifthSoundClip")[0];

	$(".square5").hover(function() {
		audio5.play();
		audio5Played = true;
	}, function() {
		audio5.play.stop();
	});


// function melodyCheck () {

// 	if (audio1Played == true && audio2Played == true && audio3Played == true && audio4Played == true && audio5Played == true) {
// 		 $(".title, .subTitle, .text, .info ").toggle(1000);
// 	}
// }

	$(".square5").hover(function(){
	$(".title, .subTitle, .text, .info ").toggle(1000);
	});


});



// turn all the dots to color once they;re all hovered


