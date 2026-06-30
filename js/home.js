document.querySelector(".view-btn").onclick = () => {
    location.href = "recipe.html";
};

const recipeCards = document.querySelectorAll(".recipe-card");

recipeCards.forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
        window.location.href = "recipe.html";
    });

});

const catList = document.getElementById("categoriesList");

async function loadCategories() {
    try {
        catList.innerHTML = "<div class=\"loader\"></div>";

        const response = await fetch(
            "https://foodieland-oq9b.onrender.com/api/categories/"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }

        const categories = await response.json();

        catList.innerHTML = "";

        categories.forEach(category => {
            const card = document.createElement("div");
            card.classList.add("cat-card", category.name.toLowerCase());

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
                <h3>${category.name}</h3>
            `;

            catList.appendChild(card);
        });

    } catch (error) {
        console.error(error);
        catList.innerHTML = "<p>Failed to load categories</p>";
    }
}

loadCategories();