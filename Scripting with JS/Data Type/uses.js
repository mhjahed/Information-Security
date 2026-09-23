//Storing different types of data type
//Numbers
var x;
//Integar
x = 24;
console.log(x);
//Decimal 
x = 3.14;
console.log(x);
//Negative
x = -20;
console.log(x);
//Exponential e = 10^5
x = 5e6;
console.log(x);
//Exponential E same e = E
x = 5E6;
console.log(x);
//Inverse Expoential e = -e = 10^-5
x = 56e-6;
console.log(x);
//String + num + num
x = "Helllo" + 9 + 2;
console.log(x); 
//Infinity number storing
var x = "25"/0;
console.log(x);
var y;
y = x;
console.log(y);
//Infinity is a number
var u;
u = Infinity;
console.log(u);
//Hexa decimal Numbers
var i;
i = 0xBB;//Just enter the hexadecimal number so that you can get the decimal number
console.log(i);
//Get string from number
var x;
x = 45;
console.log(x.toString());
//Or
var x;
x = 65;
y = x.toString();
console.log(y);
//With decimal no
var x = 2.5734;
y = x.toString();
console.log(y);
//To change number to string and string value to binary decimal octal hexadecimal
//x.toString(Base)  Binary,Base=2 decimal,base=() hexadecimal,base=16 octal,base=8
//Decimal
var x = 3.31;
y = x.toString(); 
console.log(y);
//Decimal to binary
var x = 3.31;
y = x.toString(2); 
console.log(y);
//Decimal to Octal 
var x = 3.31;
y = x.toString(8);
console.log(y);
//Decimal to hexadecimal
var x = 180;
y  = x.toString(16);
console.log(y);
