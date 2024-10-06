// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}


document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft(); 
  }
});

function moveDodgerRight () {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
 
  if (left < 360) { // Assuming the game field is 400px wide, and the dodger is 40px wide.
    dodger.style.left = `${left + 1}px`;
  }
}


document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
