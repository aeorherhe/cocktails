import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (urlAddress) => {
  showLoading();
  try {
    const resp = await fetch(urlAddress);
    const drinksData = await resp.json();
    return drinksData;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
