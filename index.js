function initMap() {
    const punto1 = { lat: -3.6795367, lng: 40.4379543 };
    const punto2 = { lat: -0.6939063, lng: 37.6333071 };
    const punto3 = { lat: -4.8649999, lng: 36.5008508 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: punto1,
    });
    
    const marker1 = new google.maps.Marker({
        position: punto1,
        map: map,
    });

    const marker2 = new google.maps.Marker({
        position: punto2,
        map: map,
    });

    const marker3 = new google.maps.Marker({
        position: punto3,
        map: map,
    });
}

window.initMap = initMap;
