const quoteElement = document.getElementById("quote");
const previousBtn = document.getElementById("previousBtn");
const randomBtn = document.getElementById("randomBtn");
const nextBtn = document.getElementById("nextBtn");
const categorySelect = document.getElementById("category");
const darkModeBtn = document.getElementById("darkMode");
const decreaseFontBtn = document.getElementById("decreaseFont");
const increaseFontBtn = document.getElementById("increaseFont");


const quotes = {
  all: ['"The only way to achieve the impossible is to believe it is possible."',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
  '"Don\'t watch the clock; do what it does. Keep going."'],
  inspiration: ['"The only way to achieve the impossible is to believe it is possible."',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
  '"Don\'t watch the clock; do what it does. Keep going."'],
  religious: ['"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."',
  '"Peace comes from within. Do not seek it without."',
  'Hatred does not cease by hatred, but only by love; this is the eternal rule.']
};

let currentCategory = "all";
let currentQuoteIndex = 0;
let fontSize = 24;

// Function to update the displayed quote
function updateQuote() {
  const categoryQuotes = quotes[currentCategory];
  //console.log(categoryQuotes) // array
  quoteElement.textContent = categoryQuotes[currentQuoteIndex];
  //console.log(quoteElement.textContent)
  quoteElement.style.fontSize = `${fontSize}px`;
}

// Event listeners
previousBtn.addEventListener("click", () => {
  if (currentQuoteIndex === 0) {
    currentQuoteIndex = quotes[currentCategory].length - 1;
  } else {
    currentQuoteIndex--;
  }
  updateQuote();
});

randomBtn.addEventListener("click", () => {
  currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  updateQuote();
});

nextBtn.addEventListener("click", () => {
  if (currentQuoteIndex === quotes[currentCategory].length - 1) {
    currentQuoteIndex = 0;
  } else {
    currentQuoteIndex++;
  }
  updateQuote();
});

categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  currentQuoteIndex = 0;
  updateQuote();
});

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = 'Light';
    darkModeBtn.style.backgroundColor = '#F0EAD6';
    darkModeBtn.style.color = 'black';
  } else {
    darkModeBtn.textContent = 'Dark';
    darkModeBtn.style.backgroundColor = 'black';
    darkModeBtn.style.color = 'white';
  }
});

decreaseFontBtn.addEventListener("click", () => {
  fontSize = Math.max(fontSize - 2, 12);
  updateQuote();
});

increaseFontBtn.addEventListener("click", () => {
  fontSize = Math.max(fontSize + 2, 30)
  updateQuote();
});

updateQuote();
