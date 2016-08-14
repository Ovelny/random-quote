$(document).ready(function() {

	$("#generateQuote, #shareTwitter").click(function() {
		$(this).transition('jiggle');
	});

	$("#generateQuote").click(function() {

		$.ajax({
			url: "http://quotes.stormconsultancy.co.uk/quotes/random.json?callback=foo",
			type: "GET",
			dataType: "jsonp",
			success: function(getQuote) {

				$(".presentation").remove();
				$(".quote-content").html(JSON.stringify(getQuote.quote)).transition("fade left");
				$(".quote-author").html(JSON.stringify(getQuote.author).replace(/\"/g,"")).transition("fade left");

				
				$("p").removeClass("hidden");


			},
		});
	});

	
});