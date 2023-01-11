const book = {
    bookname: "javaScript",
    author_name: "John",
    author_Age: 56,
    publishing_year: 1990
};

function detail(book) {
    console.log(`The book ${book.bookname} was written by ${book.author_name} he is ${book.author_Age} old in ${book.publishing_year}`);
}
detail(book);