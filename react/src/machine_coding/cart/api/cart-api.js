export const fetchCartItems = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    return data["products"];
  } catch (err) {
    return Error("Data not fetched!");
  }
};
