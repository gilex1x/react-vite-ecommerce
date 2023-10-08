const URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await fetch(URL);
  const dataResult = await response.json();
  return dataResult;
};
