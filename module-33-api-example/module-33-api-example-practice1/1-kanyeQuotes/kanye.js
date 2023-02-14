const loadData = () => {
     fetch('https://api.kanye.rest/')
          .then(res => res.json())
          .then(data => displayLoadData(data));

}



const displayLoadData = quotes => {
     console.log(quotes.quote);
     const quoteElement = document.getElementById("quote");
     quoteElement.innerText = quotes.quote;

}