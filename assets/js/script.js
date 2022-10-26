// new quote
function newQuote() {
    // Picking a random quote from API
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}
// on load
newQuote();