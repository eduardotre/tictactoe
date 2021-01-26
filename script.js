const gameboard = (() => {
    const m = 3; //rows
    const n = 3; //cols
    let gameboard = new Array(m);
    for (var i = 0; i<n; i++){
        gameboard[i]= [];
    }
    return {
        gameboard,
    };
})();

const playerFactory = (id, marker) => {
    return{id, marker};
}

//temporary
/*
for (let i=0; i <3; i++){
    for (let j=0; j<3; j++){
        if (Math.floor(i/j)==1){
            gameboard.gameboard[i][j] = "O";
        }
        else{
            gameboard.gameboard[i][j] = "X";
        }
    }
}*/
const displayBoard = () =>{
    const container = document.querySelector('.container');
    for (let i = 0; i<3; i++){
        for (let j = 0; j<3; j++){
            const cell = document.createElement('div');
            cell.className = 'cell'
            cell.setAttribute('data-row',`${i}`);
            cell.setAttribute('data-col',`${j}`);
            cell.textContent = gameboard.gameboard[i][j];
            container.appendChild(cell);
        }
    }
}

const game = (() => {
    playerOne = playerFactory(1,"X");
    playerTwo = playerFactory(2,"O");
    displayBoard();

    cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.addEventListener('click', function(e){
        placeMarker(e,playerTwo);
    }));
        
})();

function placeMarker(e, player){
    const m = e.target.getAttribute('data-row');
    const n = e.target.getAttribute('data-col');
    if (e.target.textContent == ""){
        gameboard.gameboard[m][n] = player.marker;
        e.target.textContent = player.marker;
    }
}