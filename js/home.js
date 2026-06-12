document.querySelector(".view-btn").onclick = () => {
    location.href = "recipe.html";
};
console.log(document.querySelector(".view-btn"));

const recipeCards = document.querySelectorAll(".recipe-card");

recipeCards.forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
        window.location.href = "recipe.html";
    });

});