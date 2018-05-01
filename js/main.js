

function initMap() {
	let map;
	// Constructor creates new map - only center and zoom are required
	map = new google.maps.Map(document.getElementById('map'), {
		center:{lat: 34.1981063, lng: -118.4684912},
		zoom: 13
	});
}

console.log("Hi");