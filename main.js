console.log('main.js');

let  name = 'John';

name='Prabu';
console.log(name);

const person = {
    name : 'Prabu',
    age: 31
}

person.name='Selvan';

console.log(person);

// pushing values to array

const num = [1,2,3,4];

num.push(5);
console.log(num);

// Arrow Function


const arrowFunc = (name)=> {
    console.log(`Hey  ${name} This is arrow function `);
}
arrowFunc("Prabu");

// For Each

const fruits = ['Apples', 'Oranges', 'Grapes'];

// console.log(fruits);

// fruits.forEach((index, fruit)=> {
//     console.log(`index is ${index} and the fruit name is ${fruit}`);
// });

// Map

// Return the array from Map
const singleFruit = fruits.map( fruit => fruit.slice(0, -1).toUpperCase() );
console.log(typeof(singleFruit));
console.log(singleFruit);

// const newarr= [1,3,4,4];
// console.log(typeof(newarr));

// Array Of Objects 
const student = [
    { id: 1 , name : "Prabu" },
    { id: 2 , name : "Hari" }, 
    { id: 3 , name : "Dhanu"},    
];

// console.log(student);
const filteredStudents = student.filter( person=>  person.id!=2);
console.log(filteredStudents);


// Spread operator

let arr= [1,2,4,5,9];
console.log(Math.max(...arr))

// Math.max will accept the input as numbers
// we can pass input in the form of numbers as array

const employee = {
    name : "Prabu",
    age: 31
};

const emp1 = {
    ...employee,
    email : 'prabu.selvan@gmail.com'
}

console.log(emp1);

const arr1 = [1,2,3];
const arr2 = [...arr1,4];
console.log('arr2 is ' ,arr2);

const arr3= [arr2.filter( ar => ar!==2)];
console.log('arr3 is ', arr3);

// Destructuring
const profile = {
    fname : "Prabu",
    address: {
        street: "Jayanagar 9th block, Bangalore",
        city : "Bangalore" 
    },
    hobbies: ['movies', 'music']
}

// const  {fname, address, hobbies} = profile;
// console.log(fname, address , hobbies);
// console.log(address.street);
// console.log(hobbies.filter(hb=> hb!=='music'));
// console.log(address.street);
const {address, hobbies} = profile;
const {street, city} =address;

console.log(`Street is ${street}`)
console.log(`hobbies are ${hobbies}`);