const loadQutes = () => {
     fetch('https://api.kanye.rest')
          .then(res => res.json())
          .then(data => displayQutes(data));
}

const displayQutes = quote => {
     const quoteElement = document.getElementById("quote");
     quoteElement.innerText = quote.quote;
     // console.log(quoteElement.innerText);
}