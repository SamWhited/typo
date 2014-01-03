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
});
