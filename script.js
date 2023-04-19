const Board = (function Gameboard() {
    let gameboard = [
        [[], [], []], 
        [[], [], []], 
        [[], [], []]
    ]
    function set_mark_page(id, mark) {
        const para = document.createElement("p");
        para.classList.add("p1");
        const marked = document.createTextNode(mark);
        para.appendChild(marked);
        const bt = document.getElementById(id);
        bt.parentNode.replaceChild(para, bt);
    };
    function set_mark_board(id, mark) {
        Board.gameboard[parseInt(id[1])][parseInt(id[2])] = mark;
    };
    return {gameboard, set_mark_page, set_mark_board}
})();

const Game = (function Play() {
    let turn_cycle = 0;
    function victory_test() {
        let board = Board.gameboard
        let row_1 = board[0][0] + board[0][1] + board[0][2];
        let row_2 = board[1][0] + board[1][1] + board[1][2];
        let row_3 = board[2][0] + board[2][1] + board[2][2];
        let column_1 = board[0][0] + board[1][0] + board[2][0];
        let column_2 = board[0][1] + board[1][1] + board[2][1];
        let column_3 = board[0][2] + board[1][2] + board[2][2];
        let diagonal_1 = board[0][0] + board[1][1] + board[2][2];
        let diagonal_2 = board[0][2] + board[1][1] + board[2][0];
        
        if (row_1 === "XXX" || row_1 === "OOO") {
            console.log(`${row_1[0]} wins!`);
        } else if (row_2 === "XXX" || row_2 === "OOO") {
            console.log(`${row_2[0]} wins!`);
        } else if (row_3 === "XXX" || row_3 === "OOO") {
            console.log(`${row_3[0]} wins!`);
        } else if (column_1 === "XXX" || column_1 === "OOO") {
            console.log(`${column_1[0]} wins!`);
        } else if (column_2 === "XXX" || column_2 === "OOO") {
            console.log(`${column_2[0]} wins!`);
        } else if (column_3 === "XXX" || column_3 === "OOO") {
            console.log(`${column_3[0]} wins!`);
        } else if (diagonal_1 === "XXX" || diagonal_1 === "OOO") {
            console.log(`${diagonal_1[0]} wins!`);
        } else if (diagonal_2 === "XXX" || diagonal_2 === "OOO") {
            console.log(`${diagonal_2[0]} wins!`);
        }
    }
    function set_mark(id) {
        let current_player;
        if (turn_cycle === 0) {
            current_player = player_1;
            turn_cycle = 1;
        } else {
            current_player = player_2;
            turn_cycle = 0;
        }
        Board.set_mark_page(id, current_player.mark);
        Board.set_mark_board(id, current_player.mark);

        console.table(Board.gameboard)
        victory_test();
    };
    return {victory_test, set_mark}
})()

function Player(mark, name) {
    let wins;
    return {mark, name, wins}
}

let player_1 = Player("X", "player1");
let player_2 = Player("O", "player2");

