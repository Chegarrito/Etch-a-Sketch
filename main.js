const boxContainer = document.querySelector(".box");

for (let i = 0; i < 16; i++){
    const columns = document.createElement("div");
    columns.setAttribute("class", "columns");
    boxContainer.appendChild(columns);
}
