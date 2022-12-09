class Person{

    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    sleep () {
        console.log(`${this.name} sleeping`)
    }

    eat () {
        console.log(`${this.name} eating`)
    }

    toString() {
        return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`
    }
}


class SoftwareEngineer extends Person {
    constructor (name, age, gender, languages){
        super(name, age, gender);
        this.programmingLanguages = languages;
    }

    code(){
        console.log(`${this.toString} coding on ${this.programmingLanguages}`);
    }
}

export {
    Person, 
    SoftwareEngineer
}
