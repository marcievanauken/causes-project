$(function() {

	$(".formButton").on("click", function() {
			console.log("there was a click");
		});

		function sayHi() {
			alert("Your message has been sent");
		}

	$(".formButton").on("click", sayHi);

});


