let gameDiv = document.createElement("div");
let body = document.querySelector("body");
body.appendChild(gameDiv);


gameDiv.setAttribute("id", "container");




let map_layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let numbOfColums = map_layout[0].length;

let row = 2;
let column = 2;





/*
let gameDivDimentions = gameDiv.getBoundingClientRect();

let tileWidth = (gameDivDimentions.width/map_layout[0].length);
let tileHeight = (gameDivDimentions.height/map_layout.length);
*/
let counter = 0;
map_layout.forEach(function(row, rowIndex){
    row.forEach(function(cell, cellIndex) {
        let div = document.createElement("div");
        div.classList.add(counter);
        if (cell == 0) {
            div.classList.add("path");
        }else if(cell == 1){
            div.classList.add("edge");
        }
        counter++;
        gameDiv.appendChild(div)
    });
});




    
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
    setInterval(movePacMan, 500)


function movePacMan(){
    let index = (row) * numbOfColums + (column);
    switch (keydown.toLocaleLowerCase()) {
        case "w":
            row=row-1;
            break;
        case "a":
            column=column-1;
            break;
        case "s":
            row++;
            break;
        case "d":
            column++; 
            break;
        default:
            break;
        }    

        let previousIndex = index;
        index = (row) * numbOfColums + (column);
        console.log(map_layout);
        UpdatePlayerPosition(index, previousIndex)
        UpdatePreviousPosition(previousIndex)
                
    
    
}

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
    })
    console.log(keydown);

    // Något knasigt med dessa if satser FIXA!!
    
         
        