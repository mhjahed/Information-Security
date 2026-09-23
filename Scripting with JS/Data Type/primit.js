//Primitive and reference type:
let art = 21;
let ber = art;
art = 45;
console.log(ber);//latest value of art is not stored because of ber was declared first as art and value was stored 21
//Primitive deals with value like string numbers and booleans
//Reference type;
let x = [1,21,23];
let y = x;
console.log(y);
x[2] = 214;//changing value to see differences
console.log(y);/*In this the value of the array are changed because the reference type deals with mem location 
directly but the primitive type works with different address for its values. It deals with object and array*/
