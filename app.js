let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#rst-btn');
let playAgainbtn = document.querySelector('#pa-btn');
let msgContainer = document.querySelector('.winner-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hidden");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disbleBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    disbleBoxes();
};

const checkWinner = () => {
    for (let pattern of winCombos) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
};

playAgainbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
