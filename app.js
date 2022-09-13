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

buildInintialState();
const boardElem = document.querySelector("#board");
for (let i = 0; i < gameState.board.length; i++) {
    let card = gameState.board[i];
    const cardElem = document.createElement("div");
    cardElem.classList.add("card");
    boardElem.appendChild(cardElem);
}
// for (let i = 0; i < gameState.board.length; i++) {
//     let value = gameState.board[i]
//     for (let j = 0; j < iIndex.length; j++) {
//         let innerValue = value[j];
//         console.log(innerValue); 
//     }
// }


buildInintialState();

function renderState() {

};

//helper functions

//listeners
function onBoardClick() {

};


