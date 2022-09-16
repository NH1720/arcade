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
    gameState.currentPlayer = ["Jack", "Jill"];
    gameState.currentPlayerIdx = 0;
    gameState.getCurrentPlayer = function () {
        return gameState.currentPlayer[gameState.currentPlayerIdx]
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
    if (gameState.currentPlayerIdx === 0) {
        gameState.currentPlayerIdx = 1;
    } else {
        gameState.currentPlayerIdx = 0;
    };
}



//renders
function renderState() {
    boardElem.innerHTML = "";
    for (let i = 0; i < gameState.board.length; i++) {
        const card = gameState.board[i];
        const cardElem = document.createElement("div");
        cardElem.classList.add('space');
        cardElem.dataset.index = i;
        cardElem.innerText = card;
        boardElem.appendChild(cardElem);
    }
};

function renderPlayer() {
    let text;
    if (!gameState.currentPlayer[0] || !gameState.currentPlayer[1]) {
        text = `
        <input name="player1" placeholer="player1">    
        <input name="player2" placeholer="player2">    
        <button class="start">Start Game<button>
        `
    } else {
        text = `It's currently <span class="player">${gameState.getCurrentPlayer()}</span>'s turn`
    }
    text = `It's currently ${gameState.getCurrentPlayer()}'s turn`;
    playerTurnElm.innerHTML = text;
}



function renderScore() {
    scoreElm.innerHTML = `
    ${gameState.currentPlayer[0]}: ${gameState.scores[0]}</div> 
    ${gameState.currentPlayer[1]}: ${gameState.scores[1]} 
    `;
}



function render() {
    renderBoard();
    renderPlayer();
    renderScore();
}


//click
function takeTurn(cardIdx) {
    if (!gameState.currentPlayer[0] || !gameState.currentPlayer[1]) {
        return;
    }
    gameState.board[cardIdx].isTurned = true;
    gameState.scores[gameState.currentPlayerIdx]++;
    const card = gameState.board[cardIdx]; 
    if (card.isTurned) {
        return;
    }
    const lastTurnedCard = gameState.board[gameState.lastTurnedIdx];
    if (card.value === lastTurnedCard.value) {
        state.scores[state.currentPlayer]++
    }
};

//listeners
boardElem.addEventListener('click', function (event) {
    if (event.target.className !== 'space') {
        return;
    }
    const cardIdx = event.target.dataset.index;
    const card = gameState.board[cardIdx];
    if (card.isTurned) {
        return;
    }
    gameState.board[cardIdx].isTurned = true;
    changeTurn();
        const spaceIdx = event.target.dataset.index;
        gameState.board[spaceIdx] = "x";
        renderState();
    
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
})

buildInintialState();
renderState();
renderPlayer();

//helper functions

//listeners
function onBoardClick() {

};



//input players


