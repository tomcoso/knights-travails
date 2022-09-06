const knightMoves = (function () {
  const Node = function (data, moves = [], parent) {
    return { data, moves, parent };
  };

  const getMoves = function (origin) {
    const moves = [];
    for (let i = -2; i <= 2; i++) {
      if (i === 0) continue;
      for (let j = 2; j >= -2; j--) {
        if (Math.abs(j) === Math.abs(i) || j === 0) continue;
        let move = [origin[0] + i, origin[1] + j];
        if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) continue;
        moves.push(move);
      }
    }
    return moves;
  };

  const buildAndSearch = function (queue, target) {
    let node = queue.shift();
    for (let x of node.moves) {
      if (x[0] === target[0] && x[1] === target[1]) {
        let path = [node.data, x];
        let parent = node.parent;
        while (parent !== "root") {
          path.splice(0, 0, parent.data);
          parent = parent.parent;
        }
        return path;
      }
      queue.push(Node(x, getMoves(x), node));
    }
    return buildAndSearch(queue, target);
  };

  const script = function (origin, destination) {
    let grid = [].concat(origin).concat(destination);
    for (let x of grid) {
      if (x < 0) return "Invalid input";
      if (x > 7) return "Invalid Input";
    }
    const root = Node(origin, getMoves(origin), "root");
    return buildAndSearch([root], destination);
  };
  return script;
})();
// console.log(knightMoves([2, 3], [2, 2]));

export default knightMoves;
