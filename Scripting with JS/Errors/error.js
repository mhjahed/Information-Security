//Error Handling 
console.log("Before Error!");
//error handling with try and catch
try{
undefined.test();//catches the errors
}
catch(err){//Stored the errors
    //console.log(err);//it shows the stored error
    console.log(err.message);//It will see the simple error msg
    console.log(err.name);//catch the error name
    console.log(err.type);//catch and show the error type
}
finally{
    console.log("I ama inside finally");//It makes no error
}
//generating error ms by using throw 
let a = 19;
try{
  if(a>15) throw "Too Big"  ;
  else if(a<24) throw "Too Small";
}
catch(err){
    console.log(err);
}//It makes when the conditions doesn't match instead of error that will print throw 
console.log("after Error");//This functions will show error but for this no other operations will be impacted to run the code
