// ===================================
let numbers = [1,2,3,4,5]

const indexOfFive = numbers.indexOf(3)
console.log(numbers)
console.log(indexOfFive)

numbers.splice(indexOfFive)
console.log(numbers)
// ===================================
numbers = [1,2,3,4,5]

const numbersTimesTwo = numbers.map(number => number * 2);
console.log (numbers);
console.log (numbersTimesTwo);
// ========= Arrays Reduce ===========
// returns 1 value from array 

const result = numbers
    .reduce((accumulator,current) =>  accumulator + current)

console.log(result)


// Arrays spread operator
const a = [1,2,3]
const b = [4,5]

const numberAB = [...a, ...b]
console.log(numberAB)

const add = (n1,n2) => n1 + n2
console.log (add(...a)) // taking only 1st 2 params
console.log (add(...b))

// working with arrays:

const people = [
    "Artemiy",
    "Jamilia",
    "Arslan",
    "Denis",
    "Alex"
];

// used in react mostly 
// for managing the state
const [art, jam, ars, ...rest] = people;
console.log(art);
console.log(jam);
console.log(ars);
console.log(rest);

// ... ¯\_(ツ)_/¯ ... 
const map = new Map();
map.set('1', 100);
map.set(1, 200);

console.log(map.get(1));
console.log(map);
console.log(map.has(1));
console.log(map.has(100));

// map.size;
// map.clear();
// map.keys();
// map.values();
// Object.fromEntries(map.entries());

map.forEach(e => console.log(e));



