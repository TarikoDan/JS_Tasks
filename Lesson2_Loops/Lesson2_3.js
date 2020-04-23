
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrNum = [2,17,13,6,22,31,45,66,100.5,-18];
//     1. перебрати його циклом while
let i = 0;
while (i in arrNum) {
    console.log('['+i+'] = ',arrNum[i]);
    i++;
}
console.log('\n');
//     2. перебрати його циклом for
for (i = 0; i < arrNum.length; i++) {
    console.log('['+i+'] = ',arrNum[i]);
}
console.log('\n');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i in arrNum) {
    if (arrNum[i] % 2 === 1) {
        console.log('['+i+']odd = ',arrNum[i]);
    } else if (arrNum[i] % 2 === 0) {
        console.log('['+i+']even = ',arrNum[i]);
    } else {
        console.log('['+i+"] isn't an integer",arrNum[i]);
    }
    i++;
}
console.log('\n');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
        console.log('['+i+']even = ',arrNum[i]);
    } else if (arrNum[i] % 2 === 1) {
        console.log('['+i+']odd = ',arrNum[i]);
    } else {
        console.log('[' + i + "] isn't an integer", arrNum[i]);
    }
}
console.log('\n');
// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 3 === 0) {
        arrNum[i] = 'okten'
    }
}
console.log(arrNum);
// 8. вивести масив в зворотньому порядку.
let arrNumReverse = arrNum.reverse();
console.log(arrNumReverse);  //  1 спосіб

arrNum.reverse();
console.log('\n');

for (i = arrNum.length-1; i>=0; --i) {
    console.log(arrNum[i])       //2-й спосіб
}
console.log('\n');

let arrNumReverse1 = [];        //3-й спосіб
for (i=0; i < arrNum.length; i++) {
    arrNumReverse1 [i] = arrNum[arrNum.length-i-1]
}
console.log(arrNumReverse1);
console.log('\n');

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
let numsEven = [], numsOdd = [];
for (i = 0; i < 50; i++) {                  // 1 спосіб
    numsEven[i] = Math.round(Math.random()*100 + 1)*2;
    numsOdd[i] = Math.round(Math.random()*100)*2+1;
}
console.log(numsEven);
console.log(numsOdd);
console.log('\n');

//
numsEven = [];
i = 0;                                    // 2 спосіб
while (numsEven.length < 5) {
    let n = +prompt( 'Enter number', 'ONLY even number');
    if ((n % 2 === 1) || isFinite(n)) continue;  // Як виключити можливість потрапляння NaN ???
        numsEven [i] = n;
         i++;
}
console.log(numsEven);
console.log('\n');


// 3. используя Math.random заполнить массив диапазон рандома 8 до 732.
let arrRandom = [];
for (i = 0; i < 10;) {
    n = Math.round(Math.random()*1000);
    if (n < 8 || n > 732) continue
    arrRandom [i] = n;
    i++;
}
console.log(arrRandom);
console.log('\n');

// 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
//    записать их в другой массив.
arrRandom = [];
let arrRandom3 = [];
let j = 0;
for (i = 0; i < 20;) {
    n = Math.round(Math.random()*1000);
    if (n < 8 || n > 732) continue
    arrRandom [i] = n;
    i++;
    if (i % 3 === 0) {
        console.log(arrRandom[i-1]);
        arrRandom3[j] = n;
        j++
    }
}
console.log(arrRandom);
console.log(arrRandom3);
console.log('\n');

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
arrRandom = [];
for (i = 0; i < 20;i++) {
    n = Math.round(Math.random()*100);
    arrRandom [i] = n;
    if (i > 0 && n % 2 === 0) {
        console.log(arrRandom[i-1]);
    }
}
console.log(arrRandom);
console.log('\n');

// 6 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let goods = [100,250,50,168,120,345,188];
let sum = i = 0;
while (i in goods) {
    sum += goods[i];
    i++;
}
let check = sum / goods.length;
console.log('середній чек: ', +check.toFixed(2));
console.log('\n');

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
arrRandom = [];
let  arrRandom5 = [];
for (i = 0; i < 10;i++) {
    n = Math.round(Math.random() * 10);
    arrRandom [i] = n;
    arrRandom5 [i] = arrRandom [i]*5;
}
console.log(arrRandom);
console.log(arrRandom5);
console.log('\n');

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

let arrAny =[]; arrAnyNums = [];   //??? Чи можна якось обєднати ініціалізацію кількох масивів в одній стрічці?
j = 0;
n = +prompt('Введіть кількість ітерацій:', 5);
alert('Введіть '+n+' елементів...');
for (i=0; i < 10; i++) {
    arrAny[i] = prompt('Enter any data');
    if (isFinite(arrAny[i])){
        arrAnyNums [j] = +arrAny [i];
        j++
    }
}
console.log('arrAny', arrAny);
console.log('arrAnyNums', arrAnyNums);

