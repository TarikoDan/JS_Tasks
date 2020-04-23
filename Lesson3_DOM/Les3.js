// debugger
let nums = [0,1,5,8,7,9,[4,11,77,88],6];
for (let i = 0; i < nums.length; i++) {
    // document.write(`<div>${i}      ${nums[i]} </div>`);

}
function getRandom(min,max) {
    return  Math.random()*(max-min)+min
}
function getRandomInterval(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min
}
function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max))
}


    // -- створити об'єкт (не меньше 5ти властивостей) який описує
    // - собаку
    // - людину
    // - автомобіль
    // - квартиру
    // - книгу
let dog = {name:"Bobby", age:11, sex:"boy", kind:"doberman", color:"broun"};
let human = {name:"Thom", age:32, sex:"man", town:"NY", status:false};
let array = {make:"BMW", model:"z4", product:2015, type:"coupe", color:"black"};
let flat = {street:"Shevchenko", house:18, number:125, rooms:3, lift:true};
let book = {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true};



    // -- Створити масив та вивести його в консоль:
    //     - з 5 собак
    // - 3 5 людей
    // - з 5 автомобілів
let objects = [
    dog,
    {name:"Emmy", age:10, sex:"girl", kind:"setter", color:"red"},
    {name:"Roy", age:1, sex:"boy", kind:"terjer", color:"broun"},
    {name:"Teddy", age:7, sex:"boy", kind:"haski", color:"grey"},
    {name:"Lala", age:6.5, sex:"girl", kind:"doberman", color:"black"},
    human,
    {name:"Jhon", age:12, sex:"man", town:"LA", status:false},
    {name:"Taras", age:42, sex:"man", town:"Lviv", status:true},
    {name:"Tamara", age:2, sex:"woman", town:"Lviv", status:false},
    {name:"Iren", age:35, sex:"woman", town:"Odessa", status:true},
    car,
    {make:"Ford", model:"fokus", product:1995, type:"hetchback", color:"green"},
    {make:"Mercedess", model:"GLA", product:2019, type:"SUV", color:"silver"},
    {make:"Audi", model:"a6", product:2010, type:"sedan", color:"blue"},
    {make:"WV", model:"passat", product:2000, type:"combi", color:"red"},
    flat,
    {street:"Bandery", house:22, number:199, rooms:2, lift:true},
    {street:"Striyska", house:7, number:5, rooms:4, lift:false},
    {street:"Chornovola", house:118, number:25, rooms:3, lift:true},
    {street:"Franka", house:4, number:5, rooms:1, lift:false},
    book,
    {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
    {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
    {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
    {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
    ];
// console.log(objects);

    // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
    // - будинок
    // - водій
    // - іграшку
    // - стіл
    // - сумка



    // Дан массив:
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
    // - статус Андрія
console.log(users[7].status);
    // - статус Максима
    // - ім'я передостаннього об'єкту
    // - ім'я третього об'єкта
    // - вік Олега
    // - вік Олі
    // - вік + ім'я 5го об'єкта
    // - вік + сатус Анни
    // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
