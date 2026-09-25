//Functions are 2 types Built in : console.log,alert etc
//User Defined  function: A function is created by a user
//USER DEINED Function
//Declare the function
function myName(){
    console.log("ADL");
    console.log("Bohubrihi");
    console.log("GTA4");
}

//Executing the function
myName();
//Using Parameters in a function to add a value
function mTe(par1,par2){
    console.log(`H ${par1} ${par2}`);
}
//print function
var val = "OPP";
var vaL = "TPP";
mTe(val,vaL);
//using return in parameters 
function adder(a=0, b=0){
    return a+b;
}
//lets store the summation
let sum = adder(2,3);
console.log(sum);
/*
console.log(adder(2,3));//collects the summation
*/

//Declaring a function using Function Expression
let funS = function(nm){//Adding a parameter
    console.log("Error" + " " + nm);
}
funS("RTX");

//Let's convert the function into arraw function and adding parameters
let funR = (nm1,nm2) => {
    console.log(`RTX is ${nm1} ${nm2}`);
}

funR(4070, "Ti");

//Let Use For Each for Iterate an array;
var arr1 = ["IO","PO","SA"];
var arr2 = [23,21,2];
let sS = (item, index, array) =>{
    console.log(`index: ${index} item : ${item}`);
    console.log(array);
}

arr1.forEach(sS);
//Using map to create a new array from arr1 and arr2 use to make a calculation
let addS = (item) => {
    return `${item} at position`;
}
let arr_ad = arr1.map(addS);
console.log("break point");
console.log(arr_ad);
//Adding a new function on arr2 to make the square results of it 
let arr_sq = arr2.map(function(item){
    return item*item;
})
console.log(arr_sq);

// Object Method
let person = {
    firstname: "Fazle",
    lastname: "Rahat",
    dob: "9-10-1995", //number, string, date, array, object

    fullname: function() { //Method
        return `${this.firstname} ${this.lastname}`;
    }

}

console.log(person.firstname);
console.log(person.fullname());

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split()); //make the string to an array
