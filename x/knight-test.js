// const N = 8
// const position = [3, 2]
// const opponents = [[5, 1], [4, 5], [5, 4]]
// const board = generateBoard(N)

const generateBoard = (N) => {
  return Array.from({ length: N }, () => Array(N).fill(0));
};

const placeKnightAndOpponents = (N, position, opponents) => {
  const board = generateBoard(N);

  // Coloca o cavalo no tabuleiro
  const [kx, ky] = position;
  if (kx >= 0 && kx < N && ky >= 0 && ky < N) {
    board[kx][ky] = 1; // Representa o cavalo
  }

  // Coloca os oponentes no tabuleiro
  for (const [ox, oy] of opponents) {
    if (ox >= 0 && ox < N && oy >= 0 && oy < N) {
      board[ox][oy] = 2; // Representa um oponente
    }
  }

  return board;
};

const N = 5;
const position = [0, 0];
const opponents = [[2, 1], [3, 3], [4, 2], [1, 2]];
const K = 2;

const board = placeKnightAndOpponents(N, position, opponents);

const moves = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]
];

const isValidMove = (x, y, N) => {
  return x >= 0 && x < N && y >= 0 && y < N;
};

const bfsKnight = (start, K, board) => {
  let queue = [[start, 0]]; // A posição e o nível de movimento
  const visited = new Set();
  let count = 0;

  while (queue.length > 0) {
    const [current, level] = queue.shift();
    const [x, y] = current;

    // Verifica se o nível de movimento excede K
    if (level > K) break;

    // Verifica se já visitou essa posição
    const key = `${x},${y}`;
    if (visited.has(key)) continue;
    visited.add(key);

    // Se a posição atual é um oponente, captura e incrementa o contador
    if (board[x][y] === 2) {
      count++;
      board[x][y] = 0; // Marca o oponente como capturado
    }

    // Adiciona todos os movimentos válidos do cavalo à fila
    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValidMove(newX, newY, N) && !visited.has(`${newX},${newY}`)) {
        queue.push([[newX, newY], level + 1]);
      }
    }
  }

  return count;
};

  
  // Execução
  const capturedCount = bfsKnight(position, K, board);
  console.log(capturedCount); // Saída esperada: 1
  