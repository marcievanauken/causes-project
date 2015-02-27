$(function() {

	$(".formButton").on("click", function() {
			console.log("there was a click");
		});

		function sayHi() {
			alert("Your message has been sent");
		}

	$(".formButton").on("click", sayHi);

});

$(function(){
	$("img.thumbnail").on("click", function() {
		var imgTag = "<img class='focused' src='" + this.src + "'>";
		$("#lightbox").show();
		$("body").append(imgTag);
		$("html").addClass("noscroll");
	});
	$("#lightbox").on("click", function() {
		$(this).hide();
		$(".focused").remove();
		$("body").removeClass("noscroll");
	});
});