function fetchAndDisplayQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
        return response.json();
      })
      .then(data => {
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        document.getElementById('quote-content').textContent = quoteContent;
        document.getElementById('quote-author').textContent = `—${quoteAuthor}`;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
// Call the function to fetch and display the quote when the page is loaded
window.onload = fetchAndDisplayQuote;

// Add event listener to the button to fetch and display a new quote when the button is pressed
document.getElementById('new-quote').addEventListener('click', fetchAndDisplayQuote);

