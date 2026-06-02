const categories=document.querySelectorAll(".js-category");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title=category.querySelector(".js-title").textContent;
    const elem=category.querySelectorAll(".js-list li").length;
    
    console.log(`Category ${title}`);
    console.log(`Elements ${elem}`);
});