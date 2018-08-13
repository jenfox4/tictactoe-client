const gameBoard = ['x', // 0
  'o', // 1
  '', // 2
  '', // 3
  'x', // 4
  '', // 5
  'o', // 6
  'x', // 7
  'o'
] // 8

const findEmptySpaces = function (gameBoard) {
  const emptySpaces = []
  let idx = gameBoard.indexOf('')
  while (idx !== -1) {
    emptySpaces.push(idx)
    idx = gameBoard.indexOf('', idx + 1)
  }
  return emptySpaces
}

function winning (board, player) {
  if (
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    return true
  } else {
    return false
  }
}

const moves = []

function Move (index, score) {
  this.index = index
  this.score = score
}

const minimax = function (reboard, player) {
  iter++
  let array = findEmptySpaces(reboard)
  if (winning(reboard, humanPlayer)) {
    return {
      score: -10
    };
  } else if (winning(reboard, aiPlayer)) {
    return {
      score: 10
    };
  } else if (array.length === 0) {
    return {
      score: 0
    };
  }

  var moves = [];
  for (var i = 0; i < array.length; i++) {
    var move = {};
    move.index = reboard[array[i]];
    reboard[array[i]] = player;

    if (player == aiPlayer) {
      var g = minimax(reboard, huPlayer);
      move.score = g.score;
    } else {
      var g = minimax(reboard, aiPlayer);
      move.score = g.score;
    }
    reboard[array[i]] = move.index;
    moves.push(move);
  }

  var bestMove;
  if (player === aiPlayer) {
    var bestScore = -10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    var bestScore = 10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}
