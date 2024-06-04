document.getElementById("myname").innerHTML += " Favour";

let item1;
let item2;
let item3;

document.getElementById("changelist").onclick = newlist;

function newlist() {
    item1 = prompt("enter a new first thing: ");
    item2 = prompt("enter a new second thing: ");
    item3 = prompt("enter a new third thing: ");
    updatelist();
}

function updatelist() {
    document.getElementById("firstthing").innerHTML = item1;
    document.getElementById("secondthing").innerHTML = item2;
    document.getElementById("thirdthing").innerHTML = item3;
}