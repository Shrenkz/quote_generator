const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const person = document.getElementById("author");

const quotes = [
  {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      person: "Ralph Waldo Emerson"
  },
  {
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
      person: "Abraham Lincoln"
  },
  {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
  },
  {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
  },
  {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
  },
  {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
  },
  {
      quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
      person: "Edmund Burke"
  },
  {
      quote: "The journey of a thousand miles begins with one step.",
      person: "Lao Tzu"
  },
  {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
  },
  {
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      person: "Maya Angelou"
  }
];

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;
});
