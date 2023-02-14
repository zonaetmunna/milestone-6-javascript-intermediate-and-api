const loadSearch = () => {
     const inputField = document.getElementById("input");
     inputFieldText = inputField.value;

     inputField.value = '';

     if (inputFieldText == '') {
          const searchResult = document.getElementById("search-result");
          searchResult.innerHTML = `
          <h1> please type your drinks
          somthing went wrong</h1>
          `;
     }
     else {
          const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputFieldText}`;
          console.log(url);
          fetch(url)
               .then(res => res.json())
               .then(data => dislaySearchItem(data.drinks));
     }




}

const dislaySearchItem = drinks => {
     // console.log(drinks);

     const searchResult = document.getElementById("search-result");
     searchResult.innerHTML = '';

     drinks.forEach(drink => {
          // console.log(drink);
          const div = document.createElement("div");

          div.classList.add("col");
          div.innerHTML = `
          <div onclick="loadSingleDrink('${drink.idDrink}')" class="card h-100">
                    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${drink.strDrink}</h5>
                         <p class="card-text">${drink.strInstructions}</p>
                    </div>
                    
               </div>
          `
          searchResult.appendChild(div);

     });
}

const loadSingleDrink = drinkId => {
     // console.log(drinkId);
     const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
     // console.log(url);
     fetch(url)
          .then(res => res.json())
          .then(data => displaySingleDrinks(data.drinks[0]))
}
const displaySingleDrinks = drink => {
     const singleDrink = document.getElementById("single-drink");
     singleDrink.innerHTML = '';
     const div = document.createElement("div");
     div.classList.add("card");
     div.innerHTML = `
     <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
          <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
     `
     singleDrink.appendChild(div);
}