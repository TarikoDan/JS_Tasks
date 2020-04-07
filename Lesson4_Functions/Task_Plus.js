// 1) Точная степень двойки.
// //     Дано натуральное число N.
// //     Выведите слово YES, если число N является точной степенью двойки,
// //     или слово NO в противном случае.
// //     Операцией возведения в степень пользоваться нельзя!


// let isNumberPowOf2 = (number) => {
//         d = number / 2;
//         let i = 1
//         if (d === 1) {
//             console.log(`YES, its POWER of number 2`)
//         }else if (d >= 2) {
//             i += isNumberPowOf2(d)
//         }else {
//             console.log('No, its not POWER of number 2')
//         }
//         return i
//     }
// console.log(isNumberPowOf2(16))

// **********************************
// //
// //     2) Deep Copy
// // реалізувати глибоке копіювання обєкту за допомогою рекурсій
// let car = {model:'bmv',
//            year:2000,
//            power:150,
//            color:'white',
//            driver:{name:"Jhon",
//                age:31,
//                sex:"man",
//                status:true,
//                wifes:{first:{name:'Fatima',age:28},
//                       second:{name:'Natasha',age:20}
//                }
//            }
// };
//
// let objectCopy = (object) => {
//     let copy = {};
//     for (const name in object) {
//         if (typeof object[name] !== "object") {
//             copy[name] = object[name]
//         } else {
//             copy[name] = objectCopy(object[name])
//         }
//     }
//     return copy
// }
//
// let copy = objectCopy(car);
// copy.model = 'qqqqqqqqqq';
// copy.driver.name = 'hhhhhhhhhh';
// copy.driver.wifes.second.age = 1000000000;
// console.log("copy:",copy);
// console.log("car:",car);

// **********************************

// // 3) Flat
// // Вирівняти багаторівневий масив в однорівневий
// -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// // ===========додаткове========

// let arr = [1,3, ['Hello', 'World', [9,6,1]],['oops'], 9]
//
// let openArray = (arrayElem,array) => {
//     if (Array.isArray(arrayElem)) {
//         for (const item of arrayElem) {
//             Array.isArray(item) ? openArray(item,array) : array.push(item)
//         }
//     } else {
//         array.push(arrayElem)
//     }
// };
//
// let arrayToOneLevel = (array) => {
//     let oneLevelArray = [];
//     for (const arrayElement of array) {
//         openArray (arrayElement, oneLevelArray)
//     }
//     return oneLevelArray
// }
// let res = arrayToOneLevel(arr)
// console.log(res)
// console.log(arr)
