const DEFAULT_NUM_ROWS = 4;

const container = document.querySelector(".container");

function createGrid(numRows) {
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

createGrid(DEFAULT_NUM_ROWS);

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("colored");
  })
})