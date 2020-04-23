
    // Взяти файл template_2.html та працювати в ньому
    // - Напишіть код, який :
    // -- змінює колір тексту елемнту з ід main_header на будь-який інший
document.getElementById('main_header').style.color = 'violet';

    // -- робить шириниу елементу ul 400 пікселів
document.getElementsByTagName('ul')[0].style.width = '400px';

    // -- робить шириниу всіх елементів з класом linkList шириною 50%
let elementsByClassName = document.getElementsByClassName('linkList');
for (const elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.style.width = '50%';
}

    // -- отримує текст який зберігається в елементі з класом listElement2
let elementsByClassName2 = document.getElementsByClassName('listElement2');
for (const elementsByClassName2Element of elementsByClassName2) {
    console.log(elementsByClassName2Element.innerText);
}

    // -- отримує всі елементи li та змінює ім колір фону на сірий
let elementsByTagNameLi = document.getElementsByTagName('li');
for (const elementsByTagNameLiElement of elementsByTagNameLi) {
    elementsByTagNameLiElement.style.backgroundColor = 'lightgrey'
}

    // -- отримує всі елементи 'a' та додає їм клас anchor, та у випадку,
    // якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let elementsByTagNameA = document.getElementsByTagName('a');
for (const elementA of elementsByTagNameA) {
    elementA.classList.add('anchor');
    if (elementA.innerText === 'link3') {
        elementA.style.fontSize = '40px'
    }
}

    // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let elementsTagA = document.getElementsByTagName('a');
for (const tagAElement of elementsTagA) {
    tagAElement.classList.add(`${tagAElement.innerText}`)
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. (Фон отримати з prompt())
// let elementsSubHeader = document.getElementsByClassName('sub-header');
//     for (let key=0; key < elementsSubHeader.length; key++) {
//         elementsSubHeader[key].style.backgroundColor = prompt(`Enter ${key+1} sub-header's background Color :`,'greenyellow');
//     }

//    or ...
let elementsSubHeader = document.getElementsByClassName('sub-header');
let backColor = prompt('Enter sub-headers background Color :','greenyellow');
for (const subHeaderElement of elementsSubHeader) {
    subHeaderElement.style.backgroundColor = backColor
}

    // -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо
    // текст елемнту = content 2 segment . Колір отримати з prompt()
let elementsHeader = document.getElementsByClassName('sub-header');
for (const headerElement of elementsHeader) {
    if (headerElement.innerText === 'content 2 segment') {
        headerElement.style.color = prompt('Enter text Color :','red')
    }
}

    // -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let elementsContent1 = document.getElementsByClassName('content_1');
for (const element of elementsContent1) {
    element.innerText = prompt('Enter TEXT to change in Element "content 1" :')
}

    // -- отримати елементи p та змінити їм paddin на довільне значення
let elementsTagP = document.getElementsByTagName('p');
for (const elementP of elementsTagP) {
    elementP.style.padding = `${prompt('Enter padding to paragraffs :')}px`
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let elementsText2 = document.getElementsByClassName('text2');
for (const element of elementsText2) {
    element.innerText = prompt('Enter any text:')
}

