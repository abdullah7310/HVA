// var a = 4;
// function callback(){
//     console.log(this.a);
    
// }
// const object = {
//     length: 5,
//     method(callback){
//         callback();
//     },
// }
// object.method(callback,1,2)


let info = {
    name : "abdul",
    class : "5th",
    getInfo(){
        console.log(this.class);
        
    }
}
info.getInfo()
let info1 = {
    name : "abdul",
    class : "5th",
    getInfo: ()=>{
        console.log(this.class);
        
    }
}
info1.getInfo()