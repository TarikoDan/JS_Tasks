// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr0 = [ 'a', 'b', 'c'];
let i = 0;
while (i < arr0.length) {
    document.write(arr0[i]);
    i++;
}
document.write('<br>');
for (i in arr0) {
    document.write(arr0[i]);
}
document.write('<br>');
for (i of arr0) {
    document.write(i);
}

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr = [ 'a', 'b', 'c'];
for (i=1;i<4;i++) {
    arr.push(i)
}
console.log(arr);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arrNum = [1,2,3];
arrNum = [arrNum[2],arrNum[1],arrNum[0]];
console.log(arrNum);
// - - -- Додайте йому в кінець елементи 4, 5, 6.
arrNum.push(4,5,6);
console.log(arrNum);

// -  - - - - Додайте йому в початок елементи 4, 5, 6.
arrNum.unshift(4,5,6);
console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
arrNum = [1, 2, 3, 4, 5]
arrNum.splice(1,2);
console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let arrNum1 = arrNum.slice(-2);
console.log(arrNum1);
arrNum1 = arrNum.slice(0,2);
console.log(arrNum1);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arrNum = [1,2,3,4,5];
arrNum.splice(1,0,'a', 'b');
arrNum.splice(-2,0,'c');
arrNum.splice(-1,0,'e');
console.log(arrNum);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrNum10 = [];
for (i=0; i<10; i++){
    arrNum10[i] = Math.round(Math.random()*10);
}
console.log(arrNum10)
for (even of arrNum10) {
    if (even%2 === 0) {
        console.log(even)
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let arrEmpty = [];
for (even of arrNum10) {
    arrEmpty.push(even)
}
console.log(arrEmpty)
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrEmpty2 = [];
for (i=0; i < arrEmpty.length;i++ ) {
    arrEmpty2[i] = arrEmpty[i]
}
console.log(arrEmpty)

//
