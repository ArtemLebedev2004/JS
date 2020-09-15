"use strict";

if (4 == 4) {
    console.log('Ок!');
} else {
    console.log('error!')
}

const mark = 4;

if (mark <= 3) {
    console.log('Bad!');
} else if (mark == 4) {
    console.log('Good!');
} else {
    console.log('Very good!!!');
}

(mark >= 4) ? console.log('Good!') : console.log('Bad!'); // Тернарный оператор, потому что 3 аргумента

const mark2 = 5;

switch (mark2) {
    case 2:
        console.log('Very bad!!!');
        break;    
    case 3:
        console.log('Bad!!!');
        break;   
    case 4:
        console.log('Good!!!');
        break;
    case 5:
        console.log('Very good!!!');
        break;
    default: // Если ни одно значение не подошло
        console.log('Ты где был?');
        break;
}

