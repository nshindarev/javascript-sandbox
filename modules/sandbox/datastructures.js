/**
 *  ===== working with objects =====
 */

let person = {
    firstName: "Jamilia",
    age: "31",
    isFemale: true,
    balance: 100.32,
    dob: new Date(1991, 7, 4),
    address: {
        city: "Antalya",
        postIndex: "190323"
    },
    toString: function() {
        return `Name: ${this.firstName} Age: ${this.age}`
    }
}

// console.log(person.toString())
console.log(JSON.stringify(person))
console.log()

// person.lastName = "Chupyrkina"
person["lastName"] = "Chupyrkina"
person["deleteMe"] = true

console.log(JSON.stringify(person))
console.log()



delete person["deleteMe"]
console.log(JSON.stringify(person))
console.log()

for (const p in person){
    console.log (p)
    console.log (person[p])
}

console.log(Object.keys(person))
console.log(Object.values(person))


// ===== object destructuring ============
// const firstName = person.firstName, ...
const { 
    firstName: {objName}, 
    age, 
    balance, 
    address: { city: town } 
} = person;

console.log (objName);

// ======= spread operator ===============
