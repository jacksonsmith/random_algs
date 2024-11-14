/*
 Enunciado: Ataque do Cavalo

 Você recebe:
 1. Um número inteiro positivo N, representando o tamanho de um tabuleiro de xadrez de N x N.
 2. Um array `position` de tamanho 2, representando a posição inicial de um cavalo no tabuleiro na forma [X, Y].
 3. Um array `opponents` contendo as posições das peças oponentes no tabuleiro. 
    Cada entrada no array `opponents` é um array de tamanho 2 na forma [i, j], representando as coordenadas da peça oponente.
 4. Um número inteiro positivo K representando o número máximo de movimentos permitidos para o cavalo.

 O objetivo é calcular o número máximo de peças oponentes que o cavalo pode capturar em, no máximo, K movimentos. Considere as seguintes regras:

 - A captura ocorre se o cavalo aterrissa em uma posição que contém uma peça oponente.
 - O cavalo não pode capturar a mesma peça oponente mais de uma vez.
 - O cavalo deve permanecer dentro dos limites do tabuleiro.

 Movimentação do Cavalo:
 - O cavalo em xadrez se move em formato de "L". Isso significa que ele se move duas casas em uma direção (horizontal ou vertical)
   e uma casa em uma direção perpendicular, totalizando 8 movimentos possíveis.
 - A partir de uma posição `(x, y)`, os movimentos possíveis do cavalo são:
   1. (x + 2, y + 1)
   2. (x + 2, y - 1)
   3. (x - 2, y + 1)
   4. (x - 2, y - 1)
   5. (x + 1, y + 2)
   6. (x + 1, y - 2)
   7. (x - 1, y + 2)
   8. (x - 1, y - 2)
 - O cavalo "salta" diretamente para essas posições, em vez de se mover uma casa de cada vez.

 Entrada:
 - Um inteiro N (tamanho do tabuleiro).
 - Um array contendo dois inteiros [X, Y] (posição inicial do cavalo).
 - Um array `opponents` contendo arrays com dois inteiros (localizações das peças oponentes).
 - Um inteiro K (número máximo de movimentos).

 Saída:
 - Retorne o número máximo de peças oponentes que o cavalo pode capturar em, no máximo, K movimentos.

 Restrições:
 - 1 <= N <= 8
 - 0 <= X, Y < N (posição inicial do cavalo)
 - 0 <= i, j < N, para cada [i, j] no array `opponents`
 - 1 <= K <= 10

 Exemplo:
 Entrada:
 N = 8
 position = [3, 2]
 opponents = [[5, 1], [4, 5], [5, 4]]
 K = 1

 Saída:
 1

 Explicação:
 O cavalo começa na posição [3, 2] e pode se mover para várias posições. No entanto, ele só tem 1 movimento,
 então ele só consegue capturar uma peça oponente em uma posição próxima.



0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 1 0 0 0 0 0 0
0 0 0 0 2 0 0 0
2 0 0 2 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 

*/



const placeKnightAndOpponents = (
  N: number,
  position: number[],
  opponents: number[][]
): number[][] => {
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

const generateBoard = (N: number): number[][] => {
  const board = Array.from({ length: N }, () => Array(N).fill(0));
  return board;
};

const N = 8
const position = [3, 2]
const opponents = [[5, 1], [4, 5], [5, 4]]
const board = generateBoard(N)

placeKnightAndOpponents(N, position, opponents)

const isOnXLimit =  (x: number) => x > 0 && x <= N - 1
const isOnyLimit = (y: number) =>  y > 0 && y <= N - 1
const isOpponent = (x: number, y: number) =>  board[x][y] === 2

const calculatePositions = (coordinate: number[]) => {
  const result: number[][] = []
  const x = coordinate[0]
  const y = coordinate[1]

  if (isOnyLimit(y + 2) && isOnXLimit(x - 1) && isOpponent(x - 1, y + 2 )) { //1
    result.push([y + 2, y - 1])
  }

  if (isOnyLimit(y + 2)  && isOnXLimit(x + 1) && isOpponent(x + 1, y + 2)) { //2
    result.push([y + 2, y - 1])
  }

  if (isOnXLimit(x - 2)  && isOnyLimit(y - 1) && isOpponent(x - 2, y - 1)) { //3
    result.push([y + 2, y - 1])
  }

  if (isOnXLimit(x - 2) && isOnyLimit(y + 1) && isOpponent(x - 2, y + 1)) { //4
    result.push([y + 2, y - 1])
  }

  if (isOnXLimit(x + 2) && isOnyLimit(y - 1) && isOpponent(x + 2, y - 1)) { //5
    result.push([y + 2, y - 1])
  }

  if (isOnXLimit(x + 2) && isOnyLimit(y + 1) && isOpponent(x + 2, y + 1)) { //6
    result.push([y + 2, y - 1])
  }

  if (isOnyLimit(y + 2)  && isOnXLimit(x - 1) && isOpponent(x - 1, y + 2)) { //7
    result.push([y + 2, y - 1])
  }

  if (isOnyLimit(y + 2)  && isOnXLimit(x + 1) && isOpponent(x + 1, y + 2)) { //8
    result.push([y + 2, y - 1])
  }


  return result
}


const bfsKnight = (node: number[], queue: number[][] = [], visited = new Set<string>(), count = 0) => {
    if (!visited.has(node.toString())) {
      queue.push(node)
    }

    while(queue.length > 0) {
      const current = queue.shift()
      
      if (!current) return

      visited.add(current!.toString())

      const nextPositions = calculatePositions([current[0], current[1]])

      for (let i = 0; i < nextPositions.length; i++) {
        count++
        queue.push(nextPositions[i])
      }
    }

    return count
}

const count = bfsKnight(position)

console.log(count)