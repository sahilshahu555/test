// TOPIC 1 :- VARIABLES *********

//  a: block scope 
//  b: functional Scope
//  c: Global Scope


{
    // var: can  be change
    var aaa=15;
    // console.log(aaa)

    // Const: can not be change
    const a1=10;
    // console.log(a1)

    // let: can be change
    let aa=10; 
    aa=9
    // console.log(aa)
}
    // console.log(aa)

// ************* end of topic *******

// TOPIC 2 :-data Types of Java Script  ******************

// 1 Primitive Data Type
var a;
var b=null;
var c=1;
var d='c';
var f=true;

// console.log(a,typeof(a))
// console.log(b,typeof(b))
// console.log(c,typeof(c))
// console.log(d,typeof(d))
// console.log(f,typeof(f))

// ************* end of topic *******


// TOPIC 2 :- REFERENCE DATA TYPES  ****************

// 2 Reference data Type

// 1 objects + Function + Arrays

let person={
   firstName: "Sahil",
    age : 26,
    skills:["css","java"],
    city: "Nagpur",
    information: function (){
        console.log("Hi this is " + this.firstName)
    }
}

var pers={
    name : "kaustubh",
    lastName:"gaikwad"
}
pers.age=29;
pers.city="nagpur"
pers.city="kamathipura"
pers.name="vishvesh"


// console.log(pers)
// person.information()

// console.log(person)

// 2 ARRAYS

let array= [1,2,3,4,5,6,7,8];
// array.push(99)
// array.pop()
// console.log(array)

// array.pop()
// console.log(array)

// array.shift()

// array.unshift(1)

// array.splice(2,3,"sahil",1,1,1)
let a6=array.slice(7)
// console.log(a6)






// console.log(array)

let array1= new Array()
array1.push(1)

// console.log(array1)


// 3 FUNCTION
// help()
function help(a,b){
    return a*b;
    // console.log(a+b)
}
let d1=help(16,2)
console.log(d1)
document.getElementById("speed").textContent=d1+ "km/hr"


// ************* end of topic *******



