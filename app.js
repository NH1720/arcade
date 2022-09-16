//creates the game state object
const gameState = {};
  
//populates the gameState object with starting info 
function buildInintialState() {
    gameState.board = [
        { value: null , isTurned: false},
        { value: null , isTurned: false},
        { value: null , isTurned: false},
        { value: null , isTurned: false},
        { value: null , isTurned: false},
        { value: null , isTurned: false},
        { value: null , isTurned: false},
        { value: null , isTurned: false},
        { value: null , isTurned: false},
    ];
    gameState.currentPlayer = ["", ""];
    gameState.currentPlayerIdx = 0;
    gameState.getCurrentPlayer = function () {
        return gameState.currentPlayer[gameState.currentPlayerIdx];
    };
    gameState.scores = [0, 0];
    gameState.lastTurnedIdx = -1;
};

//selectors
const boardElem = document.querySelector("#board");
const playerTurnElm = document.querySelector("#player-turn");
const scoreElm = document.querySelector('#score');

//game logic
function changeTurn() {
    gameState.currentPlayerIdx = gameState.currentPlayerIdx === 0 ? 1 : 0;
};

//renders

//renderState
function renderState() {
    boardElem.innerHTML = "";
    for (let i = 0; i < gameState.board.length; i++) {
        const card = gameState.board[i];
        const cardElem = document.createElement("div");
        cardElem.classList.add('space');
        if (card.isTurned) {
            cardElem.innerText = card.value;
        };
        cardElem.dataset.index = i;
        boardElem.appendChild(cardElem);
    }
};
//renderPlayer
function renderPlayer() {
    let text;
    text = `It's currently ${gameState.getCurrentPlayer()}'s turn`;
    playerTurnElm.innerText = text;
};
//renderScore
function renderScore() {
    scoreElm.innerHTML = `
    ${gameState.currentPlayer[0]}: ${gameState.scores[0]}</div> 
    ${gameState.currentPlayer[1]}: ${gameState.scores[1]} 
    `;
};
//renderAll
function render() {
    renderState();
    renderPlayer();
    renderScore();
};


//click
function takeTurn(cardIdx) {
    if (!gameState.currentPlayer[0] || !gameState.currentPlayer[1]) {
        return;
    };
    gameState.board[cardIdx].isTurned = true;
    gameState.scores[gameState.currentPlayerIdx]++;
    const card = gameState.board[cardIdx]; 
    if (card.isTurned) {
        return;
    };
    const lastTurnedCard = gameState.board[gameState.lastTurnedIdx];
    if (card.value === lastTurnedCard.value) {
        state.scores[state.currentPlayer]++
    };
};

//listeners
boardElem.addEventListener('click', function (event) {
    if (event.target.className !== 'space') {
        return;
    };
    console.log('event', event.target);
    const cardIdx = event.target.dataset.index;
    const card = gameState.board[cardIdx];
    if (card.isTurned) {
        return;
    };
    gameState.board[cardIdx].isTurned = true;
    changeTurn();
    console.log('currentPlayer', gameState.getCurrentPlayer());
    render();
});


playerTurnElm.addEventListener ("click", function(event) {
    if (event.target.className !== "start") {
        return;
    } 
    const player1Input = document.querySelector("input[name=player1]");
    const player2Input = document.querySelector("input[name=player2]");
    gameState.currentPlayer[0] = player1Input.value;
    gameState.currentPlayer[1] = player2Input.value;
    render();
});

buildInintialState();
render();




