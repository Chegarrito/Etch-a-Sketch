function crateGrid(gridSize) {
    const row = document.querySelector(".row");
    const container = document.querySelector(".container");
    let gridPadding = calculateGridPadding(gridSize);
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild(row);
        for (let i = 0; i < gridSize; i++){
            const column = document.createElement("div");
            column.setAttribute("class", "column");
            
            column.style.padding = `${gridPadding}px`;
            row.appendChild(column);

        }
    }
}

function calculateGridPadding(gridSize){
    let gridPadding = 960 / gridSize;
    // because the padding goes to the right, left we need to divide the result in two
    gridPadding = gridPadding/2;
    // -2 pixels for the border and make it fit the container border
    gridPadding = gridPadding - 2;
    return gridPadding;
}

let gridSize = prompt("Enter the size of the grid", "16");

if (gridSize === null) {
    gridSize = 16;
}


crateGrid(gridSize);
// mouseTarger is a node list. It looks and acts much like an array.
const mouseTarget = document.querySelectorAll(".column");


// we use the .forEach method to iterate through each div/column/grid
mouseTarget.forEach((grid) => {
  // and for each one we add a 'mouseenter' listener
  grid.addEventListener("mouseenter", () => {
    // change the color of the grid to red
    grid.style.backgroundColor = "red";
});
});