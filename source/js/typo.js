(function() {
	$(".post-box").click(function(){
		window.location=$(this).find("a").attr("href");
		return false;
	});
})();

$(document).ready(function() {
	var searchStyle = $("style#search-style");

	if (searchStyle.length > 0) {
		$("input#q").on("focus", function() {
			$(this).trigger("keyup");
		});
		$("input#q").on("blur", function() {
			$("#search_listbox").fadeOut();
		});
		$("input#q").on("keyup", function(e) {
			switch (e.keyCode) {
				case 27: // ⎋
					e.preventDefault();
					$("#search_listbox").fadeOut();
					break;
				default:
					if (this.value === "") {
						$("#search_listbox").fadeOut(function() {
							searchStyle.html("");
						});
					} else {
						var searchString = "#search_listbox li:not([data-index*=\"" + (this.value.toLowerCase().replace(/\\/g, "")) + "\"])";
						if ($(searchString).length < $("#search_listbox li").length) {
							searchStyle.html(searchString + " { display: none !important; }");
							$("#search_listbox").fadeIn();
						} else {
							$("#search_listbox").fadeOut(function() {
								searchStyle.html("");
							});
						}
					}
			}
		});
	}

	// Load maps with Mapbox.js
	if (window.L.mapbox) {
		$('.map').each(function(index, el) {
			var map = L.mapbox.map(this, $(this).data('map'));
			var featureLayer;
			if ($(this).data('geojson')) {
				featureLayer = L.mapbox.featureLayer($(this).data('geojson'));
			} else {
				featureLayer = L.mapbox.featureLayer();
			}
			// Load a URL specified by the `data-src` attribute.
			if ($(this).data('src')) {
				featureLayer.loadURL($(this).data('src'));
			}
			featureLayer.addTo(map);
			// If a Mapbox ID was passed in, load markers from it:
			if ($(this).data('map')) {
				featureLayer.loadID($(this).data('map'));
			}
			// Load GeoJSON from the `data-geojson` attribute.
			try {
				map.fitBounds(featureLayer.getBounds());
			} catch (e) {
			}
			// Load GeoJSON from GitHub with the `data-github` attribute.
			if ($(this).data('github')) {
				$.ajax({
					headers: {
						'Accept': 'application/vnd.github.v3.raw'
					},
					dataType: 'json',
					url: $(this).data('github'),
					success: function(geojson) {
						var fl = L.mapbox.featureLayer(geojson).addTo(map);
						try {
							map.fitBounds(fl.getBounds());
						} catch (e) {
						}
					}
				});
			}
			// Load OSM data from the `data-osm` attribute.
			if ($(this).data('osm')) {
				$.getScript('https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-osm/v0.1.0/leaflet-osm.js', function() {
					$.ajax({
						url: $(this).data('osm'),
					dataType: "xml",
					success: function(xml) {
						new L.OSM.DataLayer(xml).addTo(map);
					}
					});
				});
			}
		});
	}
});
