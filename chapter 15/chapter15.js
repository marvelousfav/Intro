let day = prompt("enter your favorite day of the week!").toLocaleLowerCase();
let theRespond;
switch (day) {
    case "monday":
        theRespond = "Ack!";
        break;
    case "tuesday":
        theRespond = "taco day!";
    case "wednesday":
        theRespond = "halfway there!";
    case "thursday":
        theRespond = "it's the new friday!";
    case "friday":
        theRespond = "TGIF! Yeah!";
        break;
    case "saturday":
        theRespond = "what a day!";
        break;
    case "sunday":
        theRespond = "sunday = funday!";
        break;
        default:
            theRespond = "i haven't heard of that one!";
            break;
}
// console.log(theRespond);
alert(theRespond);