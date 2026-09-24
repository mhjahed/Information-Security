//Adding a new events like onclick, onmouse hover 
//define msg() function 
function msg() {
    document.write("THIS IS A SIMPLE MSG");
};

// Event listener to make an event and add to an element
// Attaching a click event listener to the element with ID 'adeR'
document.getElementById('adeR').addEventListener('click', mtd);//just call the function

// Function to be executed when the click event is triggered
function mtd() {
    // Log a message to the console
    console.log("MSKL");
};
//more on event
document.getElementById('adEr').addEventListener('dblclick', mts);//when double click the button
function mts(e){
    let val = e;
    val = e.target;//it call the whole element where the function is working
    val = e.target.id//shows the element id
    val = e.timeStamp//shows when the button was triggered after page loaded in ms
    val = e.type// what was type of button double click, click, onclick, clickover
    val = e.clientX//x was the mouse pointer left to write
    val = e.clientY// Y was the mouse pointer top to down
    val = e.offsetY // how much pixel from the left side is
    val = e.offsetX // How much pixel from the up side
    console.log(val);//Shows the button
}

//adding event listner to container 

document.getElementById('adeR').addEventListener('click', mtd);//just call the function

// Function to be executed when the click event is triggered
function mtd() {
    // Log a message to the console
    console.log("MSKL");
};
//more on event
document.querySelector(".container").addEventListener('mousemove', mts);//when double click the button
document.querySelector('.container').style.backgroundColor='red';//change color
function mts(e){
    let val = e;
    val = e.target;//it call the whole element where the function is working
    val = e.target.id//shows the element id
    val = e.timeStamp//shows when the button was triggered after page loaded in ms
    val = e.type// what was type of button double click, click, onclick, clickover
    val = e.clientX//x was the mouse pointer left to write
    val = e.clientY// Y was the mouse pointer top to down
    val = e.offsetY // how much pixel from the left side is
    val = e.offsetX // How much pixel from the up side
    console.log(val);//Shows the button
    console.log(e.offsetY);
    val = this;
    this.style.backgroundColor = `#${e.offsetX}`;//change color with X offset
    console.log(val);
}


//How to move inputed form data into local storage
document.querySelector("#name").addEventListener('focus',test);
function test(e){
    this.style.background='aqua';
}
document.querySelector("#name").addEventListener('keyup',test2);
/*function test2(e){
    console.log(this.value);//shows what you have inputed
};*/
function test2(e){
document.getElementById('demo').innerText=this.value;
}

document.getElementsByTagName('p')[1].innerHTML = "JAHED";
