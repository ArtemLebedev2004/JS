function first() {
    // Код
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


// Первый способ callback - функции

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JS', function() {
    console.log('Я прошёл этот урок!');
});

// Второй способ

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JS', done);