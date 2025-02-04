var carolinaHall = [35.911276,-79.05004];

//var marker = L.marker([carolinaHall]).bindPopup("<b>Carolina Hall</b>").addTo(map);
var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#7BAFD4",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.circleMarker(carolinaHall,geojsonMarkerOptions).addTo(map);

var longitudeWpt0 = waypoints.features[0].geometry.coordinates[0]
var latitudeWpt0 = waypoints.features[0].geometry.coordinates[1]
var marker = L.marker([latitudeWpt0, longitudeWpt0]).bindPopup("<b>My first waypoint</b>").addTo(map);
// L.geoJSON(waypoints).addTo(map);


var myCircles = L.geoJSON(waypoints, {
    pointToLayer: function (feature, latlng) {
        //console.log(feature)
        return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup(feature.properties.note );
    }
}).addTo(map);


var baseLayers = {
    "OpenStreetMap": OSM,
    "ESRI": Esri_WorldImagery
    };

    var overlayMaps = {
        "Circles": myCircles
    };
    var layerControl = L.control.layers(baseLayers,overlayMaps).addTo(map);
    


