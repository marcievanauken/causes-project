
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}


$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});


$(document).ready(function() {
  loadWeather('New York','', "#currentWeather", 0); 
  loadWeather('New York','', '#pastWeather', -10); 
});

function loadWeather(location, woeid, el, adjustment) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      var temp = parseInt(weather.temp) + adjustment;
      html = '<h2><i class="icon-'+weather.code+'"></i> '+temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      
      $(el).append(html);
    },
    error: function(error) {
      $(el).html('<p>'+error+'</p>');
    }
  });
}


if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}


$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});


