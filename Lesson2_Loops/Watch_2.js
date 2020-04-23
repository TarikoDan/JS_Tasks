// Це інший варіант годинника... я ще вчора не знав про лейбел та брейк )))
let h = 0;
timerOff: while (h < 24) {
    let m = 0;
    while (m < 60) {
        if (h === 2 && m === 20) {
        break timerOff;}
        let s=0;
        while (s < 60) {
            console.log(h, ' hours', m, ' min',s, ' s');
            s++;}
        m += 1;
    }h += 1;
}alert('Готово!');
