function onHover(cell) {
    cell.classList.add("hovered");
}

function additionalClasses(n, i, j, cell) {
    if (i === 0) {
        cell.classList.add("cell-top");
    }
    if (j === 0) {
        cell.classList.add("cell-left");
    }
    if (i === n - 1) {
        cell.classList.add("cell-bottom");
    }
    if (j === n - 1) {
        cell.classList.add("cell-right");
    }
}

function createLine(n, i) {
    let line = document.createElement("div");
    line.classList.add("flex-h", "line");
    line.id = `line-${i}`;
    for (let j = 0; j < n; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `cell-${n * i + j}`;
        // Adds classes for cells on the border of the grid
        additionalClasses(n, i, j, cell);

        // DEBUG
        // cell.textContent = `${n * i + j}`;
        cell.addEventListener("mouseover", (e) => {
            onHover(e.target)
        });

        line.appendChild(cell);
    }
    return line;
}

function createGrid(n) {
    if (!Number.isInteger(n) || n <= 0 || n > 100) {
        alert(`Wrong n: ${n}`);
        createGrid(16);
        throw new Error("Given unappropriate grid size!");
    }
    const container = document.querySelector("#main-container");
    for (let i = 0; i < n; i++) {
        line = createLine(n, i);
        container.appendChild(line);
    }
}

function resetGrid() {
    let grid = document.querySelector("#main-container");
    document
        .querySelectorAll(".line")
        .forEach((elt) => {
            grid.removeChild(elt);
        });
}

let SIZE = 16

function onLoad() {
    createGrid(SIZE);
    console.log(`Created a ${SIZE}x${SIZE} grid!`);

    document
        .querySelector("#size-change")
        .addEventListener("click", (e) => {
            SIZE = Number.parseInt(
                prompt("New Grid Size? [1-100]", "16")
            )
            resetGrid()
            createGrid(SIZE)
        });

    document
        .querySelector("#reset")
        .addEventListener("click", (e) => {
            resetGrid()
            createGrid(SIZE)
        })
}

onLoad();
