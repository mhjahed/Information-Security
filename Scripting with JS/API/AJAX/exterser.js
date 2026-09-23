//http://www.icndb.com/api
// API
// Restful API

document.getElementById('get_data').addEventListener('click', loadJokes);


function loadJokes(e){
    let num = document.getElementById('number').value;
    console.log(num);
    let xhr = new XMLHttpRequest();

    xhr.open('GET',`https://official-joke-api.appspot.com/random_joke/`, true);
    xhr.onprogress = function(){
        document.getElementById('output').innerHTML = "<h3>Loading...</h3>";

    }
    xhr.onload = function(){
        if(this.status === 200){
           let data = JSON.parse(this.responseText);
           let joka = data.setup;
           let ko = data.punchline;
           console.log(data);
           console.log(joka);
           console.log(ko);
           document.getElementById('output').innerHTML = `<h3>${joka}<br>${ko}</h3>`;
        }
        
    }

    xhr.send();
}
