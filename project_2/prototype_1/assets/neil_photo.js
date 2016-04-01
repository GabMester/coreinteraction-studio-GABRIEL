
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
	var text = $("text");
	var back = $(".background");
	var front = $(".colorBackground");


	$(".square1").mouseenter(function() {
		audio1.play();
		audio1Played = true;
	
	});

		$(".square1").mouseleave(function() {
		audio1.pause();
	});

$(".square1").hover(function(){front.hide()}, function(){front.show()});


	$(".square2").mouseenter(function() {
		audio2.play();
		audio2Played = true;
	
	});

		$(".square2").mouseleave(function() {
		audio2.pause();
	});


$(".square2").hover(function(){front.hide()}, function(){front.show()});


			$(".square3").mouseenter(function() {
		audio3.play();
		audio3Played = true;
	
	});

		$(".square3").mouseleave(function() {
		audio3.pause();
	});

$(".square3").hover(function(){front.hide()}, function(){front.show()});

			$(".square4").mouseenter(function() {
		audio4.play();
		audio4Played = true;
	
	});

		$(".square4").mouseleave(function() {
		audio4.pause();
	});

$(".square4").hover(function(){front.hide()}, function(){front.show()});



			$(".square5").mouseenter(function() {
		audio5.play();
		audio5Played = true;
	
	});

		$(".square5").mouseleave(function() {
		audio5.pause();
	});



	$(".square5").hover(function(){front.hide()}, function(){front.show()});


// function melodyCheck () {

// 	if (audio1Played == true && audio2Played == true && audio3Played == true && audio4Played == true && audio5Played == true) {
// 		 $(".title, .subTitle, .text, .info ").toggle(1000);
// 	}
// }

// 	$(".square5").mouseenter(function(){
// 	$(".title, .subTitle, .text, .info ").toggle(1000);
// 	});


});




