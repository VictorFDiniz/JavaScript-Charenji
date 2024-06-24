const meals = document.getElementById("meals");
const mealsPopup = document.getElementById("meals-popup");
const mealsBtn = document.getElementById("close-popup")
const MealDetails = document.getElementById("meal-details")

getRandomMeal()

async function getRandomMeal() {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const mealsData = await resp.json();
    const randomMeal = mealsData.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal)
    showMealDetails(randomMeal)
}

function addMeal(randomMeal) {
 
meals.innerHTML = `    
    <div>
        <h1>${randomMeal.strMeal}</h1>
    </div>
    <div class="recipes">
        <img 
            id="imgBtn"
            src="${randomMeal.strMealThumb}"
            alt="${randomMeal.strMeal}"
            />
    </div>
    </div>`

    imgBtn.addEventListener("click", () => {
        mealsPopup.classList.remove("hidden");
    })
}

mealsBtn.addEventListener("click", () => {
    mealsPopup.classList.add("hidden");
});

function showMealDetails(randomMeal){
    MealDetails.innerHTML = `    
    <div>
        <h1>${randomMeal.strMeal}</h1>
    </div>
    <div class="recipes">
        <img 
            id="imgBtn"
            src="${randomMeal.strMealThumb}"
            alt="${randomMeal.strMeal}"
            />
            <p>${randomMeal.strInstructions}</p>
    </div>
    </div>`
}