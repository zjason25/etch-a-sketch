const DEFAULT_NUM_ROWS = 4;

function createGrid(numRows) {
  const container = document.querySelector(".grid");
  for (i = 0; i < numRows; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (j = 0; j < numRows; j++) {
      const sqr = document.createElement("div");
      sqr.setAttribute("class", "square");
      row.appendChild(sqr);
    }
    container.appendChild(row);
  }
}

function removeGrid() {
  const grid = document.querySelector(".grid");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function addHoverListeners() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("colored");
    })
  })
}

createGrid(DEFAULT_NUM_ROWS);
addHoverListeners();


const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let numGrid = prompt("How many squares do you want on each side?");
  while (numGrid < 0 || numGrid > 100) {
    numGrid = prompt("Not a valid range. Try again");
  }
  removeGrid();
  createGrid(numGrid);
  addHoverListeners();
})