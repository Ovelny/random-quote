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

				if (getQuote.quote.length + getQuote.author.length <= 140) {

					$(".presentation").remove();

					$(".quote-content").html(JSON.stringify(getQuote.quote)).fadeIn("slow");
					$(".quote-author").html(JSON.stringify(getQuote.author).replace(/\"/g, "")).fadeIn("slow");

					var twtShrQuote = $("p.quote-content").text().replace(/;/g,"%3B").replace(/:/g,"%3A").replace(/\+/g, "%2B"); //TODO Replace URL encoded properly
					var twtShrAuthor = $("p.quote-author").text();

					$(".twitter-share-button").prop("href", "https://twitter.com/intent/tweet?text=" + twtShrQuote + " ~ " + twtShrAuthor);

					$("p").removeClass("hidden");

				} else {
					$.ajax(this);
				}

			}
		});
	});


});