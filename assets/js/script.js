const quoteContainer = document.getElementById('quote-wrapper');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// new quote
function newQuote() {
    // Picking a random quote from API
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // check if the author value is null and if it is, replace with unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = quote.author;
    }
    // check quote length to change styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

// tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

// event listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
newQuote();