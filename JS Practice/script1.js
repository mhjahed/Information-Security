   //connection variables & changing the value of one to see differences
   //the value of var 'f' has not changed because we didn't mention the f value to store again
   var d;
   var f;
   d = "a";
   f = d;
   console.log(d);
   console.log(f);
   //Now change the value
   d = 40;
   console.log(d);
   console.log(f);

   //Math with variables get the summation
   var x = 20;
   var y = 21;
   var c = x + y;
   console.log(c);

   //variable name can be used with $ sign also _ sign

   var $a;
   $a =30;
   console.log($a);
   var r_da;
   r_da = 32;
   console.log(r_da);

   // many variable to a var

   var my, mine;
   my = 90;
   mine = 20;
   console.log(my);
   console.log(mine);
 
   //What if you redeclare a declared value : Not lose data
   var k = 20;
   console.log(k);
   var k;
   console.log(k);

   //Constant rules: Have to declare it with it's value at a time and can't change it's value
   const p = "po";
   console.log(p);

   //keywords: https://www.w3schools.in/javascript/keywords/ which can't  be used as name of a var or const or let  

   
