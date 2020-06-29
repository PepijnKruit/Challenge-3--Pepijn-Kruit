/*-----WEATHER-----*/

var input = document.querySelector('.input_text');
var main = document.querySelector('#city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8b01f01dfce72461f1cc8b60af740ab1')
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




/*-----MAP-----*/

function getMap(){
    var map = new Microsoft.Maps.Map('#myMap');
}

window.onload = function(){
      getMap();
}