const searchFood = () => {
     const searchField = document.getElementById("search-field");
     const searchText = searchField.value;
     // console.log(searchText);

     if (searchText == '') {
          const searchResult = document.getElementById("search-result");
          searchResult.innerHTML = `
          <h1>somthing went wrong</h1>
          `

     }
     else {
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
          // console.log(url);
          fetch(url)
               .then(res => res.json())
               .then(data => displaGetMeals(data))
     }

     searchField.value = '';



}

const displaGetMeals = (data) => {
     const meals = data.meals;
     // console.log(meals);
     const searchResult = document.getElementById("search-result");
     // console.log(searchResult);
     searchResult.textContent = '';
     if (meals.length == 0) {

     }
     meals.forEach(meal => {
          console.log(meal);
          const div = document.createElement("div");
          div.classList.add("col");
          div.innerHTML = `
          <div onclick="loadSigleMeal(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top"  alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${meal.strMeal}</h5>
                         <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                    </div>
                    
               </div>
          `
          searchResult.appendChild(div);
     });

}

const loadSigleMeal = mealId => {
     // console.log(mealId);
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
     // console.log(url);
     fetch(url)
          .then(res => res.json())
          .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
     // console.log(meal);
     const mealDetails = document.getElementById("meal-deails");
     const div = document.createElement("div");
     div.classList.add("card");
     div.innerHTML = `
     <img src="${meal.strMealThumb}" class="container-fluid card-img-top" alt="...">
               <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
               </div>
     `
     mealDetails.appendChild(div);

}


