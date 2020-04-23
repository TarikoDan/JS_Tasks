// // https://github.com/GrayHead/js_demos/tree/master/this_one_folder_that_you_need/lesson3_DOM_objects/tasks/task2
//
// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// let obj1 = {name:'a', age:32, status:true};
// let obj2 = {sirname:'b', year:2032, sex:"male"};
// let obj3 = {type:'a', reg:140, street:"lenina"};
// let obj4 = {kod:48, phone:3225517, on:false};
// let obj5 = {color:'red', position:17, rgb:'133,17,55'};
//
// // // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// // // Опишите что угодно, машину, картину, болт... Пример :
// let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// //
// // // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// // for (const manKey in man) {
// //     console.log(manKey)
// // }
// // console.log("---")
// // // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// // console.log(Object.keys(man));
// // console.log("---")
//
// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// //    Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [
//     {model:'bmv',year:2000, power:150, color:'white',driver:{name:"Jhon", age:31, sex:"man"}},
//     {model:'ford',year:1999, power:60, color:'green',driver:{name:"Thom", age:24, sex:"man"}},
//     {model:'Mercedes',year:2019, power:350, color:'silver',driver:{name:"Lora", age:99, sex:"woman"}},
//     {model:'Audi',year:2006, power:180, color:'black',driver:{name:"Tim", age:19, sex:"man"}},
//     {model:'WV',year:2015, power:115, color:'red',driver:{name:"Leon", age:55, sex:"man"}}
// ];
// console.log(cars);
// // let objects = [
// //     {name:"Emmy", age:10, sex:"girl", kind:"setter", color:"red"},
// //     {name:"Roy", age:1, sex:"boy", kind:"terjer", color:"broun"},
// //     {name:"Teddy", age:7, sex:"boy", kind:"haski", color:"grey"},
// //     {name:"Lala", age:6.5, sex:"girl", kind:"doberman", color:"black"},
// //     {name:"Jhon", age:12, sex:"man", town:"LA", status:false},
// //     {name:"Taras", age:42, sex:"man", town:"Lviv", status:true},
// //     {name:"Tamara", age:2, sex:"woman", town:"Lviv", status:false},
// //     {name:"Iren", age:35, sex:"woman", town:"Odessa", status:true},
// //     {make:"Ford", model:"fokus", product:1995, type:"hetchback", color:"green"},
// //     {make:"Mercedess", model:"GLA", product:2019, type:"SUV", color:"silver"},
// //     {make:"Audi", model:"a6", product:2010, type:"sedan", color:"blue"},
// //     {make:"WV", model:"passat", product:2000, type:"combi", color:"red"},
// //     {street:"Bandery", house:22, number:199, rooms:2, lift:true},
// //     {street:"Striyska", house:7, number:5, rooms:4, lift:false},
// //     {street:"Chornovola", house:118, number:25, rooms:3, lift:true},
// //     {street:"Franka", house:4, number:5, rooms:1, lift:false},
// //     {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
// //     {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
// //     {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
// //     {name:"There's Always a Price Tag", author:"James H. Chase", issue:1956, genre:"detective", filmed:true},
// // ];
// // // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// // let k=0;
// // while (k in objects) {
// //     console.log(k,objects[k]);
// //     k++
// // }
// // console.log('---')
// // // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// // for (let i = 0; i < objects.length; i++) {
// //     const object = objects[i];
// //     console.log(i,object)
// // }
// // console.log('---')
// // // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// // for (const object of objects) {
// //     console.log(object);
// // }
// // - взять объекты из задания 1 и превратить каждый в json.
// // console.log(JSON.stringify(cars));
//
// // - взять json из задания 11 и превратить их обратно в объекты.
// // console.log(JSON.parse(JSON.stringify(cars)));
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let i = 0;
// let carsCopy = [];
// for (const car of cars) {
//     carsCopy[i] = JSON.parse(JSON.stringify(car));
//     carsCopy[i].parts = ['body'+i, 'engine'+i, 'chassis'+i];
//     i++;
// }
//
// console.log(carsCopy);
// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let parts = [];
// i = 0;
// for (const car of carsCopy) {
//     for (const part of car.parts) {
//         parts[i] = part;
//         i++;
//     }
// }
// console.log(parts);
// //
// // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//             {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//             {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//             {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//             {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// //
// //
//
/*let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];*/
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.


/*
for (const user of users) {
    let div = document.createElement('div');
    let text = '';
    for (const userKey in user) {
        if (typeof user[userKey] === 'object') {
            for (const key in user[userKey]) {
                text += user[userKey][key] + ', ';
            }
        } else {
            text += userKey + ': ' + user[userKey] + ', ';
        }
        div.innerText = text
    }
    document.body.appendChild(div);
}
*/
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//   розділивши всі властивості по своїм блокам (div>div*4)

/*
for (const user of users) {
    let divOuter = document.createElement('div');
    for (const userKey in user) {
        let divIn = document.createElement('div');
        let text = '';
        if (typeof user[userKey] === 'object') {
            for (const key in user[userKey]) {
                text += user[userKey][key] + ', ';
                divIn.innerText = text
            }
        } else {
            divIn.innerText = userKey + ': ' + user[userKey] + ', ';
        }
        divOuter.appendChild(divIn)
    }
    document.body.appendChild(divOuter);
}
*/


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
/*for (const user of users) {
    let divOuter = document.createElement('div');
    for (const userKey in user) {
        let divIn = document.createElement('div');
        if (typeof user[userKey] === 'object') {
            for (const key in user[userKey]) {
                let divAdress = document.createElement('div');
                divAdress.innerText = user[userKey][key] + ', ';
                divIn.appendChild(divAdress)
            }
        } else {
            divIn.innerText = userKey + ': ' + user[userKey] + ', ';
        }
        divOuter.appendChild(divIn)
    }
    document.body.appendChild(divOuter);
}*/


//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
                    {id: 2, name: 'petya', age: 30, status: true},
                    {id: 3, name: 'kolya', age: 29, status: true},
                    {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
                    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
                    {user_id: 2, country: 'Poland', city: 'Krakow'},
                    {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Трохи видозмінив завдання, щоб в новому масиві не було повторень айдішок (чисто для краси)
// і щоб не змінювався при цьому наш вихідний масив citiesWithId.
adresses = JSON.parse(JSON.stringify(citiesWithId));
let users = [];
for (const user of usersWithId) {
    for (const city of adresses) {
        if (city.user_id === user.id) {
            delete city.user_id;
            user.adress = city;
            users.push(user)
        }
    }
}
console.log(users);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
let div = document.createElement('div');
div.classList.add('class1');
div.id = 'id1';
div.innerText = '// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу\n'
document.body.appendChild(div);
// - змінити цей текст використовуючи селектори id, class,  tag
let dd = document.getElementsByTagName('div');
for (const divElement of dd) {
    divElement.innerText = '// - змінити цей текст \n'
}
let id = document.getElementById('id1');
id.innerText = '// - змінити цей текст використовуючи селектори id, class,  tag\n';
id.style.width = '100px';
let tag = document.getElementsByClassName('class1');
for (let i = 0; i < tag.length; i++) {
    tag[0].innerText = '454';
}
for (const tagElement of tag) {
    tagElement.style.width = '300px';
    tagElement.style.height = '20px'
}

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let table = document.createElement('table');
table.style.border = '2px solid red'
document.body.appendChild(table);
for (let i = 0; i < 5; i++) {
    let row = document.createElement('tr');
    table.appendChild(row);
    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.innerText = '#'+ (i+1) + '.' + (j+1);
        row.appendChild(cell);
        cell.style.border = '1px solid black';
        cell.style.width = '40px'
    }
}
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний
//
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//


let rules = [{
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.'
}, {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.'
}, {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.'
}, {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.'
}, {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.'
}, {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.'
}, {
    title: 'Седьмое правило Бойцовского клуба.',
    body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
}, {title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.'},
];
let  divid = document.createElement('div');
divid.id = 'conteiner';
document.body.appendChild(divid);
for (const rule of rules) {
    let h1 = document.createElement('h1');
    h1.innerText = rule.title;
    document.body.appendChild(h1)
    let p = document.createElement('p');
    p.innerText = rule.body;
    document.body.appendChild(p);
}
let ul = document.createElement('ul');
let contein = document.getElementById('conteiner');
contein.appendChild(ul);
    let titles = document.getElementsByTagName('h1');
    for (const title of titles) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = title.innerText;
        a.style.cursor = 'pointer';
        li.appendChild(a);
        ul.appendChild(li);
}

//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(postsJSON => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(comments => comments.json())
            .then(commentsJSON => {
            for (const post of postsJSON) {
                document.write('<hr>');
                document.write('<hr>');
                for (const postsKey in post) {
                    document.write(postsKey,': ',post[postsKey]);
                    document.write('<br>');
                }
                document.write('<hr>');
                for (const comment of commentsJSON) {
                    if (comment.postId === post.id) {
                        for (const commentKey in comment) {
                            document.write('--->');
                            document.write(commentKey,': ',comment[commentKey]);
                            document.write('<br>');
                        }
                        document.write('************************************************<br>')
                    }
                }
            }
            })
    });