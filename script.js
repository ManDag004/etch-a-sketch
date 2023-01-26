const board = document.querySelector(".board");
const slider = document.querySelector(".slider");
const size = document.querySelectorAll(".size")
const clear = document.querySelector("button")


function createBoard() {
    let val = slider.value;
    [...size].map(span => span.textContent = val)
    board.setAttribute("style", `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`)
    removeAllChildNodes(board)
    for (let i = 1; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('block');
        div.addEventListener("mouseover", (e) => {
            e.target.setAttribute("style", "background-color: black;")
        })
        board.appendChild(div)
    }
}


slider.addEventListener("input", createBoard)


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


clear.addEventListener("click", createBoard)