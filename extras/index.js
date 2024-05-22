
/*let age = 25;
let year = 2019;
console.log(age, year);

age = 30;

const points = 100;
console.log(points);

var score = 75;
console.log(score);
// this a comment
/* this too is for comments*/

//strings
/*console.log('hello world');

let email = 'eniolllaaaa@gmail.com';
console.log(email);

//string concatenation
let firstName = 'Eniola';
let lastName = 'Abdul';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName[3]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@'); //when we pass a method into value is called an argument
console.log(index); */

//common string methods

//let email = 'eniolllaaaa@gmail.com';

//let result = email.lastIndexOf('i');
//let result = email.slice(0,10);//first argument is where we go from and the second argument is where we go to
//let result = email.substr(4,10);\

//let result = email.replace('e', 'a');
//let result = email.replace ('n', 'w');
//console.log(result);
  

//numbers
/*let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//math operations +, -, *, /, **, %
console.log(10/2);
let result = radius %3;

console.log(result);8*/


//template string
// const title = 'Best reads of 2019';
// const author =  'Mario';
// const likes = 30;

//concatenation way
/*let result = 'The blog called ' + title + ' by ' + author + 'has ' + likes + 'likes ';
console.log(result);*/

//template string way , we use back ticks for this instead of single quotes
/*let result = `The blog called ${title} by ${author} has ${likes} likes`;
console .log(result);

//creating html templates
let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likes} likes</span>
`
console.log(html);

//arrays are used to store collections of things in
let ninjas = ['shaun', 'ryu', 'chu'];
/*ninjas[1] = 'kwn';
console.log(ninjas)[1];*/

/*let age = [20, 30, 50,23];
console.log(age[2]);*/

//let random = ['shaun', 'crystal', 30, 20];
//console.log(random);

//console.log(ninjas.length);

//array methods
//let results = ninjas.join(',');
//let results = ninjas.indexOf('chu');
//let results = ninjas.concat(['ken', 'crystal'])
//let results = ninjas.push('ken');
 //results = ninjas.pop()
//console.log(results);

//null
//let age = null ;

//console.log(age, age + 3, 'the age is ${age}');

//booleans
// console.log(true, false);

// //methods can return booleans
// let email = 'eniolllaaaaa@gmail.com';
// let names = ['mario', 'luigi', 'john'];

//let result = email.includes('@');
//let result = names.includes('luigi');
//console.log(result);

//comparison operators
let age = 25;
/*console.log(age==25);
console.log(age == 30);
console.log(age!= 30);
console.log(age> 20);
console.log(age < 35);
console.log(age <= 25);*/

/*let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Sahun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name < 'Shaun');
console.log(name > 'Shaun');*/

//loose comparison(different types can still be equal)
//console.log(age == 25);
//console.log(age == '25');
//console.log(age != 25);
//console.log(age !='25');

//strict comparison(different types cannot be equal)
/*console.log(age === 25);
console.log(age === '25');
console.log(age !== '25');
console.log(age !== '25');*/

//type conversion
//let score = '100';

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

/*let result = String(50);
let result = Boolean('');
console.log(result, typeof result);*/

//control flow(use loops for cycling through data)(use conditional statements for checking condition)
//for loop (we dont have a semi-colon at the end of the code)({} is called a code block)
// the job of a loop is to loop through a portion of code over and over a certain number of times
// for(let i = 0; i < 5; i ++){
//    console.log('in loop', i);
// }

// console.log('loop finished')

// const names = ['shaun', 'mary', 'john'];

// for (let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
    
// }
//while loops
// let i = 0;

// while(i < 5){
//     console.log('in loop', i);
//     i++;
// }

// const names = ['shaun', 'mary', 'john'];

// let j = 0;
// while(j < names.length){
//     console.log(names[j]);
//     j++;
// }
//do while llop
let k = 5;

do{
    console.log('val of k is:', k);
    k++;
}
while(k < 5);
    
    // console.log('loop finished')
//for loops
// for (let j = 1; j < 5;j++ ){
//     console.log(j);
// } 


//funcctis
//default functions
// function name(name){
//     console.log('my name is ${name}');
// }

// name('Eniola');

// // named functions
// const named = function() {
//     console.log('it works');

// }
// named();

// const meme = () => {
//     console.log()
// }
// meme();

// z = 0;






