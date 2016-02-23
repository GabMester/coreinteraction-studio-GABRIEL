
function getRandomInt (min, max){
	var value; //declare the variable we will return

	value = Math.random()*(max+min)-min;
	value = parseInt(value);
	console.log('value',value);
	return value ;
}

$(document).ready(function() {

$('.randomEmoji').each(function(){
    $(this).css({'marginTop' : getRandomInt(-100,600), 'marginLeft' : getRandomInt(-100,600)});
}); 
});