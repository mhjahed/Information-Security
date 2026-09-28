//While Loop exicute untill the given condition become false 
//Infinity loop
/*while (true){
    console.log("I am Loop");
}
var i = 1;
while (i<=5){ //This condition is true 1<5
    console.log("Infinity");
}*/

//Make this loop into a normal loop
var i = 1;
while (i<=5){
    console.log(`i is  ${i}`);//here the i value will be printing untill it becomes 5
    i++;//It will increase the value of i to make the value to 5 in 5 times printing
}

//Do while loop
var o = 1;
do{
    
        console.log(`Value of o is ${o}`);
        o++;
    
}while (i<=5);

//Print 1 to 10 using loop 
var f = 1;
while(f<=10){
    console.log(`Value of f is ${f}`);
    f++;
}
//Using If in loop
var d = 1;
while(d<=10){
    console.log(d);
    d++;
    if (d === 5){
        console.log(`v is ${d}`);
    }
}
//How to print the summation of 1 to 10
var g = 1;
var sum = 0;
while(g<= 10){
    sum = sum + g;
    g++;
}
console.log(`summation is ${sum}`);
console.log("MULTIPLICATION");
//How to print the multiplication of 1 to 10
// Series 1*2*3*4*5*6*7*8*9*10=?
var t =  1;//So that it starts with 1 and so the multiplication can be defined
var p = 1;//always start a something with 1 so that getting perfect value of multiplication
while(t<=10){
    sum = sum +t;
    p = p*t;
    t++;
}
console.log(`Multiplication is ${p}`);

console.log("Excercise \n World");
