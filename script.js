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

					var twtShrQuote = $("p.quote-content").text();
					var twtShrAuthor = $("p.quote-author").text();
					var twtUrl = twtShrQuote + " ~ " + twtShrAuthor;
					var encodedtwtUrl = encodeURIComponent(twtUrl);

					var twtShare = document.getElementById("shareTwitter");

					twtShare.onclick = function twtPopup() {
						var twtPop = window.open("https://twitter.com/intent/tweet?text=" + encodedtwtUrl, "Twitter-share", "height=350, width=600");
						if (twtPop.focus) {
							twtPop.focus();
						}
						return false;
					}

					$("p").removeClass("hidden");

				} else {
					$.ajax(this);
				}

			}
		});
	});

});