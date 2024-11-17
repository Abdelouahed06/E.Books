const books = [
    { id: 1, title: "Fiction Book 1", category: "Fiction", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Science Book 1", category: "Science", isFree: false, price: "$15.99", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Technology Book 1", category: "Technology", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Fiction Book 2", category: "Fiction", isFree: false, price: "$9.99", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Science Book 2", category: "Science", isFree: true, price: "$0.00", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Technology Book 2", category: "Technology", isFree: false, price: "$12.99", image: "https://via.placeholder.com/150" },
];

const urlParams = new URLSearchParams(window.location.search);
const bookId = parseInt(urlParams.get("id"), 10);

const book = books.find(b => b.id === bookId);

const bookDetails = document.getElementById("book-details");

if (book) {
    bookDetails.innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${book.image}" class="img-fluid rounded" alt="${book.title}">
            </div>
            <div class="col-md-8">
                <h1>${book.title}</h1>
                <p>${book.description}</p>
                <p class="fw-bold">${book.price}</p>
                <a href="#" class="btn btn-primary">Download</a>
            </div>
        </div>
    `;
} else {
    bookDetails.innerHTML = `<p class="text-danger">Book not found!</p>`;
}
