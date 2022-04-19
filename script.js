function createGrid() {
    const gridContainer = document.querySelector(".gridContainer");
    // should be i < 256
    for (let i = 0; i < 260; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "gridItem";
        gridContainer.appendChild(gridItem);
        draw(gridItem);
    }   
}
function draw(gridItem) {
    gridItem.addEventListener("mouseenter", function( event ) {
        event.target.style.backgroundColor = "yellow";
        console.log("wow")
    });
}


createGrid();
