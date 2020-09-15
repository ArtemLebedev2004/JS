let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Передаёт ссылку объекта
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); // Перемещение объекта add в объект numbers

const clone = Object.assign({}, add); // Перемещение add в clone
clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ssgsgshshs';
console.log(newArray); // Это изменится  
console.log(oldArray); // Это не изменится

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);  // Выведет один большой массив с данными

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];

const newAarray = [...array]; // копия

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};