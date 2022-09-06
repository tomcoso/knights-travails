const knightMoves = (function () {
  const Node = function (data, moves = []) {
    return { data, moves };
  };

  const buildAndSearch = function (node = origin, target = destination) {
    if (node === target) return node, target;

    const moves = [];
    for (let i = -2; i <= 2; i++) {
      if (i === 0) continue;
      for (let j = 2; j >= -2; j--) {
        if (Math.abs(j) === Math.abs(i) || j === 0) continue;
        let move = [node[0] + i, node[1] + j];
        if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) continue;
        moves.push(move);
      }
    }
    const root = Node(node, moves);
    console.log(root);
  };

  const calculateMoves = function (origin, destination) {
    console.log(origin, destination);
    buildAndSearch(origin, destination);
  };
  return calculateMoves;
})();
knightMoves([1, 4], [4, 5]);
