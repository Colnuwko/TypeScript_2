let data = [3.14, 2.718, 1.618, 4.669, 9.81, 6.626, 0.577, 2.303, 1.414, 5.432];
console.log(data);
function removeZeroElements(data) {
    let min = data[0];
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= min) {
            min = data[i];
        }
    }
    return min;
}
const preparedData = removeZeroElements(data);
console.log(preparedData);
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
function count_zero(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                count++;
            }
        }
    }
    return count;
}
const count = count_zero(matrix);
console.log(count);
const tuple = ['Раз строка ', 'Два строка ', 'Три строка'];
const showTuple = (tuple) => {
    return tuple[0].concat(tuple[1], tuple[2]);
};
console.log(showTuple(tuple));
var SomePrinter;
(function (SomePrinter) {
    SomePrinter["Printer_1"] = "Pantum P2207";
    SomePrinter["Printer_2"] = "HP LaserJet M141a";
    SomePrinter["Printer_3"] = "Canon Pixma G1420";
})(SomePrinter || (SomePrinter = {}));
console.log(SomePrinter.Printer_1, SomePrinter.Printer_2, SomePrinter.Printer_3);
class Pet {
    constructor() {
        this.name = '';
        this.age = -1;
    }
    speak() {
        return this.name.concat(" - имя\n", String(this.age), " - возраст\n");
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.name = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return this.name.concat(" - имя\n", String(this.age), " - возраст\n");
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return this.name.concat(" - имя\n", String(this.age), " - возраст\n");
    }
}
const somePet = new Pet();
console.log(somePet.speak());
const someCat = new Cat();
console.log(someCat.speak());
const someDog = new Dog();
console.log(someDog.speak());
const obj1 = {
    name: 'qwerty',
    age: 12,
    enum1: SomePrinter.Printer_1,
    eof: null,
};
const jsonObject = JSON.stringify(obj1);
console.log(jsonObject);
const objParsed = JSON.parse(jsonObject);
let partObject = objParsed.enum1;
console.log(objParsed);
