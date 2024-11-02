let tasks = [
    { id: 1, description: "Complete the project report", dueDate: "2024-10-20", status: "Pending", priority: "High" },
    { id: 2, description: "Buy groceries for the week", dueDate: "2024-10-18", status: "In Progress", priority: "Medium" },
    { id: 3, description: "Schedule dentist appointment", dueDate: "2024-10-25", status: "Pending", priority: "Low" },
    { id: 4, description: "Finish reading 'JavaScript: The Good Parts'", dueDate: "2024-10-22", status: "Completed", priority: "Medium" },
    { id: 5, description: "Prepare presentation for team meeting", dueDate: "2024-10-21", status: "Pending", priority: "High" },
]

class Task{
    constructor(id,description,dueDate,status,priority){
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.priority = priority;
    }
}
function displayTasks(){
    tasks.forEach(el=>{
        console.log(`${el.description} - ${el.dueDate}(${el.status})`);
    })
}
displayTasks()

function addTask(id,description,dueDate,status,priority){
    let newTask = new Task(id,description,dueDate,status,priority);
    tasks.push(newTask)
}
addTask(6,"to complete dom","2024-11-23","pending","very high")
// console.log(tasks);

function updateTask(id,status){
    let updated = tasks.find(el => el.id===id)
    if(updated){
        updated.status = status;
    }
    return updated
}
updateTask(2,"completed")
// console.log(tasks);

function updateTaskWithMap(id,status){
    tasks = tasks.map(el =>{
        if(el.id === id){
            return new Task(el.id,el.description,el.dueDate,status,el.priority)
        }
        return el;
    })
}
updateTaskWithMap(2,"completed")
// console.log(tasks);

function removeTask(id){
    tasks = tasks.filter(el => el.id !== id)
    
}
removeTask(2)
console.log(tasks);
