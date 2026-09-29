// Sub Class
// Inheritance

class Person { //Base Class
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}

class Customer extends Person { //Sub Class
    constructor(fname, lname, phone, memberShip) {
        super(fname, lname);

        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }
}

let person1 = new Person("Fazle", "Rahat");
console.log(person1);
console.log(person1.greeting());
console.log(person1.fullname());//Error because not defined in the base class

let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname()); 
