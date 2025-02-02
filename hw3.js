let pasworduser = 'Skypro01';
let pasword = prompt('Введите пароль')

if (pasword === pasworduser) {alert('Пароль введен верно')
    
} else {
    alert('Пароль введен неправильно')
} 

// 2-Задаие

let c =Number( prompt('введите число'));

if (c > 0 && c < 10) { console.log('Верно')
    
} else {
    console.log('Неверно')
}


// 3-Задание

let d = 232
let e = 160

if (d === 100 || c === 100) {alert('Верно')
    
} else {
    alert('Неверно')
    
}

// 4-Задание

let a = Number('2');
let b = Number('3');

alert (a + b)

// 5-Задание


let monthNumber = Number(prompt('Ведите номер месяца'))

switch (monthNumber) {
    case 1:
        alert('Зима')
        break;
    case 2:
        alert('Зима')
        break;
    case 3:
        alert('Весна ')
        break;
    case 4:
        alert('Весна') 
        break;
    case 5:
        alert('Весна')
        break;
    case 6:
        alert('Лето')
        break;
    case 7:
        alert('Лето')
        break;
    case 8:
        alert('Лето')
        break;
    case 9:
        alert('Осень')
        break;
    case 10:
        alert('Осень')
        break;
    case 11:
        alert('Осень')
        break;
    case 12:
        alert('Зима')
        break;
    
    default:
        alert('Нет такого номера месяца')
        break;
}
