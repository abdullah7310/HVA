let people = [{
    name :"Abdul",
    age : 20
},{
    name :"Vishal",
    age : 22
},{
    name : "Nikhil",
    age : 20
}]


function calculateAverage(people){
    let sumOfAge = 0
    people.forEach(function(el){
        sumOfAge += el.age
    })
    let avg = sumOfAge / people.length;
    console.log(avg)
    return avg;
}
(calculateAverage(people));
// let student = [{
//     age:24,
// },{age:23},{age:22}]
// calculateAverage(student)

// let result = calculateAverage(student);
// console.log(result)
