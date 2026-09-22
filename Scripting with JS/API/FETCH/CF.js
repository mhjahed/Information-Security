//Call back function 


/*setTimeout(function(){
    console.log("Hello World");
}, 1000);*/

/*let persons = [
    {firstName: "Jahed", lastName: "JAHED"},
    {firstName: "Shahad", lastName: "SHAHAD"},
    {firstName: "Salik", lastName: "AHMED"}
]

function createPerson(person){
    setTimeout(function(){
        persons.push(person);
    }, 4000);  // result shown in 4000 ms or 4 sec
}

function getPerson(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li><br>`;
        }
        
        );
        
        document.getElementById('output').innerHTML = output;
        
    }, 1000);
}
*/
let persons = [
    {firstName: "Jahed", lastName: "JAHED"},
    {firstName: "Shahad", lastName: "SHAHAD"},
    {firstName: "Salik", lastName: "AHMED"}
]

function createPerson(person, callback){
    setTimeout(function(){
        persons.push(person);
        callback();
    }, 500);  // result shown in 4000 ms or 4 sec
}

function getPerson(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li><br>`;
        }
        
        );
        
        document.getElementById('output').innerHTML = output;
        
    }, 500);
}


createPerson({firstName:"Rony", lastName:"Chy"}, getPerson);
