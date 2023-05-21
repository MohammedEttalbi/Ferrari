import { Data_List } from "./data.js";

const buyBtn = document.getElementById("buy_btn");
const cardList = document.getElementById("Cards_List");

buyBtn.addEventListener("click", function () {
  alert("Coming Soon");
});

function createStoreProducts(product) {
  const card = document.createElement("div");
  card.className = "Card";

  const image = document.createElement("div");
  image.className = "image";
  const img = document.createElement("img");
  img.setAttribute("src", product.image_path);

  image.append(img);

  const titlePrice = document.createElement("div");
  titlePrice.className = "title_price";
  const title = document.createElement("h3");
  title.textContent = product.title;
  const price = document.createElement("h3");
  price.textContent = product.price;
  titlePrice.append(title);
  titlePrice.append(price);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = product.description;

  const button = document.createElement("button");
  button.textContent = "Buy Now";

  card.append(image);
  card.append(titlePrice);
  card.append(description);
  card.append(button);

  cardList.append(card);
}

// console.log(Data_List);

Data_List.map((product) => createStoreProducts(product));
