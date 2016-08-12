$(document).ready(function() {

	$("#generateQuote, #shareTwitter").click(function() {
		$(this).transition('jiggle');
	});

	$.ajax({
		url: "http://quotes.stormconsultancy.co.uk/quotes/random.json?callback=foo",
		type: "GET",
		dataType: "jsonp",
		success: function(getQuote) {
			console.log(getQuote);
		},
	});
});