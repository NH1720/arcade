//creates the game state object
const gameState = {};
  
//populates the gameState object with starting info 
function buildInintialState() {
    gameState.players = ["x", "o"];
    gameState.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
};


const boardElem = document.querySelector("#board");

buildInintialState();

function renderState() {

};

//helper functions

//listeners
function onBoardClick() {

};


