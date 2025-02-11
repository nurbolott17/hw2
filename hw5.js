const answer = Math.floor((Math.random() * 100) + 1)
console.log(answer)

function guessTheNumber() {
    userAnswer = parseInt(prompt('Угадай число то 1 до 100'))

    while (userAnswer !== answer) {
        
        if (userAnswer === answer) {
            
            break;
        } else  if (userAnswer > answer){
            userAnswer = parseInt(prompt('Ты не угадал, число корторую я загодал меньше чем  ' + ' ' + userAnswer))
            
        }
        else if (userAnswer < answer){
            userAnswer = parseInt(prompt( 'Ты не угадал, число корторую я загодал ,больше чем '+ ' ' + userAnswer))       
        }
        else {
            userAnswer = parseInt(prompt(userAnswer + '- Это не число , напиши число !!! '))
        }
        } 
        alert('Молодец, ты угадал');   
        console.log('Игра завершена')
    }    


    
// Задание 1

function minValye(a, b) {
    if (a < b) {
        return (a);
    } else {
        return(b)
    }
}
console.log(minValye(4, 8))
console.log(minValye(6, 6))

// Задание 2

function checkingForParity(a) {
    if (a % 2 === 0) {
        return ('Число четное')
    } else {
        return ('Число нечетное')
    }
}
console.log(checkingForParity(5))


// Задание 3

function numSquared(a){
    b = a ** 2
    return(b)
    
}
console.log(numSquared(5))
console.log(b)

// Задание 4
function whatAge(age){
    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if ((age === 0) || (age <= 12)){
        alert('Привет, друг!')
    } else if (age >= 13){
        alert('Добро пожаловать!')
    }else {
        alert ('У тебя где-то опечатка. Попробуй заново')
    }
}
(whatAge((prompt('Сколько тебе лет?'))))

// Задание 5

function mult(a, b){
    isNaN(a, b)
    if (isNaN(a, b) === false) {
        return( a * b)
    }
     else {
        alert('Одно или оба значения не являются числом');
    }
}
console.log(mult(5, 4)) 


// Задание 6


function numCube(n) {
    isNaN(n)
    if (isNaN(n) === false) {

        return(n  + ' в кубе равняется ' + n**3 )
    } else {
        return('Переданный параметр не является числом')
    }
}
console.log(numCube(prompt('Веди число которую надо возыезсти в куб')))


// Задание 7

function getArea() {
    getArea = Math.PI * this.radius**2;
    return(getArea)
    
}
function getPerimeter() {
    getPerimeter = 2 * Math.PI * this.radius;
    return(getPerimeter)
}

const circle1 = {
    radius: 9,
    getArea: getArea,
    getPerimeter: getPerimeter,

}

const circle2 = {
    radius: 7,
    getArea:  getArea,
    getPerimeter: getPerimeter, 
}

console.log('Площядь первого круга равна ' + circle1.getArea(),'Площядь второго круга равна ' + circle2.getArea())
console.log('Периметр первой окружности равна ' + circle1.getPerimeter(),'Периметр второй окружности равна ' + circle2.getPerimeter())