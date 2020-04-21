var myMap;

function initMap() {
	
	// set options for map 
	var mapOptions = {
		center: {
			lat: 52.141751, 
			lng: 5.351102
		},
		zoom: 17,
		mapTypeId: 'hybrid'
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
