var myMap;

function initMap() {
	
	// set options for map 
	var mapOptions = {
		center: {
			lat: 52.2388, 
			lng: 5.8323
		},
		zoom: 17,
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
