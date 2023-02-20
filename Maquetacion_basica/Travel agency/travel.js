//Vamos a darle funcionalidad TravelManía
//3.
let arrayInfo = [];

function importInfo(){
    let object = {
        name: document.getElementById("name").value,
        origin: document.getElementById("origin").value,
        destiny: document.getElementById("destiny").value,
        passengers: document.getElementById("passengers").value,
        date: document.getElementById("date").value

    }
    arrayInfo.push(object)
    console.log(arrayInfo);

let showInfo = " ";
 for(let i = 0; i < arrayInfo.length; i++){
    showInfo = "<p> Name: " + arrayInfo[i].name + "</p>"+
                "<p> Origin: " + arrayInfo[i].origin + "</p>"+
                "<p> Destiny: " + arrayInfo[i].destiny + "</p>"+
                "<p> Passengers: " + arrayInfo[i].passengers + "</p>"+
                "<p> Date: " + arrayInfo[i].date + "</p>"
 }
 document.getElementById("shown").innerHTML = showInfo;
}
//4.

function filter(){
    let result = [];
    for(let i= 0; i < arrayInfo.length; i++){

    }
}
