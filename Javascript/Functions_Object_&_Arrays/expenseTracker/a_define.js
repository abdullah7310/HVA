let expenses = [
    {id:1, name: "Groceries", amount:150,date:"1 Jun 2024", category:"Food"},
    {id:2, name: "Dining Out", amount:450,date:"18 Nov 2024", category:"Entertainment"},
    {id:3, name: "Internet", amount:1050,date:"24 Dec 2024", category:"Utilities"},
    {id:4, name: "Electricity", amount:130,date:"30 Dec 2024", category:"Requirements"},
]

class Expense {
    constructor(id,name,amount,date,category){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.category = category;
    }
}

function displayExpenses(){
    expenses.forEach(product => {
        console.log( `${product.name} - $${product.amount}-(${product.date})`);
        
    })
}
(displayExpenses());

function addExpense(id,name,amount,date,category){
    let newExpense = new Expense(id,name,amount,date,category);
    expenses.push(newExpense)
}
addExpense(5,"clothing",500,"1 jan 2025","Fashion")
console.log("new expense array",expenses);

function updateExpense(id,amount){
    let update = expenses.find(el => el.id === id);

    if(update){
        update.amount = amount
    }
}
updateExpense(2,457890)
// console.log(expenses);

function updateExpenseWithMap(id,amount){
    expenses = expenses.map(el =>{
        if(el.id === id){
            return new Expense(el.id, el.name, amount, el.date, el.category);
        }
        return el;

    })
}
updateExpenseWithMap(2,200)
console.log(expenses);

function removeExpense(id){
    expenses = expenses.filter(el =>{
        if(el.id !==id){
            return el;
        }
    })
}
removeExpense(2)
console.log(expenses);
