

let secret = Math.floor(Math.random() * 10 + 1)
let number;

while (number !== secret) {
    let number = (prompt("Try to guess a number between 0 - 10"))
    if (number < secret) {
        alert("Incorrect, too low");
    } else if (number > secret) {
        alert("Incorrect, too high");
    } else if (number === null) {
        alert(" Please select a number");
    }
    else {
        break
    }
};
alert("Congratulations! You got it!")