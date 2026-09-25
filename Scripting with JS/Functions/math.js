 // Math Object
 let val;
 val = Math.PI;
 console.log(val);
 val = Math.E;
 console.log(val);
 val = Math.round(23.5);
 console.log(val);
 val = Math.ceil(3.2);
 console.log(val);
 val = Math.floor(3.9);
 console.log(val);
 val = Math.sqrt(81);
 console.log(val);
 val = Math.abs(-56);
 console.log(val);
 val = Math.pow(2, 8);
 console.log(val);
 val = Math.min(2,3,1,0,-8);
 console.log(val);
 val = Math.max(-1,2,4,5);
 console.log(val);
 val = Math.random();
 console.log(val);
 
 val = Math.floor(Math.random() * 20 + 1);
 
 
 
 console.log(val);
//Date Object can be found in online
//Date object and uses
 let yu;
 yu = new Date();//show today's info & Country name 
 console.log(yu);
 yf = yu.toString();//Converts it in string 
 console.log(yf);
 yu = new Date(`08-12-2005`);//shows that days info
 console.log(yu);
 yu = new Date(`Aug 26 2005`); //same but input in different
 console.log(yu);
 yu = new Date(`08/26/2005 18:00:00`); //same but input in different
 console.log(yu);
 yg = yu .getMonth();
 console.log(yg);//shows 7 but month num is 8 because the count starts by 0 as january
// Start from 0
yg = yu.getDate();//get date
console.log(yg);
yg = yu.getDay();//get the day but the week starts at monday so it is counted 1 
console.log(yg);
yg = yu.getFullYear();//get the year
console.log(yg);
yg = yu.getHours();
console.log(yg);
yg = yu.getMinutes();
console.log(yg);
yg = yu.getSeconds();
console.log(yg);
yg = yu.getMilliseconds();
console.log(yg);
yg = yu.getTime();
console.log(yg);
// timestamp -> amount of time past since Jan 1st 1970
//changing time date hours 
yu.setMonth(0);
yu.setDate(12);
yu.setFullYear(1996);
yu.setHours(3);

console.log(yg);
console.log(yu);
