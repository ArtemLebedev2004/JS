'use strict';

let DB = {
    Integer: 'Целочисленный',
    String: 'Строка',
    Boolean: 'Логический (true/false)',
    Null: 'Если п-тель нажал кнопку "отмена"',
    Undefined: 'Не найденная или неизвестная переменная, или необъявленная переменная и т.д.',
    Symbol: 'Символ',
    BigInit: 'Большое число'
};

console.log('В языке JavaScript есть такие типы данных:');
console.log('');

for (let key in DB) {
    if (typeof(DB[key]) === 'object') {
        console.log('Произошла ошибка');
    } else {
            console.log(`Тип данных ${key} означает: ${DB[key]}`);
    }
}

