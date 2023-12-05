import axios from "axios";

const BACKEND_URL =
  "https://pc-configurator-56911-default-rtdb.europe-west1.firebasedatabase.app/";

export const fetchCategories = async () => {
  const response = await axios.get(BACKEND_URL + "categories.json");
  console.log(response);
  const categories = [];

  for (const key in response.data) {
    const categoryObj = {
      id: response.data[key].id,
      name: response.data[key].name,
      categoryName: response.data[key].categoryName,
      imgSource: require("D:/PracaInz/PCConfigurator/assets/images/categories/PlytaGlowna.png"),
    };
    categories.push(categoryObj);
  }

  return categories;
};
