const person = {
    firstName: "Jamila",
    cars: ["Ferrari", "Tesla"],
    toString() {
        console.log(`Name: ${this.firstName}`)
        this.cars.forEach(car => {
            console.log(`Name: ${this.firstName} drives ${car}`)
        });
    },
    deleteMe: true
};

person.toString()
