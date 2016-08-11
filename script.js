$(document).ready(function() {

 $.ajax ({
   url :"http://quotes.stormconsultancy.co.uk/quotes/random.json?callback=foo",
   type: "GET",
   dataType : "jsonp",
   success : function(getQuote) {
     console.log(getQuote);
   },
 });
 });