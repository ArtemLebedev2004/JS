"use strict";

let num = 4;

while (num < 7) {
    console.log(num);
    num++;
}

let mark = 2;
mark++;
while (mark <= 5) {
    console.log("До 5-ки ещё чуть-чуть осталось. У тебя уже: ", mark++);
}
console.log('Молодец!');

let num2 = 7;

do {
    console.log(num2);
    num2++;
}
while (num2 < 14);

let num3 = 6;

for (let i = 4; i < 8; i++) {
    console.log(num3);
    num3++;
}

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        //break;
        continue;
    }
    console.log(i);
}