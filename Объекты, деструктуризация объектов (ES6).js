const options = {
    name: 'test',
    width: 1824,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {          // Свой метод
        console.log("Test");
    }
};

options.makeTest();

// Деструктуризация объектов
const {border,bg} = options.color;
console.log(border);

// console.log(options["color"]["border"]); // Выведет black
// console.log(options.name);
// delete options.name; // УДалит св-во 'name'
// console.log(options);

// Переборка св-в в объекте


for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
        }
}

//Счетчик

console.log(Object.keys(options),length);
   
