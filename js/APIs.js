const menuDishes = document.getElementById("menu-dishes");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9df57793b7msh070685b97188b90p1aa97cjsn4004282a5be9',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};
randomTenMeals();

async function randomTenMeals(){  //Lấy ngẫu nhiên 10 món dưới dạng mảng
    const list = await fetch('https://themealdb.p.rapidapi.com/randomselection.php', options);
    const data = await list.json();
    const meals = data.meals;
    mealsArray= Object.entries(meals); //chuyển object thành mảng
    console.log(mealsArray);
    let randomTenMeals = [];
    for(let i=0; i<mealsArray.length;i++){
        // console.log(mealsArray[i][1])
        // console.log(typeof(mealsArray[i][1]))

        const dish = mealsArray[i];
        console.log(`${i} - `, dish);
        const { strMeal, strInstructions, strMealThumb, strArea } = dish;
        // console.log(randomTenMeals)

            //   Tao 1 dish element
        const dishElement = document.createElement("div");
        dishElement.classList.add("dish");

        const dishEleContent = `
            <div class="card">
                <img src="${strMealThumb}" class="card-img-top" alt="Dishes Image">
                <div class="card-body">
                <p class="card-text">${strMeal}</p>
                </div>
                <div class="menu-dishes-overview">
                    <h3>${strMeal}</h3>
                    <p>General Description: ${strInstructions}</p>
                    <p>Come from: ${strArea}</p>
                </div>
            </div>
        `;

        dishElement.innerHTML = dishEleContent;

        menuDishes.appendChild(dishElement);
        }
}


