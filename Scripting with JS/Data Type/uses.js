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
//Precision using to define the floating numbers after point and store as Stringvar x = 3.156121;
y = x.toPrecision(4); //It will show three digits after point
console.log(y);
z = x.toPrecision(5); //It will show four digits after point 
console.log(z);
f = x.toPrecision(3); //It will show two digits after point
console.log(f);
//Formula to get idea about digit show after point using this function 
//if x.toPrecision(n) then n-1 will be the number of digits after point showing
//If the mean of n is greater than the given values digits after point then for each extra digit it will show 0
var i = 3.9211;
y = i.toPrecision(7); //the mean is greater than the actual values digit after points 
console.log(y);
//Stringed numbers to get numbers 
var x = "340";
y = parseInt(x);//Convertation
console.log(y);
//But if the string contains points 
var x = "314.9931";
z = parseInt(x);
console.log(z);
//To count the points part 
var y = "34.5423";
v = parseFloat(y);
console.log(v);
//Making string to number when the strin does not collect any number
var s = "xdada"
 y = isNaN(s);
 console.log(y);
//It will show true cause the string doesn't include full of numbers 
var s = "311";
y = isNaN(s);
console.log(y);//it will display now false cause it is a number in a string
//Links
//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


//...Data Type : STRINGS
//String can be bordered with "" or ''
//We can use '' inside of " " also we can use "" inside of ''  
// You can't use "Hello ""World" You will get a error
//You should use "Hello \" World" so that you can see a " inside of string
//You should use 'Hello \' World' so that you can see a ' inside of string
var x = "Hello \" World";
console.log(x);
//To print \ 
var x = "Hello \\ world"
console.log(x);
//Printing special character use \ 
//For long space between two words
var x = "Hello \t world";
console.log(x);
//Get more space
var x = "Hello \t\t world";
console.log(x); 
//write from linebreake
var t = "Hellow UIU\nN UI World";
console.log(t);
//Concatenation
var a = "Hello";
var b = "World";
c  = a + b ;
h = "Hello\nworld";
i = h.length
y = c.length;
console.log(c);
console.log(y);
console.log(h);
console.log(i);
//Counting linebrake \n also counted as 1 char
//Indexing of String
//Show alpahabets from the string by using the positional number
var a = "POPUPMENU";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
//Uppercase function 
var r = "Hacking";
f = r.toUpperCase(); //to store the value
console.log(f);
//Lowercase function 
var r = "Hacking";
f = r.toLowerCase(); //to store the value
console.log(f);
//Removing space from front and back 
var h = "  Hacking   ";
g = h.trim();
console.log(g);
//Slice of a string 
var h = "Stright";
y = h.slice(3,6);
console.log(y);
//Slice from backwards
var h = "STICK";
y = h.slice(-2, -1);
console.log(y);
j = h.slice(1);
console.log(j);
//Sub Stria
h = "GRONZILA";
console.log(h.substr(3, 3));//start taking Char from 3 and then takes 3 more char 
//Replace Method
var h = "UKRAINE";
console.log(h.replace("RAINE" , "RUSSSIA"));
//Concat Method
var x  = "ADG";
var t = "GHOTA";
console.log(x.concat(t, "EFA", "90"));
//links
//https://www.w3schools.com/jsref/jsref_obj_string.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 

//Booleans like only true or false
var x = 10>9;
console.log(x);
//Using boolean function to see true or false
y = Boolean(x);
console.log(y);
//But the boolean will show false if the variable will be undefined

//Array is a data type which will hold mulitple values in a single variable
var c = ["Bangladesh", "Italy", "Canada"];
console.log(c);// It will not show the specific value but if we define them
console.log(c[0]); //It will now show the first value
console.log(c.length); //It will show that how much values are there
c[1] = "USA";
console.log(c);//This will now replace the values specifing the position
c.push("Germany");//Add more values by push function
console.log(c[3]);
console.log(c);
//Using a new var to store another array value
var x = ["HELL", "HEAVEN"];
y = x[1];
console.log(y);//Value of y stored as the second value of x
//To add another value in arrray 
var x = ["Bangladesh", "USA", "UK", "UAE"];
x[x.length] = "Morocco";
console.log(x);
console.log(x[4]);
x[3] = "RUSSIA";
console.log(x);
//How to remove a value from a array
//If you use push() funtion then it will add item in end also pop() will remove item from end of array
y  = x.pop();
console.log(y);//Shows which item was removed
console.log(x);
//How to add a value from start 
var x = ["BD", "IOI", "POP", "PUSH"];
x.unshift("AFGANISTAN", "AXIO");
console.log(x);
//How to remove a value from the start?
x.shift();
console.log(x);
//Declare a blank array
var d = [];
console.log(d.length);
//Adding numbers in array
d.push(14.16,90);
console.log(d);
//Adding numbers and strings in a one array
d.push("TYPE", 243);//All added values will be stored 
console.log(d);
//Spliting the var value
var e = "POP";
var y = e.split("");
console.log(y);
//More 
var x = "BP RA";
y = x.split("");
console.log(y);
t = x.split("R");//Removes the R char and then split them string 
console.log(t);
//How to split all words of a sentance and make it an array
var d = "I am a good";
console.log(d.split(" "));
//How to convert array to string 
var z = ["I am from", "POLLAND"];
y = z.toString();
console.log(y);
y = z.join("/");//Use / instead of comma , 
console.log(y);
y = z.join(" ");
console.log(y);
//Joing two array
var a = ["NM", "DA"];
var b = ["JA", "PAW"];
console.log(a.concat(b));
//Sorting Arrays ascending order
console.log(a.sort());
//Sort in descending oreder
console.log(b.reverse());
//Links
//https://www.w3schools.com/jsref/jsref_obj_array.asp
//Object 
//declare a object
var ty = {name:"Jahed", class:11, age:18,occupation:"Full Stack Web Engineer"};
console.log(ty);
//deleting a property 
console.log(delete ty.age);//If successfully deleted show true
console.log(ty);
//Or 
console.log(delete ty["class"]);//If successfully deleted show true
console.log(ty);
//Adding a property on a object
console.log(ty["age"]=21);
//Or
console.log(ty.address="Sylhet");
console.log(ty);
//declare an empty  object 
var yt = {};
console.log(yt);
//More working with Array and Object 
//take an array inside on another array
var x = ["YT", 20, ["a", "b"], "Hello World"];//suppose ["a","b"] is array 2
console.log(x);
console.log(x[2]);//show array 2
console.log(x[2][1]);//get any value of array 2
//Complex array with more than 2 mixed inside array
var c = [1, "PR", [21, "PO",["wa", 32],"LOL"],"POP"];//3 arrays in one
console.log(c);
//Task how to show "wa" of array 3 in console
console.log(c[2][2][0]);
//Mixed array with object
var p = [1, "SS", [3, "POP"], {name:"Jahed",age:21},"SP"];
console.log(p);
//How to call a property which is in a array
console.log(p[3]["name"]);
console.log(p[3].name);
//Complex array with array inside  object
var t = [2, 5,["POP",8],[21,{name:"Jahed",age:[24,"P",["da", 21]]},56],90];
console.log(t);
//How to call age value of the object
console.log(t[3][1].age);
//or
console.log(t[3][1]["age"]);
//how to call da string inside of age properties
console.log(t[3][1].age[2][0])
//Array inside of object
var z = {name:"PO",age:21, roll:[1,2,[3,4,5],54]};
console.log(z);
//how to get the 4 value inside the roll property 
console.log(z.roll[2][1]);
//Complex task 
var y = {cos:"TP",Ip:[{name:"PP", age:21, cause:[1,2,3,[4,6,{roll:[31,21]}],21]}]}
//Question how to show 21 value inside of roll property
console.log(y.Ip[0].cause[3][2].roll[1]);
//Undefined variable
var ata =
console.log(ata);
//prove that is undefined 
console.log(ata == undefined);
console.log(ata === undefined);
//Check with null 
var atr = null;
console.log(atr == undefined);//the values are same so it will be true
console.log(atr === undefined);//the data types are not same so it will be false
//Check with empty value
var atb = "";
console.log(atb == undefined);
console.log(atb == null);//It will be false both of them for being not same to each other 
//Check with NaN stands for failed mathmetical operations or arethmetic operations
var atc = "sda" - 21;
console.log(atc);//NaN
console.log(atc == undefined);//undefined value compare with NaN will be false
console.log(atc == "");//Empty value compare with NaN will be false
console.log(atc == null);//null value compare with NaN will be false


