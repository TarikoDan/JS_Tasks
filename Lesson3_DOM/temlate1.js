//
//     // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//     //
//     // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     // - отримує текст з параграфа з id "content"
// document.getElementById("content").innerText;
//
//     // - отримує текст з блоку з id "rules"
// document.getElementById("rules").innerText;
//
//     // - замініть текст параграфа з id 'content' на будь-який іншиqq
// document.getElementById("content").innerText = '// - замініть текст параграфа з id \'rules\' на будь-який інший\n' +
//                                                     '    // - змініть кожному елементу колір фону на червоний\n' +
//                                                     '    // - змініть кожному елементу колір тексту на синій\n' +
//                                                     '    // - отримати весь список класів елемента з id=rules і вивести їх в console.log\n' +
//                                                     '    // - отримати всі елементи з класом fc_rules\n' +
//                                                     '    // - поміняти колір тексту у всіх елементів fc_rules на червоний';
//
//     // - замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById("rules").innerText = 'Чому в мене не працює Lorem???';
//
//     // - змініть кожному елементу колір фону на червоний та змініть кожному елементу колір тексту на синій
// let allElements = document.body.getElementsByTagName('*');
// for (let allElement of allElements) {
//     allElement.style.backgroundColor = 'silver';
//     allElement.style.color = 'blue'
//     };
//
//     // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(document.getElementById('rules').classList);
//
//     // - отримати всі елементи з класом fc_rules та  поміняти колір тексту у всіх елементів fc_rules на червоний
// let elementsByClassName = document.getElementsByClassName('fc_rules');
//     for (let elementsByClassNameElement of elementsByClassName) {
//         console.log(elementsByClassNameElement);
//         elementsByClassNameElement.style.color = 'red'
//     }
//
