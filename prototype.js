// function Person(name, age){
// let person = {}

//     person.name = name;
//     person.age= age;
//     person.eat= function(){
//         console.log(`Person is eating`);
//     }
//     person.sleep= function(){
//         console.log(`Person is sleeping`)
//     }
//     return person
// }

// const sakib = Person("sakib", 20);
// const rakib = Person("rakib", 23)
function Person(name, age){
let person = {}

    person.name = name;
    person.age= age;
    person.eat= function(){
        console.log(`Person is eating`);
    }
    person.sleep= function(){
        console.log(`Person is sleeping`)
    }
    return person
}

const sakib = Person("sakib", 20);
const rakib = Person("rakib", 23)