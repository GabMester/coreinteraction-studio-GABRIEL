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
	var audio6 = $("#soundclip-6")[0];
	var audio6Played = false;
	var audio7 = $("#soundclip-7")[0];
	var audio7Played = false;
	var audio8 = $("#soundclip-8")[0];
	var audio8Played = false;
	var audio9 = $("#soundclip-9")[0];
	var audio9Played = false;
	var audio10 = $("#soundclip-10")[0];
	var audio10Played = false;
	var counter = 0; 

// var images = ['long.jpg','2.jpg' ,'3.jpg'];

// $('#background').css({'background-image': 'url(assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});

	$("#background").click(function() {
	counter += 1;


		if (counter == 0){
		$("#text").show();
		audio1.play();
			};

		if (counter == 1){
		$(".square1").show();
		audio2.play();
			};	

		if (counter == 2){
		$(".square2").show();
		audio3.play();
			};

		if (counter == 3){
		$(".square3").show();
		audio4.play();
			};

		if (counter == 4){
		$(".square4").show();
		audio5.play();
			};

		if (counter == 5){
		$(".square5").show();	
		audio6.play();
			};

		if (counter == 6){
		$(".square6").show();
		audio7.play();
			}


		if (counter == 7){
		$(".square7").show();
		audio8.play();
			}

		if (counter == 8){
		$(".square8").show();
		audio9.play();
			}


		if (counter == 9){
		$(".square9").show();
		audio10.play();
			}

		if (counter == 10){
		$(".square10").show();
		audio1.play();
		audio2.play();
		audio3.play();
		audio4.play();
		audio5.play();
		audio6.play();
		audio7.play();
		audio8.play();
		audio9.play();
		audio10.play();
			}

		if (counter == 20){
		window.location.reload();
			}

		// if (counter == 9){
		// $("#frame").show();
		// audio5.play();
		// 	}

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
		var count = 0;
		
    	$('img').click(function() {
		canvasClicked = true;
		        document.getElementById("text").setAttribute("style", "color: rgb("+parseInt(pixelData[0])+","+parseInt(pixelData[1])+","+parseInt(pixelData[2])+");"); 

		        	document.getElementById("key").setAttribute("style", "background-color: rgb("+parseInt(pixelData[0])+","+parseInt(pixelData[1])+","+parseInt(pixelData[2])+");");
		      
		 });


    	// POUR LA LEGENDE QUI SYNCHRO COULEUR
    	//  var pixelCol = "rgb("+parseInt(pixelData[0])+","+parseInt(pixelData[1])+","+parseInt(pixelData[2])+");";
		   //       
		    

	     
	});  

});



 




