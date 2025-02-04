var map = L.map('map').setView([36.1476, -80.7142], 8);

// Define tile layers
var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

// Define marker style
var geojsonMarkerOptions = {
    radius: 100,
    fillColor: "#FFC0CB",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var gasLayer = L.geoJSON(gas_plants, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup(
            "You have found " + feature.properties.cerclis_n + "."
        );
    }
}).addTo(map);

var baseLayers = {
    "OpenStreetMap": OSM,
    "ESRI Topographic Map": Esri_WorldTopoMap
};

var overlayMaps = {
    "Manufactured Gas Sites": gasLayer
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
