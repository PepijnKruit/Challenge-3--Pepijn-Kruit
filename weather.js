/*$(document).ready(function() {
	$("#getWeatherForcast").click(function(){
		var city =$("#city").val();
		var key = 'fc2c8c3e146a242bf7296f5373abcb8e';

		$.ajax({
			dataType 'json',
			type: 'GET',
			data: {q:city, appid: key, units: 'metric'},

			succes: function() {
				var wf '';
				$.each(data.weather, function(index, val) {
					wf += '<p>' + data.name + data.main.temp + &'deg;C ' + ' | ' + val.main + ", " + val.description
				});
				$("showWeatherForecast").html(wf);
			}

		});
	});
});*/

var input = document.querySelector('.input_text');
var main = document.querySelector('#city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue + ' ºF';
  input.value = "";

})

.catch(err => alert("This city doesn't exist in our database."));
})
