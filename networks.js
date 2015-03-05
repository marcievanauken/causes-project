


$(function(){
$(".header1,.header2,.header3,.header4,.header5,.header6").hide()
})

$(function(){
$("#one").on("click", function(){
$(".header1").toggle();
	})
})


$(function(){
$("#two").on("click", function (){
$(".header2").toggle();
	})
})

$(function(){
$("#three").on("click", function (){
$(".header3").toggle();
	})
})

$(function(){
$("#four").on("click", function (){
$(".header4").toggle();
	})
})

$(function(){
$("#five").on("click", function (){
$(".header5").toggle();
	})
})

$(function(){
$("#six").on("click", function (){
$(".header6").toggle();
	})
})

var images = [
  "homepage-image.jpg",
  "Globe.jpg",
  "underWater.jpg"
];

var index = 0;

$(document).ready(function(){
  $("#image").click("click", function(){
  	index += 1;
    $("#theimage").attr("src", "images/" + images[index % images.length]);
  });
});

