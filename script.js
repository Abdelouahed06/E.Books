const books = [
    { id: 1, title: "HTML learning book", category: "Programming", isFree: true, price: "$0.00", image: "https://www.kotobati.com/sites/default/files/2023-12/_jpgresize.com_%D8%A7%D9%84%D8%AB%D8%B9%D9%84%D8%A8%20%D8%B3%D9%8A%D9%83%D9%88%20%287%29.jpeg" },
    { id: 2, title: "Science Book 1", category: "Science", isFree: false, price: "$15.99", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Technology Book 1", category: "Technology", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Fiction Book 2", category: "Fiction", isFree: false, price: "$9.99", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Science Book 2", category: "Science", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Technology Book 2", category: "Technology", isFree: false, price: "$12.99", image: "https://via.placeholder.com/150" },
];

// Global variables for search and filter
let currentCategory = "All";
let currentSearchQuery = "";

// Load books dynamically
function loadBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear the book list

    // Filter and search logic
    const filteredBooks = books.filter(book => {
        const matchesCategory = currentCategory === "All" || book.category === currentCategory;
        const matchesSearch = book.title.toLowerCase().includes(currentSearchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Dynamically create book cards
    filteredBooks.forEach(book => {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";

        col.innerHTML = `
            <div class="card shadow-sm h-100">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Category: ${book.category}</p>
                    <p class="fw-bold">${book.price}</p>
                    <a href="details.html?id=${book.id}" class="btn btn-primary mt-auto">View Details</a>
                </div>
            </div>
        `;
        bookList.appendChild(col);
    });

    // Display "No books found" message if no books match
    if (filteredBooks.length === 0) {
        const message = document.createElement("p");
        message.className = "text-center text-muted w-100";
        message.textContent = "No books match your criteria.";
        bookList.appendChild(message);
    }
}

// Filter books by category
function filterBooks(category) {
    currentCategory = category;
    loadBooks();

    // Highlight active category button
    const buttons = document.querySelectorAll(".btn-outline-secondary");
    buttons.forEach(button => button.classList.remove("active"));
    const activeButton = Array.from(buttons).find(button => button.textContent === category);
    if (activeButton) activeButton.classList.add("active");
}

// Search books by query
function searchBooks() {
    const searchInput = document.getElementById("searchInput");
    currentSearchQuery = searchInput.value.trim();
    loadBooks();
}

// Initialize books on page load
document.addEventListener("DOMContentLoaded", () => {
    loadBooks(); // Load all books by default
});
