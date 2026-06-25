const CARDS_PER_PAGE = 5;

const searchInput = document.querySelector(".search-bar input");
const allCards = Array.from(document.querySelectorAll(".blog-card"));
const paginationEl = document.getElementById("pagination");

let currentPage = 1;
let filteredCards = allCards;

function hideCard(card) {
    card.classList.add("hidden");
}

function showCard(card) {
    card.classList.remove("hidden");
}

function showPagination() {
    paginationEl.classList.remove("hidden");
}

function renderPage(page) {
    const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE);
    currentPage = Math.max(1, Math.min(page, totalPages));

    const start = (currentPage - 1) * CARDS_PER_PAGE;
    const end = start + CARDS_PER_PAGE;

    allCards.forEach(card => {
        const indexInFiltered = filteredCards.indexOf(card);
        if (indexInFiltered >= start && indexInFiltered < end) {
            showCard(card);
        } else {
            hideCard(card);
        }
    });

    buildPaginationButtons(totalPages);
}

function buildPaginationButtons(totalPages) {
    paginationEl.innerHTML = "";

    showPagination();

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("a");
        btn.href        = "#";
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");

        btn.addEventListener("click", e => {
            e.preventDefault();
            renderPage(i);
        });

        paginationEl.appendChild(btn);
    }

    const arrow = document.createElement("a");
    arrow.href = "#";
    arrow.innerHTML = `<img src="../assets/images/Vector 8.svg">`;
    arrow.addEventListener("click", e => {
        e.preventDefault();
        if (currentPage < totalPages) renderPage(currentPage + 1);
    });
    paginationEl.appendChild(arrow);
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toUpperCase().trim();

    filteredCards = allCards.filter(card => card.querySelector("h2").textContent.toUpperCase().includes(query));

    renderPage(1);
});

allCards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "blogpost.html";
    });
});

renderPage(1);
