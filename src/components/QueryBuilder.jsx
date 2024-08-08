// This component uses info inputted in the search bar as well as the
// add criteria optional bars to make a query that can be used to fetch data from Spoonacular API.

// Section to Store the different parts needed to make Spoonacular API calls that don't change with each request.
// for now these values are hardcoded but realistically should be hidden with sensitive info shared publicly.

// This component was made by Carlos Contreras. ccontrer@bu.edu.
// Tiger collaborated by adding a better implementation to mask API key.

export default function QueryBuilder({
  searchValue,
  maxCalories,
  mealType,
  dietType,
}) {
  // (tiger): using vite dotenv to hide api key
  const apiKey = import.meta.env.VITE_API_KEY; // the authentication key needed to make a fetch request.

  const APIurl = `https://api.spoonacular.com/recipes/complexSearch`; // the basic url setup for all calls to the API

  const number = "10"; // parameter for determining a cap on the number of results. will set low for now to avoid consuming free points too fast.

  const instructionsRequired = "true"; // needed to only include recipes with instructions

  const addRecipeInformation = "true"; //needed to get readytime, servings, and basic instructions

  const fillIngredients = "true"; //needed to get the most accurate ingredient info and units.

  const addRecipeNutrition = "true"; // helps obtain calories and other nutrients

  // building the query based on the base parameters and props passed

  const searchvaluewords = searchValue.split(" ");

  let query =
    APIurl +
    "?apiKey=" +
    apiKey +
    "&number=" +
    number +
    "&instructionsRequired=" +
    instructionsRequired +
    "&fillIngredients=" +
    fillIngredients +
    "&addRecipeInformation=" +
    addRecipeInformation +
    "&addRecipeNutrition=" +
    addRecipeNutrition +
    "&query=" +
    searchvaluewords[0];

  for (let i = 1; i < searchvaluewords.length; i++) {
    query += "+" + searchvaluewords[i];
  }

  // adding the optional criteria into the string if there was info on those fields

  if (maxCalories != "") {
    query += "&maxCalories=" + maxCalories;
  }

  if (mealType != "") {
    query += "&type=" + mealType;
  }

  if (dietType != "") {
    query += "&diet=" + dietType;
  }

  // only thing to return is the string representing the query for the API call
  console.log("Query beforen returned by builder", query);
  return query;
}
