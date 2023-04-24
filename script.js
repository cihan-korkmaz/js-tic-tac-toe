const Board = (function Create_board() {
    let game_board = [
        [[], [], []], 
        [[], [], []], 
        [[], [], []]
    ]
    function set_mark_page(id, mark) {
        const para = document.createElement("p");
        para.classList.add("p1");
        para.setAttribute("id",`m${id[1]}${id[2]}`);
        const marked = document.createTextNode(mark);
        para.appendChild(marked);
        const bt = document.getElementById(id);
        bt.parentNode.replaceChild(para, bt);
    };
    function set_mark_game_board(id, mark) {
        game_board[parseInt(id[1])][parseInt(id[2])] = mark;
    };
    function reset_page() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                var button = document.createElement("input");
                button.setAttribute("id",`b${i}${j}`);
                button.classList.add("empty");
                button.setAttribute("onClick","Game.set_mark(this.id)");
                button.type = "button";
                const marked = document.getElementById(`m${i}${j}`);
                if (marked === null) {
                    continue;
                }
                marked.parentNode.replaceChild(button, marked);
            }
        }
    }
    function reset_game_board() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                game_board[i][j] = "";
            }
        }
        
    }
    function reset() {
        reset_page();
        reset_game_board();
        Game.game_over = false;
    }
    return {game_board, set_mark_page, set_mark_game_board, reset}
})();

const Game = (function Play() {
    let turn_cycle = 0;
    let game_over = false;

    function victory_test() {
        console.log("victory test game over: " + Game.game_over);
        let board = Board.game_board;
        let row_1 = board[0][0] + board[0][1] + board[0][2];
        let row_2 = board[1][0] + board[1][1] + board[1][2];
        let row_3 = board[2][0] + board[2][1] + board[2][2];
        let column_1 = board[0][0] + board[1][0] + board[2][0];
        let column_2 = board[0][1] + board[1][1] + board[2][1];
        let column_3 = board[0][2] + board[1][2] + board[2][2];
        let diagonal_1 = board[0][0] + board[1][1] + board[2][2];
        let diagonal_2 = board[0][2] + board[1][1] + board[2][0];
        
        let last_played_mark;
        if (row_1 === "XXX" || row_1 === "OOO") {
            last_played_mark = row_1[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        } else if (row_2 === "XXX" || row_2 === "OOO") {
            last_played_mark = row_2[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        } else if (row_3 === "XXX" || row_3 === "OOO") {
            last_played_mark = row_3[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        } else if (column_1 === "XXX" || column_1 === "OOO") {
            last_played_mark = column_1[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        } else if (column_2 === "XXX" || column_2 === "OOO") {
            last_played_mark = column_2[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        } else if (column_3 === "XXX" || column_3 === "OOO") {
            last_played_mark = column_3[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        } else if (diagonal_1 === "XXX" || diagonal_1 === "OOO") {
            last_played_mark = diagonal_1[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        } else if (diagonal_2 === "XXX" || diagonal_2 === "OOO") {
            last_played_mark = diagonal_2[0]
            console.log(`${last_played_mark} wins!`);
            Game.game_over = true;
        };
        if (Game.game_over && player_1.mark === last_played_mark) {
            player_1.wins += 1;
            console.log("p1 wins " + player_1.wins)
            // Board.reset();
            // game_over = false;
        } else if (Game.game_over && player_2.mark === last_played_mark) {
            player_2.wins += 1;
            console.log("p2 wins " + player_2.wins);
            // Board.reset();
            // game_over = false;
        };
    };
    function set_mark(id) {
        console.log("set mark game over: " + Game.game_over);
        if (!Game.game_over) {
            let current_player;
            if (turn_cycle === 0) {
                current_player = player_1;
                turn_cycle = 1;
            } else {
                current_player = player_2;
                turn_cycle = 0;
            };
            Board.set_mark_page(id, current_player.mark);
            Board.set_mark_game_board(id, current_player.mark);
            victory_test();
        };
        
    };
    return {set_mark, victory_test, game_over}
})();

function Player(mark, name) {
    let wins = 0;
    return {mark, name, wins}
}

let player_1 = Player("X", "player1");
let player_2 = Player("O", "player2");

const Test = (function test_f() {
    let x = true;
    function alpha() {
        console.log("alpha: " + Test.x);

    };
    function beta() {
        console.log("beta: " + Test.x);
        alpha();

    };
    return {alpha, beta, x};
})();
Test.alpha();
Test.beta();

