let turn = document.querySelector(".turn");
turn.innerText = "x";
let currentPlayer = "x";
let gameWon = false;
let box = document.querySelectorAll(".box > div");
turn.classList.add("x-player");
// display winner elements
let register = document.querySelector(".register");
let regDisplay = document.querySelector(".reg-display");
// end of elements
// records
let xrecord = 0,
  orecord = 0;
// score display
let xScore = document.querySelector(".x");
let oScore = document.querySelector(".o");
xScore.innerText = xrecord;
oScore.innerText = orecord;
// end
// button
let showbtn = document.querySelector("button");
// end
// winning array
let storeBox = [];
let winningways = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // cross over
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
showbtn.addEventListener("click", () => {
  box.forEach((btn) => {
    btn.innerText = "";
    register.style.display = "none";
    gameWon = false;
    btn.classList.remove("x-player");
    btn.classList.remove("o-player");
    regDisplay.classList.remove("o-player") ||
      regDisplay.classList.remove("x-player");
  });
  storeBox = [];
  showbtn.style.display = "none";
});
box.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (!e.target.innerText == "" || gameWon == true) return;
    storeBox.push(index);
    if (storeBox.length == 9) {
      showbtn.style.display = "block";
    }
    e.target.innerText = currentPlayer;
    currentPlayer = currentPlayer == "x" ? "o" : "x";
    turn.innerText = currentPlayer;

    if (btn.innerText == "x") {
      btn.classList.add("x-player");
    } else {
      btn.classList.add("o-player");
    }
    if (turn.classList.contains("x-player")) {
      turn.classList.replace("x-player", "o-player");
    } else {
      turn.classList.replace("o-player", "x-player");
    }
    checkForWins();
  });
});
function checkForWins() {
  for (let i = 0; i < winningways.length; i++) {
    let a = box[winningways[i][0]];
    let b = box[winningways[i][1]];
    let c = box[winningways[i][2]];
    // checking for o win

    if (c.innerText === "o" && b.innerText === "o" && a.innerText === "o") {
      regDisplay.innerText = "O";
      register.style.display = "block";
      regDisplay.classList.add("o-player");
      oScore.innerText = orecord + 1;
      showbtn.style.display = "block";
      gameWon = true;
    }
    if (c.innerText === "x" && b.innerText === "x" && a.innerText === "x") {
      regDisplay.innerText = "X";
      register.style.display = "block";
      regDisplay.classList.add("x-player");
      xScore.innerText = xrecord + 1;
      showbtn.style.display = "block";
      gameWon = true;
    }
  }
}
