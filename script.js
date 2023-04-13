const Board = (function Gameboard() {
    let gameboard = []
    return {gameboard}
})();

function Player() {
    return {}
}

function put() {
    const para = document.createElement("p");
    para.classList.add("p1");
    const title = document.createTextNode("X");
    para.appendChild(title);
    const element = document.getElementById("div1");
    element.insertBefore(para, element.firstChild);
    const bt = document.getElementById("b1");
    bt.parentNode.removeChild(bt);
}