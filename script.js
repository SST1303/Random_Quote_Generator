const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        text: "Dream it. Wish it. Do it.",
        author: "Unknown"
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        text: "That it will never come again is what makes life so sweet.",
        author: "Emily Dickinson"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Be kind, for everyone you meet is fighting a hard battle.",
        author: "Plato"
    },
    {
        text: "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
        author: "John Green"
    },
    {
        text: "You cannot find peace by avoiding life",
        author: "Virginia Woolf"
    }
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

let currentQuote = null; //variable to store current quote

//function to get a random quote
function getRandomQuote() {
    //get random index from quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

//function to display new quote with animation
function displayNewQuote() {
    //add fade out animation
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';

    //wait for fade out to complete, then update content
    setTimeout(() => {
        currentQuote = getRandomQuote(); //get new random quote

        //update the quote text & author
        quoteText.textContent = currentQuote.text;
        quoteAuthor.textContent = `-${currentQuote.author}`;

        //add  fade in animation
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 300);
}

//function to add loading animation to button
function addButtonLoading(){
    newQuoteBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    newQuoteBtn.disabled = true;
}

//function to remove loading animation from button
function removeButtonLoading() {
    newQuoteBtn.innerHTML = '<i class="fas fa-sync-alt"></i> New Quote';
    newQuoteBtn.disabled = false;
}

//event listener for new quote button
newQuoteBtn.addEventListener('click', () => {
    addButtonLoading(); // add loading state

    //display new quote after short delay for better UX
    setTimeout(() => {
        displayNewQuote();
        removeButtonLoading();
    }, 500);
});

//add keyboard support (enter key for new quote)
document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && !newQuoteBtn.disabled){
        newQuoteBtn.click();
    }
});

//initialize app with random quote on page load
window.addEventListener('load', () => {
    //small delay to ensure smoth initial animation
    setTimeout(() => {
        displayNewQuote();
    }, 500);
});

newQuoteBtn.addEventListener('mouseenter', () => {
    newQuoteBtn.style.transform = 'translateY(-2px)';
});

newQuoteBtn.addEventListener('mouseleave', () => {
    newQuoteBtn.style.transform = 'translate(0)';
});