// Class(ES6) 
// Class is a template for creating objects

class Person {
    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    calculateAge() {//Calculating age function
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullname() {//Full name getting function
        console.log(`${this.firstname} ${this.lastname}`);
    }

}

let person1 = new Person("Fazle", "Rahat", "11-13-1988"); //Passing parameters
let person2 = new Person("Moinul", "Islam", "02-11-1991");//Passing another parameters
let person3 = new Person("Rony", "Chy", "01-17-1996");//Same

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());


console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname()); 



