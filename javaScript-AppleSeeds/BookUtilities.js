const book1 = {
    name: "javaScript",
    author: "John",
    year : 1990
};
const book2 = {
    name: "webDeveloper",
    author: "Steve",
    year : 1980
};
const bookUtils = {
    getFirstPublished(book1, book2) {
      if (book1.year > book2.year) return book1;
      else return book2;
    },
  
    setNewEdition(book, editionYear) {
      book.latestEdition = editionYear;
    },
    setTranslation(book, language, transaletor) {
      book.tranlation = { language: language, transaletor: transaletor };
    },
    setPiblisher(book, name, location) {
      book.publisher = { name: name, location: location };
    },
    isSamePublisher(book1, book2) {
      return (
        book1.publisher.name === book2.publisher.name &&
        book1.publisher.location === book2.publisher.location
      );
    },
  };
  bookUtils.getFirstPublished();

