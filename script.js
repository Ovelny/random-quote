document.addEventListener('DOMContentLoaded', function() {

	var newQuote = new XMLHttpRequest();
	newQuote.open('GET', 'http://api.forismatic.com/api/1.0/getQuote&key=457653&format=jsonp&lang=en', true);

	newQuote.onload = function() {
		var responseText = newQuote.responseText;
		console.log(responseText);
	};


	newQuote.onerror = function() {
		console.log('Error');
	};

	newQuote.send();

});