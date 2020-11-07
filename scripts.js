const container = document.getElementById("container");

/* Color Picker */
let blackColor = true;
let rainbowColor;

/* Create initial grid when sreen loads */
window.onload = createGrid(16, 16);

/* Create a grid with rows and columns defined by the function */
function createGrid(rows, columns) {
  /* Empty textContent in the container resets the grid */
  container.textContent = "";

  /* Main logic to create the grid */
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-columns", columns);
  for (let cells = 0; cells < rows * columns; cells++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  const gridItems = document.querySelectorAll(".grid-item");
  /* Get all elements with grid-item class to change color when mouse passes over it */
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", colorChange);
  });
}

/* Function with the color change logic */
function colorChange() {
  if (blackColor) {
    this.style.setProperty("background-color", "black");
  } else if (rainbowColor) {
    function randomNumber() {
      return Math.floor(Math.random() * 256);
    }
    this.style.setProperty(
      "background-color",
      `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    );
  }
}

/* Let the user change the grid size */
const gridSize = document.getElementById("grid-size");
gridSize.addEventListener("change", (event) => {
  if (gridSize.value > 0 && gridSize.value <= 100) {
    createGrid(gridSize.value, gridSize.value);
  } else {
    alert("Grid size must be beetween 1 and 100");
  }
});

/* Get all grid items and clear the background of each one */
function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.style.cssText = "";
  });
}

const clearButton = document.getElementById("clear-grid");
clearButton.addEventListener("click", clearGrid);

const blackColorChanger = document.getElementById("black-color");
blackColorChanger.addEventListener("click", (event) => {
  blackColor = true;
  rainbowColor = false;
});

const rainbowColorChanger = document.getElementById("rainbow-color");
rainbowColorChanger.addEventListener("click", (event) => {
  console.log(rainbowColor);
  blackColor = false;
  rainbowColor = true;
});
