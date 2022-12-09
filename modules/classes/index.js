import Person, { SoftwareEngineer } from "./person.js";

const alex = new Person(`Alex`,`male`, 25);
const nick = new SoftwareEngineer(`Nick`,`male`, 26, [`java`,`js`]);




console.log(alex.toString());
alex.eat();