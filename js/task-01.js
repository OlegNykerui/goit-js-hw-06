let itemCount = document.querySelectorAll(".item ");
console.log(`Number of categories:  ${itemCount.length} `);

itemCount.forEach((item) => {
  let textContent = item.firstElementChild.textContent;

  let amountItem = item.querySelectorAll("li").length;
  console.log("Category: " + textContent + "\n" + "Elements: " + amountItem);
});
