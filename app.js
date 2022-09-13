//creates the game state object
const gameState = {};
  
//populates the gameState object with starting info 
function buildInintialState() {
    gameState.players = ["x", "o"];
    gameState.board = [
        null, null, null,
        null, null, null,
        null, null, null
    ];
};

const boardElem = document.querySelector("#board");

function renderState() {
    boardElem.innerHTML = "";
    for (let i = 0; i < gameState.board.length; i++) {
        let card = gameState.board[i];
        const cardElem = document.createElement("div");
        cardElem.classList.add("space");
        cardElem.innerText = card;
        boardElem.appendChild(cardElem);
    }
}


boardElem.addEventListener('click', function(event) {
    console.log('click')
})

buildInintialState();
renderState();

//helper functions

//listeners
function onBoardClick() {

};


