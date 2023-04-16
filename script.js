const Board = (function Gameboard() {
    let gameboard = [
        [[], [], []], 
        [[], [], []], 
        [[], [], []]
    ]
    let icon_strike = "XXX"

    function victory_test() {
        let row_1 = gameboard[0][0] + gameboard[0][1] + gameboard[0][2];
        let row_2 = gameboard[1][0] + gameboard[1][1] + gameboard[1][2];
        let row_3 = gameboard[2][0] + gameboard[2][1] + gameboard[2][2];
        let column_1 = gameboard[0][0] + gameboard[1][0] + gameboard[2][0];
        let column_2 = gameboard[0][1] + gameboard[1][1] + gameboard[2][1];
        let column_3 = gameboard[0][2] + gameboard[1][2] + gameboard[2][2];
        let diagonal_1 = gameboard[0][0] + gameboard[1][1] + gameboard[2][2];
        let diagonal_2 = gameboard[0][2] + gameboard[1][1] + gameboard[2][0];
        
        if (row_1 === icon_strike) {
            console.log("X wins!");
        } else if (row_2 === icon_strike) {
            console.log("X wins!");
        } else if (row_3 === icon_strike) {
            console.log("X wins!");
        } else if (column_1 === icon_strike) {
            console.log("X wins!");
        } else if (column_2 === icon_strike) {
            console.log("X wins!");
        } else if (column_3 === icon_strike) {
            console.log("X wins!");
        } else if (diagonal_1 === icon_strike) {
            console.log("X wins!");
        } else if (diagonal_2 === icon_strike) {
            console.log("X wins!");
        }
    };

    return {gameboard, victory_test}
})();

const Game = (function Play() {
    function put(id) {
        const para = document.createElement("p");
        para.classList.add("p1");
        const x_icon = document.createTextNode("X");
        para.appendChild(x_icon);
        const bt = document.getElementById(id);
        bt.parentNode.replaceChild(para, bt);
    
        Board.gameboard[parseInt(id[1])][parseInt(id[2])] = "X";
        console.table(Board.gameboard);
        Board.victory_test();
        
    }
    return {}
})()

function Player(icon, name) {
    let wins;
    return {icon, name, wins}
}

let player_x = Player()
let player_y = Player()

