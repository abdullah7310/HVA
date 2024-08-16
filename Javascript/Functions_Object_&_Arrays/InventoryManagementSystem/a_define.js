let inventory = [
    {id:1,name:"Laptop",price:800,quantity:10, category:"Electronics"},
    {id:2,name:"Shirts",price:450,quantity:20,category:"Clothing"},
    {id:3,name:"Blender",price:50,quantity:5,category:"Home Appliance"},
    {id:4, name:"Book",price: 30,quantity:30,category:"Books"},
    {id:5, name:"Rice",price:48,quantity:9,category:"Food"}
];

class Product{
    constructor(id,name,price,quantity,category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}
function displayProducts(){
    inventory.forEach(product =>{
        console.log(`${product.name} - ${product.price} (${product.quantity})`);
        
    })
}
// displayProducts()

function addProduct(id,name,price,quantity,category){
    let newProduct = new Product(id, name, price, quantity, category);
    inventory.push(newProduct);
}
displayProducts()
addProduct(4,"mobile",600,15,"Electronics")
console.log("\nUpdated Inventory : ");
displayProducts()
