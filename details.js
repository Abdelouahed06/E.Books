const books = [
    { id: 1, title: "HTML learning book", category: "Programming", isFree: true, price: "$0.00", image: "https://www.kotobati.com/sites/default/files/2023-12/_jpgresize.com_%D8%A7%D9%84%D8%AB%D8%B9%D9%84%D8%A8%20%D8%B3%D9%8A%D9%83%D9%88%20%287%29.jpeg" },
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
