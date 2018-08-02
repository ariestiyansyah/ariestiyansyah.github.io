/*google map*/

(function ($) {
    "use strict";
    function initialize() {
        var mySin = new google.maps.LatLng(34.0313519, -118.2154304);
        var mapOptionSin = {
            zoom: 16,
            center: mySin,
            styles: [
                       { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] },
                       { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] },
                       { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "on" }] },
                       { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "saturation": "-100" }, { "lightness": "57" }] },
                       { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [{ "lightness": "1" }] },
                       { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] },
                       { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] },
                       { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] },
                       { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
                       { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] },
                       { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "on" }] },
                       {
                           "featureType": "transit.station.bus", "elementType": "labels.text.fill", "stylers": [{ "saturation": "0" },
                           { "lightness": "0" },
                           { "gamma": "1.00" },
                           { "weight": "1" },
                           { "color": "#7b7b7b" }]
                       },
                       { "featureType": "transit.station.bus", "elementType": "labels.icon", "stylers": [{ "saturation": "-100" }, { "weight": "1" }, { "lightness": "0" }] },
                       { "featureType": "transit.station.rail", "elementType": "all", "stylers": [{ "visibility": "on" }] },
                       { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [{ "gamma": "1" }, { "lightness": "40" }] },
                       { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [{ "saturation": "-100" }, { "lightness": "30" }] },
                       { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#d2d2d2" }, { "visibility": "on" }] }
            ]
        };



        var image = "images/map_arrow.png";
        var contentString = "";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var mapSin = new google.maps.Map(document.getElementById('map'), mapOptionSin);

        var marker = new google.maps.Marker({
            position: mySin,
            map: mapSin,
            title: 'Coconut-game',
            icon: image
        });


    }
    google.maps.event.addDomListener(window, 'load', initialize);
})(jQuery);