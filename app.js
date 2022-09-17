// //creates the game state object
// // const gameState = {};
  
// //populates the gameState object with starting info 
// function buildInintialState() {
//     gameState.board = [
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//         { value: null, isTurned: false},
//     ];
//     gameState.players = ["", ""];
//     gameState.currentPlayerIdx = 0;
//     gameState.getCurrentPlayer = function () {
//         return gameState.players[gameState.currentPlayerIdx];
//     };
//     gameState.lastTurnedIdx = -1;
// };

// //selectors
// // const boardElem = document.querySelector("#board");
// // const playerTurnElm = document.querySelector("#player-turn");
// // const scoreElm = document.querySelector('#score');

// //game logic
// function changeTurn() {
//     gameState.currentPlayerIdx = gameState.currentPlayerIdx === 0 ? 1 : 0;
// };

// //renders

// //renderState
// function renderState() {
//     boardElem.innerHTML = "";
//     for (let i = 0; i < gameState.board.length; i++) {
//         const card = gameState.board[i];
//         const cardElem = document.createElement("div");
//         cardElem.classList.add('space');
//         if (card.isTurned) {
//             cardElem.innerText = card.value;
//         };
//         cardElem.dataset.index = i;
//         boardElem.appendChild(cardElem);
//     }
// };
// //renderPlayer
// function renderPlayer() {
//     let text;
//     text = `It's currently ${gameState.getCurrentPlayer()}'s turn`;
//     playerTurnElm.innerText = text;
// };
// //renderScore
// function renderScore() {
//     scoreElm.innerHTML = `
//     ${gameState.currentPlayer[0]}: ${gameState.scores[0]} 
//     ${gameState.currentPlayer[1]}: ${gameState.scores[1]} 
//     `;
// };
// //renderAll
// function render() {
//     renderState();
//     renderPlayer();
//     renderScore();
// };


// //click
// function takeTurn(cardIdx) {
//     if (!gameState.currentPlayer[0] || !gameState.currentPlayer[1]) {
//         return;
//     };
//     gameState.board[cardIdx].isTurned = true;
//     gameState.scores[gameState.currentPlayerIdx]++;
//     const card = gameState.board[cardIdx]; 
//     if (card.isTurned) {
//         return;
//     };
//     const lastTurnedCard = gameState.board[gameState.lastTurnedIdx];
//     if (card.value === lastTurnedCard.value) {
//         state.scores[state.currentPlayer]++
//     };
// };

//listeners
// boardElem.addEventListener('click', function (event) {
//     if (event.target.className !== 'space') {
//         return;
//     };
//     console.log('event', event.target);
//     const cardIdx = event.target.dataset.index;
//     const card = gameState.board[cardIdx];
//     if (card.isTurned) {
//         return;
//     };
//     gameState.board[cardIdx].isTurned = true;
//     changeTurn();
//     console.log('currentPlayer', gameState.getCurrentPlayer());
//     render();
// });


// playerTurnElm.addEventListener ("click", function(event) {
//     if (event.target.className !== "start") {
//         return;
//     } 
//     const player1Input = document.querySelector("input[name=player1]");
//     const player2Input = document.querySelector("input[name=player2]");
//     gameState.currentPlayer[0] = player1Input.value;
//     gameState.currentPlayer[1] = player2Input.value;
//     render();
// });

// buildInintialState();
// render();

let main = document.getElementById("main");

function collectInfoForPlayer(player) {
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "player-name");
    let playerNameInput = document.createElement("input");
    playerNameInput.setAttribute("id", "player-name");
    main.appendChild(nameLabel);
    main.appendChild(playerNameInput);

    let nextButton = document.createElement("button");
    main.appendChild(nextButton);
    nextButton.addEventListener("click", () => {
        let input = document.getElementById("player-name");
        player.name = input.value;
    });
}

function clearMain() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

let gameConfig = {
    currentState: "modeSelect",
    renderCurrentState: () => {
        switch(this.currentState) {
            case "modeSelect":
                let singlePlayerBtn = document.createElement("button");
                const singlePlayerBtnText = document.createTextNode("One Player");
                singlePlayerBtn.appendChild(singlePlayerBtnText);
                singlePlayerBtn.addEventListener("click", () => {
                    this.players[1].name = "Computer";
                    this.players[1].type = "computer";
                    this.setCurrentState("playerInfo");
                });
                main.appendChild(singlePlayerBtn);

                let twoPlayerBtn = document.createElement("button");
                const twoPlayerBtnText = document.createTextNode("Two Players");
                twoPlayerBtn.appendChild(twoPlayerBtnText);
                twoPlayerBtn.addEventListener("click", () => {
                    this.players[1].type = "human";
                    this.setCurrentState("playerInfo");
                })
                main.appendChild(twoPlayerBtn);
                break;
            case "playerInfo":
                console.log("You're in player info")
                break;
            case "game":
                break;
            default:
                console.log("hey add this state dude");
                console.log(this.currentState);
        }
    },
    players: [
        {
            name: undefined,
            type: "human",
            mark: "X"
        },
        {
            name: undefined,
            type: undefined,
            mark: "O"
        }
    ],
    setCurrentState: (state) => {
        this.currentState = state;
        clearMain();
        this.renderCurrentState();
    },
};

gameConfig.renderCurrentState();


