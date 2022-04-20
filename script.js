let mouseDown = 0;
document.body.onmousedown = () => (mouseDown = 1);
document.body.onmouseup = () => (mouseDown = 0);

let gridSize = 260;
let gridState = "default"

function createGrid(gridSize, gridState) {
    const gridContainer = document.querySelector(".gridContainer");
    // should be i < 256
    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement("div");
        if (gridState === "default") {
            gridItem.className = "gridItem";
        }
        else if (gridState === "small") {
            gridItem.className = "gridItemSmall";
        }
        gridItem.addEventListener("mouseenter", draw)
        gridContainer.appendChild(gridItem);
    }   
}

function draw(evnt) {
    if (evnt.type === "mouseenter" && !mouseDown) return
    else {
        evnt.target.style.backgroundColor = "yellow";
    }
}

function clear() {
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", () => {
        for (let i = 0; i < gridSize; i++) {
            const gridContainer = document.querySelector(".gridContainer");
            const gridItem = document.querySelector(".gridItem")
            console.log("jwgkjb") 
            gridContainer.removeChild(gridItem);
            }
        createGrid(gridSize, gridState);
    });
}

function smallGrid() {
    const smallButton = document.querySelector("#smallGrid");
    smallButton.addEventListener("click", () => {
        gridSize = 500;
        gridState = "small";
        console.log("wow")
        clear();
        createGrid(gridSize, gridState);
    });
}

window.onload = () => {
    createGrid(gridSize, gridState);
    clear();
    smallGrid();
  }
