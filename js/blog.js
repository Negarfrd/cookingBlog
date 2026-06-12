const searchInput = document.querySelector(".search-bar input");
const blogCards = document.querySelectorAll(".blog-card");
const pagination = document.querySelector(".pagination");

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toUpperCase().trim();

    let visibleCards = 0;

    blogCards.forEach(card => {
        const title = card.querySelector("h2").textContent.toUpperCase();

        if (title.includes(searchValue)) {
            card.style.display = "flex";
            visibleCards++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleCards < blogCards.length) {
        pagination.style.display = "none";
    } else {
        pagination.style.display = "flex";
    }
});
const pageButtons = document.querySelectorAll(".pagination a");

const orders = [[0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0]];

function showPage(pageIndex) {

    const container = document.querySelector(".blog-main");

    blogCards.forEach(card => card.remove());

    orders[pageIndex].forEach(index => {
        container.insertBefore(blogCards[index], document.querySelector(".pagination"));
    });

    pageButtons.forEach(btn => btn.classList.remove("active"));
    pageButtons[pageIndex].classList.add("active");
}

pageButtons.forEach((btn, index) => {

    if (index < 2) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showPage(index);
        });
    }

});

blogCards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "blogpost.html";
    });
});