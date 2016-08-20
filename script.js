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

				/*$(".quote-content").animate({
					'opacity': 0
				}, 350);*/

				/*$(".quote-author").animate({
					'opacity': 0
				}, 350);*/

				$(".quote-content").html(JSON.stringify(getQuote.quote)).animate({
					'opacity': 100
				}, 350);

				$(".quote-author").html(JSON.stringify(getQuote.author).replace(/\"/g, "")).animate({
					'opacity': 100
				}, 350);

				var twtShrQuote = $("p.quote-content").text();
				var twtShrAuthor = $("p.quote-author").text();

				$(".twitter-share-button").prop("href", "https://twitter.com/intent/tweet?text=" + twtShrQuote + " ~ " + twtShrAuthor);

				$("p").removeClass("hidden");

			},
		});
	});


});