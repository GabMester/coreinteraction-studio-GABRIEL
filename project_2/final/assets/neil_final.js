// var images = ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/3.jpg', 'assets/images/4.jpg', 'assets/images/5.jpg'];
//  $('#background').css({'#backgroundRandom': 'url('images[Math.floor(Math.random() * images.length)] + ')'});


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

	// $("#background").click(function() {
	// 	audio4.play();
	// 	audio4Played = true;
	// }, function() {
	// 	audio1.play();
	// });

	// if (audio4Played == true) {
	// 	getElementbyId.text.display
	// }

	// $("#background").click(function(){
	// $("#text").show();
	// });



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


	$(function() {
	    
	    $('img').mousemove(function(e) {
	        var canvas;
	        if(!this.canvas) {
	            canvas = $('<canvas />')[0];
	            canvas.width = this.width;
	            canvas.height = this.height;
	            canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
	        }
	        else {
	        	canvas = document.getElementById("canvas");
	        }

        var ctx = canvas.getContext('2d');
        var pixelData = ctx.getImageData(event.pageX, event.pageY, 1, 1).data;
		var canvasClicked = false; 



    	$('img').mousedown(function() {
		canvasClicked = true;
		console.log("good"); 
   
		        var pixelCol = "rgb("+parseInt(pixelData[0])+","+parseInt(pixelData[1])+","+parseInt(pixelData[2])+");";
		        document.getElementById("text").setAttribute("style", "color: rgb("+parseInt(pixelData[0])+","+parseInt(pixelData[1])+","+parseInt(pixelData[2])+");"); 
		        console.log("goooood");
		 });

    	$('img').mouseup(function() {
		console.log("bad"); 

		        document.getElementById("text").setAttribute("style", "color: white;"); 
		        console.log("baaaaad");
		 });

	     
	});  

});

// var frequency = 4000;                      // 440 Hz = "A" note
// var samples_length = 44100;               // Plays for 1 second (44.1 KHz)
// for (var i=0; i < samples_length ; i++) { // fills array with samples
//   var t = i/samples_length;               // time from 0 to 1
//   samples[i] = sin( frequency * 2*PI*t ); // wave equation (between -1,+1)
//   samples[i] *= (1-t);                    // "fade" effect (from 1 to 0)
// }



  

// MOVING DIV >>
// $(document).ready(function(){
//                 $(".circle").animate({left: '10%',top: '40%'});
//             });





