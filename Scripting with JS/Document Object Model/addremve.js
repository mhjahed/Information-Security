//How to add a new item
//create element 
//Adding a li in a ol
let olItem = document.createElement('li');//mention the tag name  which u want to create

//add Id and class
olItem.className = "New-ele";//adding class  name
olItem.id = "new-ele";//adding id name
//adding attribute
olItem.setAttribute('title', 'A title to a new ele'); //first parameter is an attribute inside the mentioned element and second is value
olItem.appendChild(document.createTextNode('Javascript'));//ol item indicates the var and then text node
document.querySelector('ol').appendChild(olItem);//call the ol tag where the text will be placed and then appendchild to add the var value
console.log(olItem);
//New for UL
let ulItem  = document.createElement('li');//which type of element just mention
let link = document.createElement('a');//Creating a "a" attribute
link.appendChild(document.createTextNode('Shop'));//Name the text visual
link.setAttribute('href', 'https://ascendnacyadvisorinc.kesug.com/shop/');//set the href and link
ulItem.appendChild(link);//set the append child ulitem with the created link :link
document.querySelector('ul').appendChild(ulItem);//set the target  where to locate the uk item
console.log(ulItem);
console.log(link);

//How to replace or remove any item
//Replacing elements
let newheading = document.createElement('h1');//create a h1 tag
newheading.appendChild(document.createTextNode('H1 Heading Text'));//Set the h1 tag inside text
newheading.className = "simple-cls";//mentioning the className
//now mention which thing will be replaced or mention the position
let oldheading = document.querySelector('h3');//mention which tag is going to be relaced 
let parent = document.querySelector('.container');//we mentioned the parent of h3 is div named container
parent.replaceChild(newheading, oldheading);
console.log(oldheading);//check if you have called the correct h3 tag from Html
console.log(parent);//see if you have called the target div
console.log(newheading);

//Removing an element
//I will remove a list 
let listItem = document.querySelectorAll('li');//define a element which will be removed
let lit0 = document.querySelector('ul');//calling the unordered list first one

listItem[2].remove();//remove the items
console.log(listItem);
console.log(lit0);

//Using remove Child method
lit0.removeChild(listItem[1]);
lit0.classList.add("test");//adding class name
lit0.classList.add("test-new");//adding class name
lit0.classList.remove("sample-class");//remove the class name in list
let vat  = lit0.hasAttribute('class');//checking any class named attribute is existed
lit0.setAttribute("title","NEW TIT");//adding a new attribute and a value
lit0.removeAttribute("title");//removing any attribute
console.log(vat);
