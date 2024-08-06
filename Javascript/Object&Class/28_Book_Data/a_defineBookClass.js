class Book{
    constructor(title,author,publishor,year,genre){
        this.title = title;
        this.author = author;
        this.publishor = publishor;
        this.year = year;
        this.genre = genre;
    }
    describe(){
        return `${this.title}-${this.author} (${this.year})`
    }
    displayGenre(){
        return `Genre:${this.genre}`
    }
}

let classicBook = new Book("Pride and Prejudice","Jane Austen","T.Egerton",1813,"Classic")
let sciFiBook = new Book("Dune","Frank Herbert","Chilton Books",1965,"Science Fiction")

console.log(classicBook);
console.log(classicBook.describe());
console.log(classicBook.displayGenre());

console.log(sciFiBook);
console.log(sciFiBook.describe());
console.log(sciFiBook.displayGenre());



