$(document).ready(function() {

	$("#generateQuote, #shareTwitter").click(function() {
		$(this).transition('jiggle');
	});

	/*$("#generateQuote").click(function() {
		$(".presentation").remove();
		$(".quote").html(getQuote);
		$("p").removeClass("hidden");
	});*/

	$("#generateQuote").click(function() {

		$.ajax({
			url: "http://quotes.stormconsultancy.co.uk/quotes/random.json?callback=foo",
			type: "GET",
			dataType: "jsonp",
			success: function(getQuote) {

				$(".presentation").remove();
				$(".quote-content").html(JSON.stringify(getQuote));
				$("p").removeClass("hidden");


			},
		});
	});
});