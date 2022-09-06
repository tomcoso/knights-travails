import knightMoves from "./main.js";

const PATH = knightMoves([1, 1], [1, 7]);
console.log(PATH.join(" -> "));

const BOARD = document.getElementById("board");

const makeBoard = function (PATH) {
  if (typeof PATH === "string") throw "Invalid Input";
  BOARD.replaceChildren();
  let length = 8;
  for (let i = length - 1; i >= 0; i--) {
    const row = document.createElement("div");
    row.classList.add(`row`);
    BOARD.append(row);
    for (let j = 0; j <= length - 1; j++) {
      const cell = document.createElement("div");
      cell.classList.add(`r${i}c${j}`);
      row.append(cell);
    }
  }

  let origin = PATH.shift();
  let target = PATH.pop();
  let steps = PATH;

  origin = document.querySelector(`.r${origin[0]}c${origin[1]}`);
  target = document.querySelector(`.r${target[0]}c${target[1]}`);
  steps = steps.map((x) => {
    return document.querySelector(`.r${x[0]}c${x[1]}`);
  });

  origin.classList.add("origin");
  origin.textContent = "START";
  target.classList.add("target");
  target.textContent = "END";
  let n = 1;
  steps.forEach((x) => {
    x.classList.add("step");
    x.textContent = n++;
  });
};
makeBoard(PATH);
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let newOrigin = document.querySelector("#origin").value;
  let newTarget = document.querySelector("#target").value;
  newOrigin = [+newOrigin[0], +newOrigin[newOrigin.length - 1]];
  newTarget = [+newTarget[0], +newTarget[newTarget.length - 1]];
  makeBoard(knightMoves(newOrigin, newTarget));
});
