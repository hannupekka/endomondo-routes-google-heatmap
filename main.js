var points = [];
var map, pointArray, heatmap;
$(document).ready(function() {
    $.getJSON("data.php", function(data) {
        $.each(data, function(key, val) {
            points.push(new google.maps.LatLng(val.lat, val.lng));
        });

        var options = {
            zoom: 11,
            center: new google.maps.LatLng(61.493543,23.77951),
            mapTypeId: google.maps.MapTypeId.ROAD,
            disableDefaultUI: true
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), options);

        var styles = [{
            stylers: [
                {hue:"#000000"},
                {saturation:-100},
                {lightness:-30}
            ]
        }];

        var styledMap = new google.maps.StyledMapType(styles, {name:"Custom map"});

        map.mapTypes.set("map_style", styledMap);
        map.setMapTypeId("map_style");

        var pointArray = new google.maps.MVCArray(points);
        heatmap = new google.maps.visualization.HeatmapLayer({data: pointArray});
        heatmap.setMap(map);
        heatmap.set("opacity",1);
        heatmap.set("radius",10);
    });
});