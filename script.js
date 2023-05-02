const Board = (function Create_board() {
    let game_board = [
        ["", "", ""], 
        ["", "", ""], 
        ["", "", ""]
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
        display();
    }
    function set_score(player) {
        document.getElementById(player.mark).innerText = `Score: ${player.wins}`;
    }
    function set_name(player) {
        let new_name = prompt("Enter your name!");
        player.name = new_name;
        document.getElementById(`name_${player.mark}`).innerText = player.name;
    }
    function new_game() {
        player_1.wins = 0;
        player_2.wins = 0;
        set_score(player_1);
        set_score(player_2);
        Game.turn_cycle = "player_1";
        reset();
    }
    function display() {
        let current_text;        
        if (Game.game_over && Game.turn_cycle === "player_1") {
            current_text = "x win";
        } else if (Game.game_over && Game.turn_cycle === "player_2") {
            current_text = "o win";
        } else if (Game.empty_space === 0) {
            current_text = "tie";
        } else if (Game.turn_cycle === "player_1") {
            current_text = "x go";
        } else if (Game.turn_cycle === "player_2") {
            current_text = "o go";
        };
        document.getElementById("display").innerText = current_text;
    }
    return {
        game_board, 
        set_mark_page, 
        set_mark_game_board, 
        reset, 
        set_score, 
        set_name,
        new_game,
        display
    }
})();

const Game = (function Play() {
    let turn_cycle = "player_1";
    let game_over = false;
    let last_played_mark;
    let empty_space;

    function victory_test() {
        let board = Board.game_board;
        let row_1 = board[0][0] + board[0][1] + board[0][2];
        let row_2 = board[1][0] + board[1][1] + board[1][2];
        let row_3 = board[2][0] + board[2][1] + board[2][2];
        let column_1 = board[0][0] + board[1][0] + board[2][0];
        let column_2 = board[0][1] + board[1][1] + board[2][1];
        let column_3 = board[0][2] + board[1][2] + board[2][2];
        let diagonal_1 = board[0][0] + board[1][1] + board[2][2];
        let diagonal_2 = board[0][2] + board[1][1] + board[2][0];

        Game.empty_space = 0;
        for (let i = 0; i < 3; i++) {
            Game.empty_space += board[i].filter(x => x==="").length;
        }
        
        
        if (row_1 === "XXX" || row_1 === "OOO") {
            Game.game_over = true;
        } else if (row_2 === "XXX" || row_2 === "OOO") {
            Game.game_over = true;
        } else if (row_3 === "XXX" || row_3 === "OOO") {
            Game.game_over = true;
        } else if (column_1 === "XXX" || column_1 === "OOO") {
            Game.game_over = true;
        } else if (column_2 === "XXX" || column_2 === "OOO") {
            Game.game_over = true;
        } else if (column_3 === "XXX" || column_3 === "OOO") {
            Game.game_over = true;
        } else if (diagonal_1 === "XXX" || diagonal_1 === "OOO") {
            Game.game_over = true;
        } else if (diagonal_2 === "XXX" || diagonal_2 === "OOO") {
            Game.game_over = true;
        };

        if (Game.empty_space === 0 && !Game.game_over) {
            console.log("Tie");
        }
        
        if (Game.game_over && player_1.mark === Game.last_played_mark) {
            player_1.wins += 1;
            Board.set_score(player_1);
            Game.turn_cycle = "player_1";
        } else if (Game.game_over && player_2.mark === Game.last_played_mark) {
            player_2.wins += 1;
            Board.set_score(player_2);
            Game.turn_cycle = "player_2";
        };
        Board.display();
    };
    function set_mark(id) {
        if (!Game.game_over) {
            let current_player;
            if (Game.turn_cycle === "player_1") {
                current_player = player_1;
                Game.turn_cycle = "player_2";
            } else if (Game.turn_cycle === "player_2") {
                current_player = player_2;
                Game.turn_cycle = "player_1";
            };
            Board.set_mark_page(id, current_player.mark);
            Board.set_mark_game_board(id, current_player.mark);
            Game.last_played_mark = current_player.mark;
            victory_test();
        };
        
    };
    return {
        set_mark, 
        victory_test, 
        game_over, 
        turn_cycle,
        empty_space
    }
})();

function Player(mark, name) {
    let wins = 0;
    return {
        mark, 
        name, 
        wins
    }
}

let player_1 = Player("X", "Player 1");
let player_2 = Player("O", "Player 2");
Board.display();