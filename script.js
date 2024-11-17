const books = [
    { id: 1, title: "Fiction Book 1", category: "Fiction", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Science Book 1", category: "Science", isFree: false, price: "$15.99", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Technology Book 1", category: "Technology", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Fiction Book 2", category: "Fiction", isFree: false, price: "$9.99", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Science Book 2", category: "Science", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Technology Book 2", category: "Technology", isFree: false, price: "$12.99", image: "https://via.placeholder.com/150" },
];

function loadBooks(category = "All") {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear the book list

    const filteredBooks = category === "All" ? books : books.filter(book => book.category === category);

    filteredBooks.forEach(book => {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";

        col.innerHTML = `
            <div class="card shadow-sm">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Category: ${book.category}</p>
                    <p class="fw-bold">${book.price}</p>
                    <a href="details.html?id=${book.id}" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;
        bookList.appendChild(col);
    });

    if (filteredBooks.length === 0) {
        const message = document.createElement("p");
        message.className = "text-center text-muted";
        message.textContent = "No books found.";
        bookList.appendChild(message);
    }
}

// Search books dynamically
function searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    const bookList = document.getElementById("book-list");

    bookList.innerHTML = ""; // Clear the book list

    filteredBooks.forEach(book => {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";

        col.innerHTML = `
            <div class="card shadow-sm">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Category: ${book.category}</p>
                    <p class="fw-bold">${book.price}</p>
                    <a href="details.html?id=${book.id}" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;
        bookList.appendChild(col);
    });

    if (filteredBooks.length === 0) {
        const message = document.createElement("p");
        message.className = "text-center text-muted";
        message.textContent = "No books match your search.";
        bookList.appendChild(message);
    }
}

// Initial load (display all books)
loadBooks();
