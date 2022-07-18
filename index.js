/*
// var, let, const
var a = 1;
var b = "this is string";
var c = 1.34;
var d ;
var e = null;
let f = "FFF";
const g = "constant"


console.log(a);
console.log(b.length);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// arrays

let arr = [1, 2, 3, 4, 5, 9+5, "string", [4, 5, 6], ];
arr.push("new item");
arr.pop();
arr.pop();

console.log(arr);
const arr2 = [1, 2, 3, 4];
arr2.push(123);

console.log(arr2);

// objects

let obj = {
    name: "Rishi",
    age: 24,
};
console.log(obj);
console.log(obj.name);      

// comparision operators

let a = 10;
let b = 20;
let c = "20"
console.log(b != c);

// logical opeartors
// && || !

console.log(a > b && b == c);
console.log(a > b || b==c);
console.log(!(a > b));
console.log(!false);

// Conditions

if (a < b){
    console.log("a < b")
}
else{
    console.log("a > b")
}

a > b ? console.log("a > b") : console.log("a < b");

let name = "rishi";

switch(name){
    case "rishi":
        console.log("1");
        break;
        case "john":
            console.log =("2");
            break;
            default:
                console.log("default");   
}



let str = "I'm  a string ";
let arr = ["item1","item2","item3"];
let obj = {name: "john", age: 20}; 

// for loop - range based
for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}

// for in - objects
for (let i in obj){
    console.log(obj[i]);
}

// for in - Arrays/strings
for (let i in arr){
    console.log(i);
}
console.log(arr);


// for of - arrays/strings
for (let i of arr){
    console.log(i);
}

//for each - arrays
arr.forEach((i) => {
    console.log(i);
})

// function
function add(a,b){
    return a + b;
}
let ans = add(2,3);
console.log(ans);

add(2 , 3);
add(89,90);

// function to a variable
let adds = function(a , b){
    console.log(a+b);
}
adds(2,3);

// function inside a function
function arithmetic(a,b){
    function add(x,y){
        console.log(x+y);
    }

    function sub(p,r){
        console.log(p-r);
    }

    add (a,b);
    sub (a,b);
}

arithmetic(4,2);


// lamda function

let add = (a,b) => {
    console.log(a+b);
};
add(4,5);


// slice
let fruits = ["apples", "mangoes", "bananas"];
console.log(fruits);
// console.log(fruits.slice(0, 1));

// map
let capitalFruits = fruits.map((fruits) => fruits.toUpperCase());
console.log(capitalFruits);

//filter
let newFruits = fruits.filter((fruits) => fruits.length > 6);
console.log(newFruits);


// spread
let arr1 = [1, 2, 3];
let arr2 =[...arr1, 4];

let emp1 = {
    name: "john",
    age: "22",
    address: {
        pincode: 12102,
        city: "delhi"
    },
};

let emp2 = {
    ...emp1, lastName: "smith"
};
console.log(emp2);

// destructuring
let {name, age, address} = emp1;

let {city} = emp1.address;
console.log(city);


// classes
class animals {
    constructor(name, isaPet) {
        // console.log("Constructor Ran!");
        this.name = name;
        this.isaPet = isaPet;
    }
    describe() {
        return "hello! my name is " + this.name;
    }
}

let animals1 = new animals(" pup1", true);
console.log(animals1.describe())
// let animals2 = new animals();

// sub classes

class dog extends animals {
    constructor(name, breed) {
        super(name, true);
        this.breed = breed;
    }
    speak() {
        return "bow bow bow! ";
    }
}

let dog1 = new dog("boxy", "boxer");
console.log(dog1.speak());
*/

// redeclaration
//var a = 10;
//let a = 20;

// function scoped / blocked scoped
function abc() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

abc();


// hoisting












