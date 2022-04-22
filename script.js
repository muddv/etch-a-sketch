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
            gridItem.setAttribute("id", "gridItemDefault");
        }
        else if (gridState === "small") {
            gridItem.setAttribute("id", "gridItemSmall");
        }
        else if (gridState === "large") {
            gridItem.setAttribute("id", "gridItemLarge");
        }
        gridItem.className = "gridItem";
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

function clearButton() {
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", () => {
        for (let i = 0; i < gridSize; i++) {
            const gridContainer = document.querySelector(".gridContainer");
            const gridItem = document.querySelector(".gridItem")
            gridContainer.removeChild(gridItem);
            }
        createGrid(gridSize, gridState);
    });
}

function clearSwitch(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridContainer = document.querySelector(".gridContainer");
        const gridItem = document.querySelector(".gridItem")
        gridContainer.removeChild(gridItem);
    }
}

function smallGrid() {
    const smallButton = document.querySelector("#smallGrid");
    smallButton.addEventListener("click", () => {
        clearSwitch(gridSize)
        gridSize = 500;
        gridState = "small";
        createGrid(500, "small");
    });
}

function largeGrid() {
    const largeButton = document.querySelector("#largeGrid");
    largeButton.addEventListener("click", () => {
        clearSwitch(gridSize);
        gridSize = 150;
        gridState = "large";
        createGrid(150, "large");
    });
}

function defaultGrid() {
    const defaultButton = document.querySelector("#defaultGrid");
    defaultButton.addEventListener("click", () => {
        clearSwitch(gridSize);
        gridSize = 260;
        gridState = "default";
        createGrid(260, "default");
    })
}

window.onload = () => {
    createGrid(gridSize, gridState);
    clearButton();
    smallGrid();
    largeGrid();
    defaultGrid();
  }
