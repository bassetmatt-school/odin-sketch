// DOM Stuff

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
    return cell
}

function createLine(n, i) {
    let line = document.createElement("div");
    line.classList.add("flex-h", "line");
    line.id = `line-${i}`;
    for (let j = 0; j < n; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `cell-${n * i + j}`;
        cell = additionalClasses(n, i, j, cell);
        // DEBUG
        cell.textContent = `${n * i + j}`;

        line.appendChild(cell);
    }
    return line;
}

function createGrid(n) {
    if (!Number.isInteger(n) || n <= 0) {
        alert(`Wrong n: ${n}`);
        throw new Error("Given unappropriate grid size!");
    }
    const container = document.querySelector("#main-container");
    for (let i = 0; i < n; i++) {
        line = createLine(n, i);
        container.appendChild(line);
    }
}

function onLoad() {
    const n = 16;
    createGrid(n);
    console.log(`Created a ${n}x${n} grid!`);
}

onLoad()
