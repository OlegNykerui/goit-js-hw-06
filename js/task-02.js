const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItem = document.getElementById("ingredients");
ingredients.forEach((element) => {
  const createItem = document.createElement("li");
  createItem.textContent += element;
  createItem.classList.add("item");
  listItem.append(createItem);
});
console.log(listItem);
