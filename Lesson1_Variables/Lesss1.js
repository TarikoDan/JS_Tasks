// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

console.log(
    `${prompt("Name: ")} ${prompt("SurName: ")}
Age ${prompt("Age: ")}`);


// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

console.log("a+b+c =",parseInt(prompt("a"))+parseInt(prompt("b"))+parseInt(prompt("c")));

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
// - обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!
// -- статус Максима
console.log(users[10].status);
console.log('max'.status); // Це можливо тільки масивом?
// -- имя предпоследнего объекта
console.log(users[users.length-1].name);
// -- имя третьего объекта
console.log(users[2].name);
// -- возраст + имя 5го объекта
console.log(users[4].age + users[4].name)
//

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

console.log(Math.pow(prompt('D'),2)*prompt('height')*3.14/4);

//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let k = Math.sqrt(n**2+m**2);
console.log(k);
console.log(Math.hypot(n,m))

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert("Danulyshyn Taras \n Age35 \n It")


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert


alert(+prompt("?",5)+parseInt(prompt("??",5)));

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида


console.log(
    `${prompt("Name: ")} ${prompt("SurName: ")}
Age ${prompt("Age: ")}`);
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

alert("Доброго вечера, "+prompt("Name: ",'Иван')+" " + prompt("Name: ",'Иванов')+", мои поздравления что вам "+prompt("Age: ",32));


// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let x = +prompt('x');
let y = +prompt('y');
let z = +prompt('z');
if (x>=y && x>=z) {
    if (y>=z) {console.log(x,y,z)}
    else {console.log(x,z,y)}
}
else if (y>=x && y>=z) {
    if (x>=z) {console.log(y,x,z)}
    else {console.log(y,z,x)}
}
else if (x>=y) {console.log(z,x,y)}
else {console.log(z,y,x)}

// 2.Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let red = confirm("red?");
if (red) {
    console.log("STOP")}
else {
    let green = confirm("green?");
    if (green) {
        console.log("GO !!")}
    else {
        let yellow = confirm("yellow?");
        if (yellow) {
            console.log("WAIT")}
        else {console.log("be careful")}}}


// 3   Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
let light = prompt("What light? ( red / yellow / green / flesh )", "flash");
let isRoadClear = confirm("Is Road Clear?");
switch (light) {
    case "red" :
        if (isRoadClear){
            alert("Despite, STOP");}
        else {alert("STOP and WAIT")}
        break;
    case "yellow" :
        if (isRoadClear){
            alert("Despite, WAIT");}
        else {alert("WAIT")}
        break;
    case "green" :
        if (isRoadClear){
            alert("GO!!");}
        else {alert("WAIT for the violators to pass")}
        break;
    default: alert("Be careful");
}



