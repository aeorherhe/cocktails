import fetchDrinks from "./fetchDrinks.js";
import displaySingleDrink from "./displaySingleDrink.js";

const presentSingleDrink = async () => {
  const id = localStorage.getItem("drinkID");
  if (!id) {
    window.location.replace("../index.html");
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displaySingleDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentSingleDrink);
