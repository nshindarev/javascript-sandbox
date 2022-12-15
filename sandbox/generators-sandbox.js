const generator = function* (){
    yield 1;
    yield "Nikita";
    yield {name: "Alex", surname: "Suleimanov"};
}

const gen = generator();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


let res = gen.next();
while (!res.done){
    console.log(res.value);
    res = gen.next();
}