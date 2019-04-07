//"use strict";   //enabling the strict mode in js

function doFirst()
{
    var buttonEnter = document.getElementById("buttonEnter");
    //TODO-what is false in here
    bEnter.addEventListener("click",save,false);
}

//saves the value of Process ID
function save()
{
    var pid=document.getElementById("PID").nodeValue;
    var burstTime=document.getElementById("burstTime").nodeValue;

}

//console.log(pid);
//save();

if (document.getElementById('PID') == null) {
    //str = document.getElementById("PID").value;
    console.log("null");
}
//var pid=document.getElementById("PID").value;
//var pid=document.getElementsByName("PID").value;
//console.log(pid);
