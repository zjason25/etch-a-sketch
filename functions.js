const NUM_ROWS = 4;

const container = document.querySelector(".container");

for (i = 0; i < NUM_ROWS; i++) {
  const row = document.createElement("div");
  row.setAttribute("class", "row");
  for (j = 0; j < NUM_ROWS; j++) {
    const sqr = document.createElement("div");
    sqr.setAttribute("class", "square");
    row.appendChild(sqr);
  }
  container.appendChild(row);
}


