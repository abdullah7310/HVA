let inventory = [
    {id:1,title: "To kill a Mockingbird", author:"Harper Lee", price:499, quantity:12, genre:"fiction", published:"1930"},
    {id:2,title: "Harry Potter", author:"abdullah", price:599, quantity:18, genre:"Sci-fi", published:"2000"},
    {id:3,title: "Game of Thrones", author:"ahmad", price:899, quantity:27, genre:"Horror", published:"2004"},
    {id:4,title: "vikings:the og", author:"abdul", price:239, quantity:30, genre:"Historic", published:"1998"},
]

class Book {
    constructor(id,title,author,price,quantity,genre,published){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
        this.genre = genre;
        this.published = published;
    }
}

function displayBooks(){
    inventory.forEach(el=>{
        console.log(`${el.title} - ${el.author}(${el.price})`);
        
    })
}
// displayBooks()

function addBook(id,title,author,price,quantity,genre,published){
    let newBook = new Book(id,title,author,price,quantity,genre,published);
    inventory.push(newBook)

}
// addBook(5,"Peaky Blinder","Abdullllah",345,23,"Crime","1776");
// console.log("after adding inventory",inventory);

function updateBook(id,quantity){
    let updatedBook = inventory.find(el => el.id === id);
    if(updatedBook){
        updatedBook.quantity = quantity;
    }
}
// updateBook(3,23456789)
// console.log("this is after updated inventory",inventory);

function updateBookWithMap (id,quantity){
    inventory = inventory.map(el => {
        if(el.id === id){
            // el.quantity = quantity;
            return new Book(el.id,el.title, el.author , el.price ,quantity, el.genre,el.published)
        }
        return el;
    })
}
// updateBookWithMap(4,86780989)
// console.log("this is after map",inventory);

function removeBook(id){
    inventory = inventory.filter(el => el.id !== id);
    // return inventory;
}
console.log(removeBook(3))

console.log("after removed the array ",inventory);

