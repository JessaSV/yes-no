var quotes = [
'Yes',
'No',
'Maybe']

function newQuote () {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
