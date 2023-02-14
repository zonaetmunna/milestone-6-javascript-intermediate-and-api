const searchFood = async () => {
     const searchField = document.getElementById("search-field");
     const searchText = searchField.value;
     // console.log(searchText);


     searchField.value = '';

     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
     // console.log(url);

     const res = await fetch(url);
     const data = await res.json();
     displaGetMeals(data);
     // fetch(url)
     //      .then(res => res.json())
     //      .then(data => displaGetMeals(data))

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

const loadSigleMeal = async mealId => {
     // console.log(mealId);
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
     // console.log(url);

     const res = await fetch(url);
     const data = await res.json();
     displayMealDetails(data.meals[0]);

     // fetch(url)
     //      .then(res => res.json())
     //      .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
     // console.log(meal);
     const mealDetails = document.getElementById("meal-deails");
     mealDetails.textContent = '';

     const div = document.createElement("div");
     div.classList.add("card");
     div.innerHTML = `
     <img src="${meal.strMealThumb}" class="container-fluid card-img-top" alt="...">
               <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
               </div>
     `
     mealDetails.appendChild(div);

}


