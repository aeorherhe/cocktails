const setDrink = (drinkInfo) => {
  drinkInfo.addEventListener("click", (e) => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drinkID", id);
  });
};

export default setDrink;
