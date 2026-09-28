//For loop
for (var x = 1; x<=5; x++){
   console.log(x);
}
//Make a decrement operator to print 5 to 1
for (var y = 5; y>=1; y--){
    console.log(y);
}
console.log("After Break");
//Break 
for(var j = 1; j<=5; j++){
    if(j ===3 ){
        break;
    }
    console.log(j);
}//here the code's block will break before the code executing 3 but when the log will be before if
console.log('After Break');
for(var j = 1; j<=5; j++){
    console.log(j);
    if(j ===3 ){
        break;
    }
    
}

//Continue
for(var u = 1;u<=5; u++){
    console.log(u);
    if(u === 4){
        continue;
    }
    
}
//Use continue to make a list where no odd number 1, 3 ,5 ,7 ,9 
for(var p = 1; p<=10;p++){
    if(p % 2 == 1){
        continue;
    }
    console.log(p);
}
//String Array Iteration
//String Iteration
let fa= "Hello World";
let len = fa.length-1;//so that it may count the accurate value of the characters
for(var f = 0;f<=len; f++ ){
        console.log(`index no ${f}`);
        console.log(fa[f]); 
}
//Array Iteration
let food = ["Pizza", "Burger", "Milk"];
let len2 = food.length;
for(var i =0; i<len2;i++){
    console.log(`index: ${i}`);
    console.log(`${food[i]}`);
}
//For In loop
let name = "JAHED";
let foodie = ["Cake", "lime", "Loop"];
let per = {
    name:"jahed",
    age:23,
    class:"Student"
};
for (var n in name){
    console.log(n);
    console.log(`index ${n}, item: ${name[n]}`);//Shows the index and saved value of each position
}
//For off;
for(var xa of name){
    console.log(xa);
    console.log(`index ${xa} items: ${name[xa]}`);
}
//For in for Array food
for(var xy in foodie){
    console.log(`index ${xy} item: ${foodie[xy]}`);
}

//for of for array foodie
for(var xu of foodie){
    console.log(xu);
}
//Lets use for in for obj person
for(var yu in per){
    console.log(yu)
    console.log(`Property: ${yu} value: ${per[yu]}`);
};
