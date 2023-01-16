const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];
 function getStatus(library)
 {
    for(var i =0;i<library.length;i++){
        let book ="'" + library[i].title + "'" + 'by' + library[i].author + "."
        if(library[i].readingStatus){
            console.log("this book has readen  " + book);
    }  else {
        console.log("this book " + book + " is not reading");
    }}
 }
 getStatus(library);