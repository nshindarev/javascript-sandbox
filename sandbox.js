var firstName = "Jamilia";
var age = 31;
var isFemale = true;
var balance = 100.32;
var dob = new Date (1991, 06, 03);
var empty = undefined;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof balance);
console.log(typeof dob);
console.log(typeof empty);


var person = {
    age: 21,
    name: "Daria",
    address: {
        street: "Nevskiy",
        house: 21
    }
};

console.log(person.age);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));

/**
 *  ===================================================
 */


var number1 = 1;
var number2 = 2;

function plus2 (number1){
    number1 += 2;
    return number1;
}

plus2(number1);
console.log(number1);


/**
 *  ===================================================
 */

var names = [
    "Alex",
    "Jamila", 
    "Joe", 
    "Aisha",
    "Bob"
];

console.log("fori");

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log();
console.log("for of");

for (const name of names) {
    console.log(name);
}
