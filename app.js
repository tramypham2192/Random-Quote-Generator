// this is our array of quotes
const array = [
    "You are awesome!",
    "YOu are my sunshine",
    "Life is great!",
    "Javascript sucks!",
    "kidding it is fun",
  ];
  
  const button = document.getElementById("btn-quote");
  button.style.backgroundColor = "#50c802";
  
  const quoteDisplay = document.getElementById("quote");
  
  //random quote generting here
  button.addEventListener("click", () => {
    quoteDisplay.innerHTML = array[Math.floor(Math.random() * array.length)];
  });
  
