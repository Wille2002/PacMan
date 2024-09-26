
let numbOfColums;
let row = 1;
let column = 1;
let map;
let gameDiv;


let counter = 0;
function createMap(map_layout) {

    map = map_layout;
    body.innerHTML = "";
    numbOfColums = map_layout[0].length;
    gameDiv = document.createElement("div");
    body.appendChild(gameDiv);
    gameDiv.setAttribute("id", "container");

    map_layout.forEach(function (row, rowIndex) {
        row.forEach(function (cell, columnIndex) {

            let div = document.createElement("div");
            if (cell == 0) {
                div.classList.add("path");
            } else if (cell == 1) {
                div.classList.add("edge");
            }
            div.style.gridColumn = columnIndex + 1;
            div.style.gridRow = rowIndex + 1;
            div.dataset.gridColumn = columnIndex + 1;
            div.dataset.gridRow = rowIndex + 1;
            counter++;
            gameDiv.appendChild(div)
        });
    });
}
    

let playerDiv;
function UpdatePlayerPosition(position, previousPosition) {
    playerDiv = gameDiv.childNodes[position];
    playerDiv.style.backgroundColor = "yellow";

}

function UpdatePreviousPosition(position) {
    playerDiv = gameDiv.childNodes[position];
    playerDiv.style.backgroundColor = "black";


}

let keydown;

document.addEventListener("keydown", event => {
    event.preventDefault();
    switch (event.key.toLocaleLowerCase()) {
        case "w":
            keydown = "w"
            break;
        case "a":
            keydown = "a"
            break;
        case "s":
            keydown = "s"
            break;
        case "d":
            keydown = "d"
            break;
        default:
            break;
    }
    console.log(keydown);
})

setInterval(movePacMan, 100)


function movePacMan() {
    let index = (row) * numbOfColums + (column);
    let nextRow = row;
    let nextColumn = column;
    switch (keydown.toLocaleLowerCase()) {
        case "w":
            nextRow = row - 1;
            break;
        case "a":
            nextColumn = column - 1;
            break;
        case "s":
            nextRow = row + 1;
            break;
        case "d":
            nextColumn = column + 1;
            break;
        default:
            break;
    }

    if (map[nextRow][nextColumn] === 0) {
        let previousIndex = index;
        row = nextRow;
        column = nextColumn;
        index = (row) * numbOfColums + (column);
        UpdatePlayerPosition(index, previousIndex);
        UpdatePreviousPosition(previousIndex);
    }
    else {
        console.log("Gå inte in i väggen!");
    }

}




