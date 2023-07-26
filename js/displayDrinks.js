import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const grid = get(".grid-content");
  const noResult = get(".no-result");

  if (!drinks) {
    // hide loading
    hideLoading();
    noResult.textContent = "Sorry, no drink match your search.";
    grid.innerHTML = null;
    return;
  }

  const allDrinks = drinks
    .map((eachDrink) => {
      const {
        idDrink: id,
        strDrink: drinkName,
        strDrinkThumb: image,
      } = eachDrink;

      return `<a href="./html/single-cocktail.html">
              <div class="cocktail-ctn" data-id="${id}">
                <img
                  src="${image}"
                  class="cocktail-img"
                  alt=""
                />
                <h2 class="cocktail-name">${drinkName}</h2>
              </div>
            </a>`;
    })
    .join(" ");
  // hide loading
  hideLoading();
  noResult.textContent = "";
  grid.innerHTML = allDrinks;
  return grid;
};

export default displayDrinks;
