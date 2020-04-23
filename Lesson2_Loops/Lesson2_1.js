// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arrDiff = [1,5,77,9**9,'My ','first ','girl ',true,9>=11,'was ','very ',90 =='90',98,-7,0,11.15,'cheerful ',false, 'and ', 'sexy ',2*2 === (2+2),'blond',-9.34,100]
// for (let i = 0; i < arrDiff.length; i++) {
//     if (typeof (arrDiff[i]) =='string') {
//         console.log(arrDiff[i])}}
// for (let i = 0; i < arrDiff.length; i++) {
//     if (typeof (arrDiff[i]) =='number') {
//         console.log(arrDiff[i])}}
// for (let i = 0; i < arrDiff.length; i++) {
//     if (typeof (arrDiff[i]) =='boolean') {
//         console.log(arrDiff[i])}}
//
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// // - !!! Трошки ускладнив собі задачу, вирішивши вивести у стовпчик відразу обидва завдання
// // і без нулів:
//
// for (let i = 1, j = 2; j < 102;i+=2, j+=2){
//     console.log(i,j);
//     document.write(i,', ',j,', ','<br>')}
// document.write('<hr>');
//
// // А також інший варіант, де кількість ітерацій = 100:
//
// let odd = even = '1';
// for (let i = 1; i < 101; i++){
//     if (i % 2 == 1) {
//         odd = i; even = '';
//     }else if (i % 2 == 0) {
//         even = i; odd = '__';
//     }
//     document.write(odd,even,'<br>')}
// document.write('<hr>');

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let h = 0; h < 3; h++ ) {
    for (let m = 0; m < 60; m++){
        if ((h*60 + m) < 140 ){
            for (let s = 0; s < 60; s++) {
                if ( m < 10 && s < 10) {
                    document.write(0, h, ':: ', 0, m, ':: ', 0, s, '<br>');
                }else if (m>=10 && s<10) {
                    document.write(0, h, ':: ',m, ':: ', 0, s, '<br>');
                }else if (m<10 && s>=10) {
                    document.write(0, h, ':: ',0, m, ':: ', s, '<br>');
                }else {
                    document.write(0, h, ':: ',m, ':: ',s, '<br>');
                }
            }
            document.write('<hr>');
        }
    }
}