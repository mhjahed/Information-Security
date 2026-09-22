//Asynchronous programming 
// AJAX = Asynchronous JavaScript And XML
//Every code will excute in their way breaking the serial because if the previous function is delaying the next function will start with his own way
//GET DATA without loading the page

document.getElementById('get_data').addEventListener('click',loadData);

function loadData(){
    //Create an XHR Object XML HTTP REQUEST
    let xhr = new XMLHttpRequest();
    //Open 
    xhr.open('GET','data.txt',true)
    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }

    xhr.onload = function(){
        //HTTP Status:
        //200 = OK
        //403 = "FORBIDDEN"
        //300 = "NOT FOUND"
        if(this.status === 200){
            console.log(this.status);
            console.log(this.responseText)
            //Fetch data from data.txt in this info
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
    }

    }
     

    xhr.onreadystatechange = function(){
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    //4: request finished and response is ready
        //console.log(this.readyState);
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);     
    }
   
    }
    xhr.send();
    //console.log(xhr);
}
