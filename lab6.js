function populateMap() {
    var map = L.map('map').setView([33, -95], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let location1 = [getRandomInRange(30, 35, 3), getRandomInRange(-90, -100, 3)];
    document.getElementById('marker1').innerHTML+= `Latitude: ${location1[0]}, Longtitude: ${location1[1]}`;
    let marker1 = L.marker([location1[0],location1[1]]).addTo(map);
    marker1;
    local1 = getLocality(location1[0], location1[1], 'locality1');

    let location2 = [getRandomInRange(30, 35, 3), getRandomInRange(-90, -100, 3)];
    document.getElementById('marker2').innerHTML+= `Latitude: ${location2[0]}, Longtitude: ${location2[1]}`;
    let marker2 = L.marker([location2[0],location2[1]]).addTo(map);
    marker2;
    local2 = getLocality(location2[0], location2[1], 'locality2');

    let location3 = [getRandomInRange(30, 35, 3), getRandomInRange(-90, -100, 3)];
    document.getElementById('marker3').innerHTML+= `Latitude: ${location3[0]}, Longtitude: ${location3[1]}`;
    let marker3 = L.marker([location3[0],location3[1]]).addTo(map);
    marker3;
    local3 = getLocality(location3[0], location3[1], 'locality3');
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function getLocality(latitude, longitude, idName) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
    .then((res) => res.json())
    .then((res) => {
            let local = res.locality;
            document.getElementById(`${idName}`).innerHTML = `Locality: ${local}`;
    });
}
window.onload = populateMap;