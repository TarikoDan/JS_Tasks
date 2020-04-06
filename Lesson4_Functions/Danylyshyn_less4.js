//      // - створити функцію яка виводить масив
// let arrayLog = (array) => {
//     if (typeof array === 'object' && Array.isArray(array)) {
//         console.log(typeof array);
//         console.log(array);
//         document.write(array,'<br>')
//     } else {
//         document.write('NOT an Array <br>');
//         console.log('NOT an Array');
// }};
// let nums = [0,1,5,8,7,9,[4,11,77,88],6];
// let obj = {name: 'max', age: 30, status: true};
// arrayLog(obj);
// arrayLog(nums);

//     // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let arrayRandom = () => {
//     let array = [];
//     let length = +prompt("Enter length of your array:",5);
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random()*100);
//     }
//     arrayLog(array)
// };
// arrayRandom();


//     // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// let numsMin = (a, b, c) => {
//     if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
//         if (a <= b && a <= c) {
//             console.log(`Min = ${a}`);
//             document.write(`Min = ${a} <br>`);
//             return a;
//         } else if (b <= a && b <= c) {
//             console.log(`Min = ${b}`);
//             document.write(`Min = ${b} <br>`);
//             return b;
//         } else {
//             console.log(`Min = ${c}`);
//             document.write(`Min = ${c} <br>`);
//             return c;
//         }
//     } else {
//         console.log('Not a number');
//         document.write('Not a number');
//     }
// };
// console.log(numsMin(-2e2,1.11,-100));


//     // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// let numsMax = (a, b, c)  => {
//     let max = Math.max(a,b,c)
//     console.log(`Max = ${max}`);
//     document.write(`Max = ${max} <br>`);
//     return max;
// };
// console.log(numsMax(2e2,200,10**2));


//     // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// let numsMinMax = function (){
//     console.log(Math.max(...arguments));
//     document.write(`Max of arguments = ${Math.max(...arguments)} <br>`);
//     return Math.min(...arguments)
// };
// numsMinMax(9,7,0,-6,400);
// console.log(numsMinMax(9,'7e2',0,-6,'10'));


//     // - створити функцію яка повертає найбільше число з масиву
// let nums1 = [0,1,5,8,7,9,-4,11,-77,88,6];
// let nums2 = [0,1,5,8,7,9,[4,11,77,88],6];
// let arrayMax = function (array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if ( array[i] > max ) {
//             max = array[i]
//         }
//     }
//     return max
// };
// console.log(arrayMax(nums1));


//     // - створити функцію яка повертає найменьше число з масиву
// let arrayMin = function (array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if ( array[i] < min ) {
//             min = array[i]
//         }
//     }
//     return min
// };
// console.log(arrayMin(nums1));


//     // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arraySumm = function (array) {
//     let summ = 0;
//     for (const arrayElement of array) {
//         summ += arrayElement
//     }
//     return summ
// };
// console.log(arraySumm(nums1));


//     // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrayAverage = function (array) {
//     let summ = 0;
//     for (const arrayElement of array) {
//         summ += arrayElement
//     }
//     return summ / array.length
// };
// console.log(arrayAverage(nums1));


//++++++++++++++++
// let users = [
//     88,
//     [0,1,5,8,7,9,6],
//     [0,1,5,8,7,9,[-4,11,77,88],6],
//     [1,2,3,4,[1,2,3,4,[1,2,3,4,5]]],
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     ];
//     //     // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let arrayQuantity = function (array) {
//     return array.length
// };
// console.log(arrayQuantity(users));
//
//     // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let objectTotalKeysAmount = (object) => {
//     let sum = 0;
//     for (const objectKey in object) {
//         sum +=1;
//         if (typeof object[objectKey] === 'object') {
//             sum += objectTotalKeysAmount(object[objectKey]);
//         }
//     }
//     return sum
// };
//
// let arrayNumberKeysOfObjects = (array) => {
//     let sum = 0;
//     for (const object of array) {
//         sum += objectTotalKeysAmount(object)
//     }
//     return sum
// };
// console.log(arrayNumberKeysOfObjects(users));


// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     Приклад
// let ar1 = [1,2,3,4];
// let ar2 = [2,3,4,5,7];
// // результат
// //        [3,5,7,9]
// let arraysSummElementsByIndex = (array1,array2) => {
//     let arrayResult = [];
//     let length = 0;
//     if (array1.length >= array2.length) {
//         length = array1.length
//     } else {
//         length = array2.length
//     }
//     for (let i = 0; i < length; i++) {
//         if (typeof array1[i] !== 'number') {
//             arrayResult[i] = array2[i]
//         }else if (typeof array2[i] !== 'number') {
//             arrayResult[i] = array1[i]
//         }else {
//             arrayResult[i] = array1[i] + array2[i]
//         }
//     }
//     console.log('array 1    : ', array1);
//     console.log('array 2    : ', array2);
//     console.log('array Summ : ', arrayResult);
//     return arrayResult
// };
// arraysSummElementsByIndex(ar1,ar2);


// // - *** приймає масив та число "i", та міняє місцями обєкт який знаходиться в індексі "i" на "i+1"
// let ar3 = [2,3,'a',5,7,100];
//
// let arrayChangeByI = (array,i) => {
//     if (i < array.length) {
//         let x = array[i];
//         array[i] = array[i+1];
//         array[i+1] = x;
//         console.log(array)
//     }else {
//         console.log("'i' is bigger then array's length, please change it.")}
// }
// arrayChangeByI(ar3,2);


//     // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//     // Зберігаючи при цьому порядок не нульових значень.
//     // Двожина масиву від 2 до 100
//     // Приклад
//
// let ar4 = [0,0,2,0,0,1,0,6,0,0,3];
// let arrayMove00toEnd = (array) => {
//     if (array.length > 1 && array.length <= 100) {
//         for (let i = array.length-2; i >= 0 ; i--) {
//             if (array[i] === 0) {
//                 array.splice(i,1);
//                 array.push(0)
//             }
//         }
//     }else {
//         console.log("Array's length is not in interval 2 -- 100 , please change array")
//     }
//     return array
// };
// console.log(arrayMove00toEnd(ar4));


//     // Створити функцію яка :// - Додає в боді блок з текстом "Hello owu"
// divHello = () => {
//     let div = document.createElement('div');
//     div.innerText = 'Hello OWU !!!';
//     document.body.appendChild(div)
// }
// divHello();


//     // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function anyElementWithText(tag = 'div',text) {
//     let box = document.createElement(tag);
//     box.innerText = text;
//     document.body.appendChild(box)
// };
// anyElementWithText('h1','Title');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
let cars = [
    {model:'bmv',year:2000, power:150, color:'white',driver:{name:"Jhon", age:31, sex:"man"}},
    {model:'ford',year:1999, power:60, color:'green',driver:{name:"Thom", age:24, sex:"man"}},
    {model:'Mercedes',year:2019, power:350, color:'silver',driver:{name:"Lora", age:99, sex:"woman"}},
    {model:'Audi',year:2006, power:180, color:'black',driver:{name:"Tim", age:19, sex:"man"}},
    {model:'WV',year:2015, power:115, color:'red',driver:{name:"Leon", age:55, sex:"man"}}
];

// function arrayInDivAddId(array,id) {
//     let container = document.createElement('div');
//     container.classList.add(id);
//     for (const car of array) {
//         let divCar = document.createElement('div');
//         for (const carKey in car) {
//             if (carKey === 'model'){
//                 let nameCar = document.createElement('h2');
//                 nameCar.innerText = car[carKey];
//                 divCar.appendChild(nameCar)
//             }else if (typeof car[carKey] === 'object'){
//                 let divDriver = document.createElement('div');
//                 let divProp = document.createElement('div')
//                 divProp.innerText = `${carKey}:  ${car[carKey]}`;
//                 divDriver.appendChild(divProp)
//                 for (const drive in car[carKey]) {
//                     let divPro = document.createElement('div')
//                     divPro.innerText = `${drive}:  ${car[carKey][drive]}`
//                     divDriver.appendChild(divPro)
//                     }
//                 divCar.appendChild(divDriver);
//             }else {
//                 let divProp = document.createElement('div')
//                 divProp.innerText = `${carKey}:  ${car[carKey]}`;
//                 divCar.appendChild(divProp)
//             }
//         }
//         container.appendChild(divCar);
//     }
//
//     document.body.appendChild(container)
// }
// arrayInDivAddId(cars,'cars')

//     // ***********************
//     // це ж завдання, тільки з рекурсивною функцією :
//     //        _________________________________________
// arrayObjectsInDivAddId2(cars,'cars');
//
// function arrayObjectsInDivAddId2(array,id) {
//     let container = document.createElement('div');
//     container.classList.add(id);
//     for (const object of array) {
//         let divObject = document.createElement('div');
//         divObject.classList.add('object');
//         divObject.style.border = '1px solid black';
//         divObject.style.backgroundColor = randomRGBa20();
//         divObject.style.padding = '20px 0';
//         divObject.style.marginTop = '10px';
//         namedObjectToDivs(object,'model',2,divObject);
//         container.appendChild(divObject);
//     }
//     document.body.appendChild(container)
// }
//
// function namedObjectToDivs(object,name,h,father) {
//     let boxObject = document.createElement('div');
//     boxObject.classList.add(name);
//     boxObject.style.padding = '0 20px';
//     father.appendChild(boxObject);
//     for (const key in object) {
//         if (key === name ){
//             let keyTitle = document.createElement('span');
//             keyTitle.innerText = key;
//             keyTitle.style.textDecoration = 'underline';
//             boxObject.appendChild(keyTitle);
//             let nameTitle = document.createElement(`h${h}`);
//             nameTitle.innerText = object[key];
//             nameTitle.style.marginTop = '0.1rem';
//             boxObject.appendChild(nameTitle)
//         }else if (typeof object[key] === 'object'){
//             // let divProp = document.createElement('div');
//             // divProp.classList.add(key)
//             // divProp.innerText = `${key}:  `;
//             // boxObject.appendChild(divProp)
//             divProperty(key,'',boxObject);
//             namedObjectToDivs(object[key],'name',h+1,father)
//         }else {
//             divProperty(key,object,boxObject)
//         }
//     }
// }
//
// function divProperty(key, object, father) {
//     let divProp = document.createElement('div');
//     divProp.classList.add(key);
//     if (object == '') {
//         divProp.innerText = `${key}:  `;
//     }else {
//         divProp.innerText = `${key}:  ${object[key]}`;
//     }
//     father.appendChild(divProp)
// }


//***********************************

//     // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//     // та повертає масив цих з'єднаних об'єктів.
//     // Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// let cloneArray = (array) => JSON.parse(JSON.stringify(array));
//
// function combinerArrays(array1,array2) {
//     let combineArray = [];
//     let cloneArray1 = cloneArray(array1);
//     for (const object1 of cloneArray1) {
//         let objectCom = object1;
//         for (const object2 of array2) {
//             if (object1.id === object2.user_id) {
//                 for (const object2Key in object2) {
//                     objectCom[object2Key] = object2[object2Key]
//                 }
//             }
//         }
//         combineArray.push(objectCom)
//     }
//     console.log(combineArray);
//     return combineArray
// }
// let combinedArrays = combinerArrays(usersWithId,citiesWithId);


//     // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     //     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     //     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [{
//     title: 'Первое правило Бойцовского клуба.',
//     body: 'Никому не рассказывать о Бойцовском клубе.'
// }, {
//     title: 'Второе правило Бойцовского клуба.',
//     body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// }, {
//     title: 'Третье правило Бойцовского клуба.',
//     body: 'В схватке участвуют только двое.'
// }, {
//     title: 'Четвертое правило Бойцовского клуба.',
//     body: 'Не более одного поединка за один раз.'
// }, {
//     title: 'Пятое правило Бойцовского клуба.',
//     body: 'Бойцы сражаются без обуви и голые по пояс.'
// }, {
//     title: 'Шестое правило Бойцовского клуба.',
//     body: 'Поединок продолжается столько, сколько потребуется.'
// }, {
//     title: 'Седьмое правило Бойцовского клуба.',
//     body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// }, {title: 'Восьмое и последнее правило Бойцовского клуба.',
//     body: 'Новичок обязан принять бой.'},
// ];
// let  divid = document.createElement('div');
// divid.id = 'conteiner';
// document.body.appendChild(divid);
// for (const rule of rules) {
//     let h1 = document.createElement('h1');
//     h1.innerText = rule.title;
//     document.body.appendChild(h1)
//     let p = document.createElement('p');
//     p.innerText = rule.body;
//     document.body.appendChild(p);
// }
// let ul = document.createElement('ul');
// let contain = document.getElementById('conteiner');
// contain.appendChild(ul);
// let titles = document.getElementsByTagName('h1');
// for (const title of titles) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     a.innerText = title.innerText;
//     a.style.cursor = 'pointer';
//     li.appendChild(a);
//     ul.appendChild(li);
// }
//
// //  !!!!  Окремо це завдання із Таска4 є в файлі "Danylyshyn_less4_Rules.html"



//     // ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
//     // Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
//     // Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//     // Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(posts => posts.json())
//     .then(postsJSON => {
//         fetch('https://jsonplaceholder.typicode.com/comments')
//             .then(comments => comments.json())
//             .then(commentsJSON => {
//             for (const post of postsJSON) {
//                 document.write('<hr>');
//                 document.write('<hr>');
//                 for (const postsKey in post) {
//                     document.write(postsKey,': ',post[postsKey]);
//                     document.write('<br>');
//                 }
//                 document.write('<hr>');
//                 for (const comment of commentsJSON) {
//                     if (comment.postId === post.id) {
//                         for (const commentKey in comment) {
//                             document.write('--->');
//                             document.write(commentKey,': ',comment[commentKey]);
//                             document.write('<br>');
//                         }
//                         document.write('************************************************<br>')
//                     }
//                 }
//             }
//             })
//     });