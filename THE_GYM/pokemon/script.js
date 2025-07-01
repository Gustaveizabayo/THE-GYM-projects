let moves = 0;
let times = 0;
let timerInterval;

let cardlist = [
  "darkness",
  "double",
  "fairy",
  "fighting",
  "fire",
  "grass",
  "lightning",
  "metal",
  "psychic",
  "water",
]
let cardSet;
let board = [];
let rows = 4;
let columns = 5;
let card1Selected;
let card2Selected;
window.onload =  () => {
  shuffleCardS();
  startGame();
}
function shuffleCardS(){
  cardSet = cardlist.concat(cardlist);
  console.log(cardSet);
  for (let i = 0; i < cardSet.length; i++) {
    let j = Math.floor(Math.random() * cardSet.length);
    let temp = cardSet[i];
    cardSet[i] = cardSet[j];
    cardSet[j] = temp;
  }
  console.log(cardSet);
}

function startGame() {
  shuffleCardS();
  document.getElementById("board").innerHTML = "";
  board = [];
  card1Selected = null;
  card2Selected = null;
  moves = 0;
  times = 0;
  updateStats();

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    times++;
    updateStats();
  }, 1000);

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let cardImg = cardSet.pop();
      row.push(cardImg);
      let card = document.createElement("img");
      card.id = r.toString() + "." + c.toString();
      card.src = cardImg + ".jpg";
      card.classList.add("card");
      card.addEventListener("click",  selectCard );
      document.getElementById("board").append(card);

    }
    board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 1000);
  }

  function hideCards() {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++ ) {
        let card = document.getElementById(r.toString() + "." + c.toString());
        card.src = "back.jpg";
      }
    }

  }

  function selectCard() {
    if(this.src.includes("back")) {
      if(!card1Selected) {
        card1Selected = this;
        let coords = card1Selected.id.split(".");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        card1Selected.src = board[r][c] + ".jpg";
      }
      else if (!card2Selected && this != card1Selected) {
        card2Selected = this;
           let coords = card2Selected.id.split(".");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        card2Selected.src = board[r][c] + ".jpg";
        moves++;
        updateStats();
        setTimeout(update, 1000 );


      }
    }
  }
  function update() {
    let card1Coords =card1Selected.id.split(".");
    let r1 = parseInt(card1Coords[0]);
    let c1 = parseInt(card1Coords[1]);

    let card2Coords =card2Selected.id.split(".");
    let r2 = parseInt(card2Coords[0]);
    let c2 = parseInt(card2Coords[1]);

    if (board[r1][c1] !== board[r2][c2]) {
      card1Selected.src = "back.jpg";
      card2Selected.src = "back.jpg";
    }
    
    card1Selected = null;
    card2Selected = null;
  }

  if (document.querySelectorAll('img[src="back.jpg"]').length === 0) {
  clearInterval(timerInterval);
  alert("Congratulations! You won in " + moves + " moves and " + times + " seconds!");
}

  function updateStats() {
    document.getElementById("moveCount").innerText =  moves;
    document.getElementById("timer").innerText =  times;
  }
  document.getElementById("restartBtn").addEventListener("click", () =>{
    startGame();
  });

