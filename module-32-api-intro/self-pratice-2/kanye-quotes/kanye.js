const loadQuotes = async () => {
     const url = 'https://api.kanye.rest/';
     const res = await fetch(url);
     const data = await res.json();
     displayLoadQuotes(data);
}
const displayLoadQuotes = quotes => {


     const quotesAdd = document.getElementById("quotes-add");

     quotesAdd.innerText = quotes.quote;



     ;
}