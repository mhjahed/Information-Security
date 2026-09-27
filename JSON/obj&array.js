//GETTING the external JSON 

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
}
xmlhttp.open("GET","data.json", true);
xmlhttp.send();
//JSON DATA to JS OBJ
function jsonData(json_obj) {
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);

    for (x in js_obj.persons) {
        //getting obj numbers
        //console.log(x);
        var persons = js_obj.persons;
        console.log(persons[x]);
        //getting obj value
        for (y in persons[x]){
            console.log(persons[x][y]);
        }
    }
}
