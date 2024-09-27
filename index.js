
let numbOfColums;
let row = 1;
let column = 1;
let map;
let gameDiv;
let playerDiv = document.createElement("div");
let SecondGrid = document.createElement("div");



function createMap(map_layout) {

    map = map_layout;
    body.innerHTML = "";
    numbOfColums = map_layout[0].length;
    gameDiv = document.createElement("div");
    body.appendChild(gameDiv);
    gameDiv.setAttribute("id", "container");

    SecondGrid.setAttribute("id", "SecondLayer");
    body.appendChild(SecondGrid);

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
           
            gameDiv.appendChild(div)
        });
    });

    playerDiv.classList.add("player");
    playerDiv.style.gridRow = row + 1;
    playerDiv.style.gridColumn = column + 1;
    SecondGrid.appendChild(playerDiv);
   
}


function UpdatePlayerPosition(row, column) {
    playerDiv.style.gridRow = row + 1;
    playerDiv.style.gridColumn = column + 1;
    playerDiv.style.backgroundColor="yellow";
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
        row = nextRow;
        column = nextColumn;
        UpdatePlayerPosition(row, column);
    }
    else {
        console.log("Gå inte in i väggen!");
    }

}




