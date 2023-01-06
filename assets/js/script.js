const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//event listners
searchBtn.addEventListener('click', getMealList);

// get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    console.log(searchInputTxt.length);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response=>response.json())
    .then(data => {
        console.log(data);
    })
}

// function getMealList() {
//     let searchInputTxt = document.getElementById('search-input').value.trim();
//     console.log(searchInputTxt.length);
//     fetch(`https://api.spoonacular.com/recipes/search?apiKey=793e72c3314347c0a6073bf388baf416$number=1&query=${searchInputTxt}`)
//     .then(response=>response.json())
//     .then(data => {
//         console.log(data);
//     })
// }


