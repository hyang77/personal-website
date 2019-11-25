//create a function and the properties of Map.
function myMap() {
	var myLatLng = {
		lat: 23.001722,
		lng: 120.160635
	};

	var mapProp = {
		center: myLatLng,
		zoom: 15,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var marker = new google.maps.Marker({
		position: myLatLng
	});

	var infowindow = new google.maps.InfoWindow({
		content: "In 1624, Dutch built the first fort in Anping, Taiwan, called Fort Zeelandia, now known as Anping Old Fort, where has been the administrative center of the Dutch regime, and the hub for trading. The building was originally constructed in square inner fortress and rectangle outer walls. In 1661, the fort was renamed as Anping to commemorate his home town when Guoxingye (Cheng Cheng-Kung) has driven the Dutch out of Taiwan. Therefore, Fort Zeelandia was also known as King's Fort or Taiwan Fort, nicknamed Anping Old Fort."
	});

	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});

	marker.setMap(map);

}

window.addEventListener('onload',myMap);      