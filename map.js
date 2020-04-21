var myMap;

function initMap() {
	// set options for map 
	var mapOptions = {
		center: {
			lat: 52.067514882683064, 
			lng: 4.3238686164587
		},
		zoom: 17,
		mapTypeId: 'hybrid'
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}