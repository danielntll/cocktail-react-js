
//---------------------- INGREDIENTS -------------------
export const getIngredientData = async (name) => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + name);
  const data = await res.json();

  console.log(data);
  return data.ingredients;
}

export const getProductsByIngredient = async (name) => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name);
  const data = await res.json();
  console.log(data);
  return data.drinks;
}

//*---------------------- PRODUCT ---------------------
export const getProductInfoById = async (id) => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
  const data = await res.json();
  console.log(data);
  return data.drinks[0];
}


//*---------------------- CATEGORIES ---------------------

export const getCategories = async () => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
  const data = await res.json();
  console.log(data);
  return data.drinks;
}

//*---------------------- RANDOM ---------------------
export const getRandom = async () => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  const data = await res.json();
  return data.drinks;
}

//*---------------------- INGREDIENT FILTERED ---------------------
export const getFilteredIngredient = async (name) => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name);
  const data = await res.json();
  return data.drinks;
}

// --------------------- PRODUCT BY NAME --------------------------
export const getProductsByName = async (name) => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name);
  const data = await res.json();
  return data.drinks;
}