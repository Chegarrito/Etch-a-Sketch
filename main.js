function crateGrid(rows, columns) {
    const row = document.querySelector(".row");
    const container = document.querySelector(".container");
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild(row);
        for (let i = 0; i < columns; i++){
            const column = document.createElement("div");
            column.setAttribute("class", "column");
            row.appendChild(column);

        }
    }
}

let rows = 16;
let columns = 16;
crateGrid(rows, columns);

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