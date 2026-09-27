//Object in JS

var student = {
    name: "Jahed",
    age: 22,
    city: "Sylhet"
};

//Object in JSON
var studnet_JSON = JSON.stringify(student); //JS object to JSON data
var studentJSON = '{"name": "Jahed", "age": 22, "city": "Sylhet"}'

console.log(studnet_JSON);

//Converting a JSON data to JS object 
var student_new = JSON.parse(studnet_JSON);

console.log(student_new);
