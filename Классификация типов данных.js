let number = 4;

console.log(4/0); // infinity (бесконечность)
console.log('string' * 9); // NaN ( Not a Number (не число))

const person = 'Alex'; // String, также может быть и "const person = '5';"

const bool = true;

console.log(something); // null, так как этой переменной просто нет

let und;
console.log(und); // Undegined, так как значение этой переменной не указано

let obj = {
    name: 'John',
    age: 24,
    IsMarried: false
};
console.log(obj.name); // или "console.log(obj["name"]);"

let arr = ['plum.png', 'orange.png', 4, 'apple.bmp', {}, []]; // Массив (array)
console.log(arr[1]); //выйдет orange.png