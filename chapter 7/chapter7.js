document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("body").style.border = "3px solid black";
document.getElementById("mouth").style.borderRadius = "10px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.backgroundColor = "lightblue";
document.getElementById("head").style.borderTop = "10px black solid";
document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("nose").style.borderRadius = "10px";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";


//animating robot
let rightEye = document.getElementById("righteye");
rightEye.onclick = moveUpDown;
// let rightEye = document.getElementById("righteye");
// rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let id = setInterval(frame, 100) // draw every 10ms

    function frame() {
        robotPart.style.top = top + `%`;
        top++;
        if (top === 20) {
          clearInterval(id);
        }
    }
}

let leftEye = document.getElementById("lefteye");
leftEye.onclick = moveUpDown;

function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let id = setInterval(frame, 100) // draw every 10ms

    function frame() {
        robotPart.style.top = top + `%`;
        top++;
        if (top === 20) {
          clearInterval(id);
        }
    }
}

let leftArm = document.getElementById("leftarm");
leftArm.onclick = moveRightLeft;
function moveRightLeft(e) {
  let robotPart = e.target;
  let left = 0;
  let id = setInterval(frame, 100) // draw every 10ms

  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 71) {
      clearInterval(id);
    }
  }
 };

 let rightArm = document.getElementById("rightarm");
rightArm.onclick = moveArmRightLeft;
function moveArmRightLeft(e) {
  let robotPart = e.target;
  let left = 0;
  let id = setInterval(frame, 100) // draw every 10ms

  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 21) {
      clearInterval(id);
    }
  }
 };

 let Nose = document.getElementById("nose");
 Nose.onclick = moveNoseUpDown;

 function moveNoseUpDown(e) {
  let robotPart = e.target;
  let top = 0;
  let id = setInterval(frame, 10) // draw every 10ms

  function frame() {
      robotPart.style.top = top + "%";
      top++;
      if (top === 51) {
        clearInterval(id);
      }
  }
}

// let Head = document.getElementById("head");
//  Head.onclick = moveHeadUpDown;

//  function moveHeadUpDown(e) {
//   let robotPart = e.target;
//   let top = 0;
//   let id = setInterval(frame, 100) // draw every 10ms

//   function frame() {
//       robotPart.style.top = top + `%`;
//       top++;
//       if (top === 5) {
//         clearInterval(id);
//       }
//   }
// }

let Mouth = document.getElementById("mouth");
 Mouth.onclick = moveMouthUpDown;

 function moveMouthUpDown(e) {
  let robotPart = e.target;
  let top = 0;
  let id = setInterval(frame, 100) // draw every 10ms

  function frame() {
      robotPart.style.top = top + `%`;
      top++;
      if (top === 71) {
        clearInterval(id);
      }
  }
}


