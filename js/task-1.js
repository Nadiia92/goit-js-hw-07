const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

const categoriesAll = document.querySelectorAll("h2");

categoriesAll.forEach(function (category) {
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${category.parentElement.querySelectorAll("ul > li").length}`);
});







