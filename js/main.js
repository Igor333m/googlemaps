let map;

function initMap() {
	// Constructor creates new map - only center and zoom are required
	map = new google.maps.Map(document.getElementById('map'), {
		center:{lat: 34.1981063, lng: -118.4684912},
		zoom: 13
	});

	// North Hollywood Station Marker
	let noho = {lat: 34.1689208,lng: -118.3767172};
	let nohoMarker = new google.maps.Marker({
		position: noho,
		map: map,
		title: 'Metro RedLine North Hollywood Station'
	});
}

console.log("Hi");