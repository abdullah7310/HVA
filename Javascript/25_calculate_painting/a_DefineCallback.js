function areaOfRectangle(length,width){
    let area=length*width;
    return area;
}
function areaOfCircle(radius){
    let area=3.14*radius**2
    return area;
}
function areaOfTriangle(base,height){
    let area=0.5*base*height;
    return area;
}

// b Define calculatePaintingCost Function:

function calculatePaintingCost(dimension1,dimension2,calculateArea){
    let area = calculateArea(dimension1,dimension2)
    const costPerUnit = 2
    let totalCost = area*costPerUnit;
    return totalCost;
}

console.log(calculatePaintingCost(5,10,areaOfRectangle));
console.log(calculatePaintingCost(3,null,areaOfCircle));
console.log(calculatePaintingCost(6,8,areaOfTriangle));



