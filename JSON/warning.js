//JSON.stingify() -->JS Obj to JSON
//JSON.parse() -->JSON to JS obj 


//JSON DATA but JS will treat it like a JS Obj
var person1 = {
    "name": "Jahed",
    "age": 25,
    "class": "D",
    "occupation": "Full Stack Web Engineer",
    "married": false,
}

/*var person1_JSON = JSON.parse(person1);//Error can't get JS Obj because it is treated as JS Obj
var person1_JSON = JSON.stringify(person1); //Now it will work 
console.log(person1_JSON);*/

//To valid a JSON data 

var person1_JSON = JSON.stringify(person1); //First get the OBJ to JSON
var person_JSON = JSON.parse(person1_JSON);//Now make it as a JSON to Obj

console.log(person_JSON);

//Access Data of a JSON same as JS Obj
console.log(person1.name);
console.log(person1.age);
