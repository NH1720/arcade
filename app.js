//creates the game state object
const gameState = {};
  
//populates the gameState object with starting info 
function buildInintialState() {
    gameState.players = ["x", "o"];
    gameState.board = [
        'nate', null, null,
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
        cardElem.dataset.index = i;
        cardElem.innerText = card;
        boardElem.appendChild(cardElem);
    }
}


boardElem.addEventListener('click', function (event) {
    console.log('this', this)
    if (event.target.className === 'space') {
        console.log("click");
        const spaceIdx = event.target.dataset.index;
        gameState.board[spaceIdx] = "x";
        renderState();
    }
});

buildInintialState();
renderState();

//helper functions

//listeners
function onBoardClick() {

};


