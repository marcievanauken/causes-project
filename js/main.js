$(function() {

	$(".formButton").on("click", function() {
			console.log("there was a click");
		});

		function sayHi() {
			alert("Your message has been sent");
		}

	$(".formButton").on("click", sayHi);

});

$(document).ready(function(){
    // $("#hide").click(function(){
    //     $("#gallery").hide();
    // });
    $("#show").click(function(){
        $("#gallery").show();
    });
});

$(function(){

	// $('img.thumbnail').hover(function() { 
	//     	$('.thumbnail', this).stop().animate({"opacity": 0}); 
	// 	},function() { 
	//     	$('.thumbnail', this).stop().animate({"opacity": 1}); 
	// });

	$(".thumbnail").hover(function(){
   		$(this).stop().animate({"opacity": "1"}); 
	}, function(){
   		$(this).stop().animate({"opacity": "0.5"});
	});

	$("img.thumbnail").on("click", function() {
		var imgTag = "<img class='focused' src='" + this.src + "'>";
		$("#lightbox").show();
		$("body").append(imgTag);
		$("body").addClass("noscroll");
	});
	$("#lightbox").on("click", function() {
		$(this).hide();
		$(".focused").remove();
		$("body").removeClass("noscroll");
	});
});
