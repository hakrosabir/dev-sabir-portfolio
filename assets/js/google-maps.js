function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 24.860966, lng: 66.990501};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 8,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Karachi, Pakistan' // Title Location
    });
}

