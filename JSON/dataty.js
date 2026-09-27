//https://jsonlint.com
//JSON supports these doesn't support NAN, Undefined, Date, function
//string 
//boolean
//number
//object
//array
//null

var person = {
    name:"Jahed",
    age:25,
    class: 12,//num
    occupation:"Full Stack Web Engineer",
    address:"Sylhet",//String
    hobbies:["Reading","Playing","Watching"],//array
    isMarried:false,//boolean
    children:null,//null
    devices: {mobile:"iphone", pc:"MSI"},//obj
    test_undef: undefined, //undefined DT
    greet: function(){ //function DT
        console.log("Hello World");
    },
    test_nan: NaN,//NAN DT
    test_infinity: Infinity,//Infinity DT
    test_negative_infinity: -Infinity,//Negative Infinity DT
    dob: "1978-5-12", //Date String DT
}

var person_json = JSON.stringify(person);

console.log(person);
console.log(person_json);//JSON supported format shown
