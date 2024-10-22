const row = document.querySelector(".row");
const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    for (let i = 0; i < 16; i++){
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        row.appendChild(column);

    }
}
    /* for (let i = 0; i < 4; i++){
    const column = document.createElement("div");
    column.setAttribute("class", "column");
    row.appendChild(column);
    
} */
