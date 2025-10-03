// app.js
const foods = [
  { name: "Tacos", price: "$8", img: "images/tacos.jpg" },
  { name: "Enchiladas", price: "$12", img: "images/pasta.jpg" },
  { name: "Ensalada", price: "$6", img: "images/salad.jpg" },
  {name: "Sopa", price: "$4", img: "images/sopa.jpg"}
];

const menu = document.getElementById("menu");

foods.forEach(food => {
  const card = document.createElement("div");
  card.className = "food-card";
  card.innerHTML = `
    <img src="${food.img}" alt="${food.name}">
    <h2>${food.name}</h2>
    <p>${food.price}</p>
  `;
  menu.appendChild(card);
});
