let jamiliaPerson = {
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

const address = {
    country: "Russia",
    city: "Moscow"
}

// ====== using spread operator ========

/*
const person = {
    firstName: jamiliaPerson.firstName,
    age: jamiliaPerson.age,
    address: {
        city: address.city,
        country:  address.country
    }
} */

const person = {
    ...jamiliaPerson,
    ...address
}


const person2 = {
    ...jamiliaPerson,
    address: {...address}
}

console.log(person)
console.log(person2)

// ========= enhanced object properties ========

// const calculator = (brand, price) => ({
//     brand: brand,
//     price: price
// })

const brandProp = "BRAND"
const calculator = (brand, price) => ({
    [brandProp.toLowerCase()]: brand,
    price,
    getDiscount(size){
        return this.price - (this.price * size)
    }
})

const casio = calculator("casio", 10)
console.log(casio)
console.log(casio.getDiscount(.30))

const _person = {
    firstName: "Jamilia",
    cars: ["Ferrari", "Tesla"],
    toString: ()=>{
        console.log(`Name: ${this.firstName}`);
        const that = this;
        this.cars.forEach(car=>{
            console.log(`Name: ${that.firstName} drives ${car}`)
        })
    },
    deleteMe: true
}

_person.toString()