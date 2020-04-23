// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// let hi = "hello, ";
// let owu = "'OWU";
// let com = ".com";
// let ua = ".ua'";
// console.log(hi,owu+com+ua);
// document.write(hi,owu+com+ua);
let num1 = 1;
let num10 = 10;
let num_111 = -999;
let num111 = 123;
// document.write(
//     "<br>",num1,"<br>",num10,"<br>",
//     num1+num10,"<br>",num1-num10,"<br>",
//     'num1+num10',"<br>",'num1'+'num10',"<br>",
//     'num10'-'num1',"<br>",num111+num_111,"<br>"
// );
console.log(
    num1,num10 + '\n',
    num1,num10 +"\n",
    num1,"num10 +\n",
);

// alert(`${num1+num10} ${num111}`);

const PI = 3.1415;
let float11 = 2.7;
let num11 = 16;
let boolTr = true;
let boolFal = false;


// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// console.log(
//     `${prompt("Name: ")} ${prompt("SurName: ")}
// Age ${prompt("Age: ")}`);

// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// let name = prompt("Name");
// let surName = prompt("SurName");
// let age = +prompt("Age");
// let nick = name + surName + age;
// console.log(nick);
// console.log(name, surName, age);

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// console.log("a+b+c =",parseInt(prompt("a"))+parseInt(prompt("b"))+parseInt(prompt("c")));

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let a = parseFloat(prompt("a"));
// let b = parseFloat(prompt("b"));
// let c= parseFloat(prompt("c"));
// const res = a+b+c;
// console.log(res, Math.round(res));

// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

// let x = prompt("x");
// let y = prompt("y");
// console.log("x^y",x^y,Math.pow(x,y));

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof(a),typeof(b),typeof(c),typeof(!!d));
// console.log(typeof (a+b));

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение {вложить} в {свою} переменную
// console.log(5<6)
// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 != 10 -> false
// 10 > 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//
// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );-
// console.log(34 > 33 && 23 < 90 );+
// console.log(99 > 100 && 45 > 12 );-
// console.log(132 > 100 || 45 < 12 );+
// console.log(111 > 11 || 45 < 111 );+
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );+
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );+
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );-
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));+
// console.log(!!'-1');+
// console.log(!!-1);+
// console.log(!!'0');-
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
//
//
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
//     -- статус Андрея
// -- статус Максима
console.log(users[10].status);
console.log('max'.status);
// -- имя предпоследнего объекта
console.log(users[users.length-1].name);
// -- имя третьего объекта
console.log(users[2].name);
// -- возраст Олега
// -- возраст Оли
// -- возраст + имя 5го объекта
console.log(users[4].age + users[4].name)
// -- возраст + сатус ани
//
// -Возьмите файл task1_template.html, подключите к нему скрипт, и работайте в нем.
//     Напишите код, который :
// -- получает текст из параграфа с id "content"
// -- получает текст из блока  с id "rules"
// -- замените текст параграфа с id 'content' на любой другой
// -- замените текст параграфа с id 'rules' на любой другой
// -- поменятй каждому элементу цвет фона на красный
// -- поменятй каждому элементу цвет текста на синий
// -- получить весь список классов элемента id = rules и вывести в console.log()
// -- получить все элементы с классом fc_rules
// -- поменять цвет текста у всех элементов fc_rules на красный
//
// CLASS
//
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//
// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
//
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:

console.log(5 % 3);
console.log(3 % 5);
console.log(5 + '3');
console.log('5' * "3");
console.log(75 + 'кг');
//
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// console.log(prompt('width')*prompt('height'));

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// console.log(Math.pow(prompt('D'),2)*prompt('height')*3.14/4);

//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let k = Math.sqrt(n**2+m**2);
console.log(k);
console.log(Math.hypot(n,m))



// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert("Danulyshyn Taras \n Age35 \n It")

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")

// console.log( parseInt("7.875"));

// parseInt("435")
// parseInt("Вася")
//
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

// let str = +prompt("Enter something", 5);
// console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert


alert(+prompt("?",5)+parseInt(prompt("??",5)));

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида

/*
console.log(
    `${prompt("Name: ")} ${prompt("SurName: ")}
Age ${prompt("Age: ")}`);
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

alert("Доброго вечера, "+prompt("Name: ",'Иван')+" " + prompt("Name: ",'Иванов')+", мои поздравления что вам "+prompt("Age: ",32));
*/

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

/*let x = +prompt('x');
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
else {console.log(z,y,x)}*/

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
            alert("Dispite, STOP");}
        else {alert("STOP and WAIT")}
        break;
    case "yellow" :
        if (isRoadClear){
            alert("Dispite, WAIT");}
        else {alert("WAIT")}
        break;
    case "green" :
        if (isRoadClear){
            alert("GO!!");}
        else {alert("WAIT for the violators to pass")}
        break;
    default: alert("Be careful");
}



