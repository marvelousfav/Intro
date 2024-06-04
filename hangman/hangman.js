"use strict"
// let words = ["javascript", "monkey", "amazing", "pancake"];
// let word = words[Math.floor(Math.random() * words.length)];
// let answerarray = [];
// for (let i = 0; i < word.length; i++) {
//     answerarray[i] = "-";
// }
// let remainingletters = word.length;
// let guess;
// //main game loop
// while (remainingletters > 0) {
//     //show player progress
//     alert(answerarray.join(" "));
//     guess = prompt("guess a single letter or 'click' cancel to exit");
//     if (guess === null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("please guess a single letter!");
//     } else {
//         for (let j = 0; j < word.length; j++) {
//             if (guess === word[j]) {
//                 answerarray[j] = guess;
//                 remainingletters--;
//             }
//         }
//     }
// }
// //end of main loop
// if (guess === null) {
//     alert("sorry to see you leaving.\nthe answer was " + word);
// } else {
//     alert("congratulations!");
// }

// let names = ["emmanuel", "shekinah", "ben", "jeanne", "moses", "marvelous"];
// let name = names[Math.floor(Math.random() * names.length)];
// let answerarray = [];
// for (let i = 0; i < name.length; i++) {
//     answerarray[i] = "-";
// }
// let remainingletters = name.length;
// let guess;
// let lives = 3;
// //main loop
// while (remainingletters > 0 && lives > 0) {
//     //show player progress
//     alert(answerarray.join(" "));
//     guess = prompt("guess a single letter or click cancel to exit.\n you have " +  lives + " left.");
//     if (guess == null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("please guess a single letter!");
//     } else {
//         guess = guess.toLocaleLowerCase();
//         let correctguesses = 0;
//         for (let k = 0; k < name.length; k++) {
//             if (guess === name[k]) {
//                 if (answerarray[k] == "_") {
//                     alert("you have guessed this letter " + guess);
//                 }else {
//                     answerarray[k] = guess;
//                     correctguesses++;
//                     remainingletters--;
//                 }
//             }
//         }
//         if (correctguesses === 0) {
//             lives--;
//         }
//     }
// }
// //end of loop
// if (guess === null) {
//     alert("the answer was " + name + "." + "hope to see you next time!");
// } else {
//     alert("well done!");
// };

// let names = ["emmanuel", "shekinah", "ben", "jeanne", "moses", "marvelous"];
// let name = names[Math.floor(Math.random() * names.length)];
// let answerarray = [];
// for (let i = 0; i < name.length; i++) {
//     answerarray[i] = "_";
// }
// let remainingletters = name.length;
// let guess;
// let lives = 3;
// //main loop
// while (remainingletters > 0 && lives > 0) {
//     //show player progress
//     alert(answerarray.join(" "));
//     guess = (prompt("guess a single letter or click cancel to exit.\n you have " + lives + " left."));
//     if (guess === null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("please guess a single letter only!");
//     } else {
//         guess = guess.toLowerCase();
//         let correctguesses = 0;
//         for (let k = 0; k < name.length; k++) {
//             if (guess === name[k]) {
//                 if (answerarray[k] !== "_") {
//                     alert("you have guessed this letter " + guess);
//                     correctguesses++;
//                     break;
//                 } else {
//                     answerarray[k] = guess;
//                     correctguesses++;
//                     remainingletters--;
//                 }
//             }
//         }
//         if (correctguesses === 0) {
//             lives--;
//         }
//     }
// }
// //end of loop
// if (guess === null) {
//     alert("the answer was " + name + "." + "sorry to see you leave!");
// } else {
//     alert("well done! you won!");
// };


//CHAPTER 8 HANGMAN CHALLENGE

let words = ["emmanuel", "shekinah", "ben", "jeanne", "moses", "marvelous"];
let word = selectword();
let answerArray = [];
setupAnswerArray();
let remainingLetters = word.length;
let guess;
let lives = 3;

while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer();

function selectword() {
    return words[Math.floor(Math.random() * words.length)];
};// Return a random word

function setupAnswerArray() {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
};
// Return the answer array

function showPlayerProgress() {
    alert(answerArray.join(" "));
    // Use alert to show the player their progress
};

function getGuess() {
    return prompt("Guess a letter, or click cancel to stop playing.\n you have " + lives + " lives left");
};
// Update answerArray and return a number showing how many
// times the guess appears in the word so remainingLetters
// can be updated

function updateGameState() {
    guess = guess.toLowerCase();
    let correctGuesses = 0;
    for (let j = 0; j < word.length; j++) {
        if (guess === word[j]) {
            if (answerArray[j] !== "_") {
                alert(`you have already guessed this letter ${guess}`)
                correctGuesses++;
                break;

            } else {
                answerArray[j] = guess;
                correctGuesses++;
            }
        }
    }
    if (correctGuesses === 0) {
        lives--;
    }
    return correctGuesses;
};

function showAnswerAndCongratulatePlayer() {
    if (guess === null) {
        alert(`sorry to see you leave, come back soon.\nthe answer is ${word}`);
    } else if (remainingLetters === 0) {
        alert(`congrats! you won! the word is ${word}`);
    } else if (lives === 0) {
        alert(`oh no you have no more lives left ${lives}`);
    } else {
        alert(`uhhh something went wrong?!`);
    }
}

// //SHERYL'S EXAMPLE
// let words = ["javascript", "monkey", "amazing", "pancake"];
// let word = pickWord();
// let answerArray = [];
// setupAnswerArray();
// let remainingLetters = word.length;
// let guess;
// let lives = 3;
// //main game loop
// alert("Welcome to the Hangman Game");
// while (remainingLetters > 0 && lives > 0) {
//     //show player progress
//     showPlayerProgress();
//     guess = getGuess();
//     if (guess === null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("Please guess a single letter only!");
//     } else {
//         var correctGuesses = updateGameState();
//         remainingLetters -= correctGuesses;

//     }
// }
// //after while loop
// showAnswerAndCongratulatePlayer();

// function pickWord() {
//     // Return a random word
//    return words[Math.floor(Math.random() * words.length)];
// }
// function setupAnswerArray() {
//     // Return the answer array    
//     for (let i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
    
//     }
 
// }
// function showPlayerProgress() {
//     // Use alert to show the player their progress
//     alert(answerArray.join(" "));
// }
// function getGuess() {
//     // Use prompt to get a guess
//    return  (prompt("Guess a single letter or click 'cancel' to exit.\n You have " 
//    + lives + " left"));
// }
// function updateGameState() {
//     // Update answerArray and return a number showing how many
//     // times the guess appears in the word so remainingLetters
//     // can be updated
//     guess = guess.toLowerCase();
//     let correctG = 0;
//     for (let j = 0; j < word.length; j++) {
//         if (guess === word[j]) {
//             if (answerArray[j] !== "_") {
//                 alert("You have already guessed this letter " + guess);                 
//                 break;

//             } else {
//                 answerArray[j] = guess;
//                 correctG++;                 

//             }
//         }

//     }
//     if (correctG  === 0) {
//         lives--;
//     }
//     return correctG ;
// }
// function showAnswerAndCongratulatePlayer() {
//     // Use alert to show the answer and congratulate the player
//     if (guess === null) {
//         alert("Sorry to see you leaving.\nThe answer was " + word);
//     } else if (remainingLetters === 0) {
//         alert("Congratulations! The word is " + word);
//     } else if (lives === 0) {
//         alert("You ran out of lives.The word was " + word);
//     } else {
//         alert("Something seriously went wrong!");
//     }
// }
