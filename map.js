var myMap;

function initMap() {
	
	// place and options for th emap
	var mapOptions = {
		center: {
			lat: 52.141751, 
			lng: 5.351102
		},
		zoom: 17,
		mapTypeId: 'hybrid'
	};

	// add the map to the page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
