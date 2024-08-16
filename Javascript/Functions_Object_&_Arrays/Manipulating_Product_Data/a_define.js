let products = [
    {id:1,name:"Laptop",price:800,category:"Electronics"},
    {id:2,name:"Shirts",price:450,category:"Clothing"},
    {id:3,name:"Blender",price:50,category:"Home Appliance"},
    {id:4, name:"Book",price: 30,category:"Books"},
    {id:5, name:"Rice",price:48,category:"Food"}
];

function displayProducts(products){
    products.forEach(function (el){
        console.log(`${el.name} - ${el.price}`);
        
    })
}
displayProducts(products)

console.log("This is the product name after their taxes.");


const tax = 0.10;
let productsWithTax = products.map(function(el){
    return{
        id: el.id,
        name: el.name,
        category : el.category,
        priceWithTax :(el.price + el.price* tax).toFixed(2)
    }
})

function displayProductsWithTax(productsWithTax){
    productsWithTax.forEach(function(el){
        console.log(`${el.name} - ${el.priceWithTax}`);
    })
}
displayProductsWithTax(productsWithTax)

let foodProducts = products.filter(function(el){
    return el.category ==="Food"
})

console.log("\nDisplaying Food Products:");

displayProducts(foodProducts)

let affordableProduts = products.filter(function (el){
    return el.price<50;
})

console.log("\nAffordable Products Under 50Rs.:");

// console.log(affordableProduts);

let affordableProductsString = affordableProduts.map(function (el){
    return `${el.name} - ${el.price}`
})
console.log(affordableProductsString);

console.log("\nTotal Price of all products :-");

let totalPrice = 0
products.forEach(function(el){
    totalPrice += el.price;
})
console.log(totalPrice);
