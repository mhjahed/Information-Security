let val;
val = document.getElementById('iop');
console.log(val);//get the full element 
val = document.getElementById('iop').id;
console.log(val);//get id name
val = document.getElementById('iop').className;
console.log(val);//get class name

//Changing styles CSS
document.getElementById('iop').style.background = 'aqua';//it will change my ID's style as following
document.getElementById('iop').style.color = '#fff';
document.getElementById('iop').style.padding = '20px';
document.getElementById('iop').style.display = 'flex';
document.getElementById('iop').style.margin = '11.0px';
//chaning content 
document.getElementById('pp').textContent = "I am good";//adding text
document.getElementById('pp').innerText = 'Again';//adding text inside
document.getElementById('pp').innerHTML ='<b>Hello World</b>';//adding html

//How to write many codes with together in a same id 
val = document.getElementById('pp');
val.innerText = 'IAW';
val.innerHTML = '<button>Click ME!</button>';

//Query Selector
val = document.querySelector('#iop');//We can call tag, name, id, class to call id # to cakk class . and to call tag use nothing
val = document.querySelector('ol');//shows the whole list 
console.log(val);
val = document.querySelector('li');
console.log(val);//Shows all li elements
val = document.querySelector('ol li');
console.log(val);//Shows first elements
val.style.background = 'lime';
val.style.color = 'black';
val = document.querySelector('li:last-child');
console.log(val);//shows the last li
val = document.querySelector('li:nth-child(3)');
console.log(val);//Shows the selected one like 3 no
val = document.querySelector('li:nth-child(2)').innerText = "Hello";
console.log(val);//Shows the 2nd li and also replace the text with Hello

//Here we can only select one element 

//Let's select multiple element
//document.getElementsByClassName(cas)
//single access by multiple selection
let list = document.getElementsByClassName('simple-class');
console.log(list);
console.log(list[0]);//to access 1st element
list[0].style.background='blue';
list[0].style.color='while';
list[0].style.padding='10px';
list[0].style.padding='Hello World';
console.log(list[0]);//shows the changes and make the changes at a time

//document.getElementByTagName();
let listo = document.getElementsByTagName('li');
console.log(listo);
console.log(listo[0]);//access 1st li
console.log(listo[3]);//access 3rd li
//here this will show the whole page li , so it is not good to use
listo = document.querySelector('ol').getElementsByTagName('li');//this will select the first ol and li so that other li can be hidden

let lis = Array.from(listo);//convert to array
lis.forEach(function(item){
    console.log(item);
});
console.log(lis);

//document.querySelectorAll() has more advantages
//id -> #;
//class Name -> .
listo = document.querySelectorAll('ol li');
console.log(listo)
lis.forEach(function(item){
    console.log(item);
});
console.log(lis);//Get pure array without converting to array

let liodd = document.querySelectorAll('li:nth-child(odd)');//get the odd numbered li
console.log(liodd);
let liEve = document.querySelectorAll('li:nth-child(even)');//get even numbered li
console.log(liEve);
liodd.forEach(function(item){
    item.style.backgroundColor="yellow";//colors odd numbered li
    item.style.color="gray";
});
liEve.forEach(function(item){
    item.style.backgroundColor="lime";//color even numbered li
    item.style.color="black";
});


//traversing
let vawd;
let listw = document.querySelector('ul');
let listitem = document.querySelector('ul li:last-child');
let listItem = document.querySelector('ul li:first-child');
vawd = listw;
console.log(vawd);
vawd = listitem;
console.log(vawd);
//Get child nodes
vawd = listw;
vawd = listw.childNodes;//gets the whole child node collections
console.log(vawd);
vawd = listw.childNodes;
console.log(vawd);//gets the node lists of the selected element as an arrray
vawd = listw.childNodes[0];//get the 1st node 
console.log(vawd);
vawd = listw.childNodes[2].nodeName;//get the name of 3rd node name
console.log(vawd);
vawd = listw.childNodes[2].nodeType; //get the node type 
console.log(vawd);
vawd = listw.childNodes;
vawd = listw.children[1]; // doesn't show the text node
console.log(vawd);
//changing nodes content 
vawd =  listw.children[0].textContent = "HI THERE";
console.log(vawd);//add a text as the directed destination
vawd = listw.children[1].children[0];
console.log(vawd);//get another destination inside the children
vawd = listw.firstChild;
console.log(vawd);//get the first child with text node
vawd = listw.firstElementChild;
console.log(vawd);//get the first child's without text node
vawd = listw.lastElementChild;
console.log(vawd);//get the last child without any text node
vawd = listw.childElementCount;
console.log(vawd);//counts the elements numbers inside of the parents 
vawd = listitem;
vawd = listitem.parentElement;
console.log(vawd);//shows the outside parent elements
vawd = listitem.parentNode;
console.log(vawd);//shows the outside parent node
vawd = listitem.parentElement.parentElement;
console.log(vawd);//shows the outside of inside parent elements
vawd = listItem.nextSibling.nextSibling;//shows the next sibling of the next sibling
console.log(vawd);//shows the siblings of children node 
vawd = listItem.nextElementSibling;
console.log(vawd);
vawd = listItem.nextElementSibling.previousElementSibling;//shows previous siblings
console.log(vawd);
vawd = listItem.nextElementSibling.nextElementSibling; //shows next siblings
console.log(vawd);
