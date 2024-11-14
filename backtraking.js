// const tabuleiro = [
//     [1, 0, 0, 0],
//     [0, 0, 3, 1],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0]
// ]

// const expectedResponse = [ 
//     [1, 3, 4, 2],
//     [4, 2, 3, 1],
//     [3, 1, 2, 4],
//     [2, 4, 1, 3] 
// ]


// const fillCell = (row,column) => {
//     for (let attempt = 1; attempt <=4; attempt++ ) {
//         tabuleiro[row][column] = attempt
//         if (!verifyColumn(column, attempt) && !verifyRow(row,attempt) && !verifySubgrade(row, column, attempt)) {
//             tabuleiro[row][column] = 0
//         }
//     }
// }


// const verifyRow = (row, attempt) => {
//     for (let i = 0; i < tabuleiro.length; i++) {
//         if (tabuleiro[row][i] === attempt) {
//             return false;
//         }
//     }
// }

// const verifyColumn = (column, attempt) => {
//     for (let i = 0; i < tabuleiro.length; i++) {
//         if (tabuleiro[i][column] === attempt) {
//             return false;
//         }
//     }
// }

// const verifySubgrade = (row, column, attempt) => {
//     const startRow = Math.floor(row / 2) * 2;
//     const startCol = Math.floor(column / 2) * 2;
//     for (let i = startRow; i < startRow + 2; i++) {
//         for (let j = startCol; j < startCol + 2; j++) {
//             if (tabuleiro[i][j] === attempt) {
//                 return false;
//             }
//         }
//     }
// }


// for (let i =0; i < tabuleiro.length; i++) {
//     for (let j =0; j < tabuleiro.length[0]; j++) {
//         fillCell(i,j)
//     }   
// }

// const solveSudoku = () => {
//     for (let row = 0; row < tabuleiro.length; row++) {
//         for (let col = 0; col < tabuleiro[0].length; col++) {
//             if (tabuleiro[row][col] === 0) {
//                 for (let num = 1; num <= 4; num++) {
//                     if (fillCell(row, col, attempt)) {
//                         tabuleiro[row][col] = num;
//                         if (solveSudoku()) {
//                             return true;
//                         }
//                         tabuleiro[row][col] = 0; // Backtracking
//                     }
//                 }
//                 return false; // Se nenhum número puder ser colocado, retorna falso
//             }
//         }
//     }
//     return true; // Sudoku resolvido
// };




// console.log(tabuleiro)

// console.log(tabuleiro == expectedResponse)

const sumArray = (x) => x.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const result = [];

const findCombinations = (candidates, target) => {
    const backtrack = (currentCombination, startIndex, currentSum) => {
        console.log(`Explorando combinação: ${currentCombination}, Soma atual: ${currentSum}`);
        
        if (currentSum === target) {
            console.log(`>>> Encontrou uma combinação válida: ${currentCombination}`);
            result.push([...currentCombination]);
            return;
        }

        if (currentSum > target) {
            console.log(`Soma excedeu o alvo com a combinação: ${currentCombination}, voltando...`);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            console.log(`Adicionando ${candidates[i]} à combinação: ${currentCombination}`);
            
            backtrack(currentCombination, i, currentSum + candidates[i]);
            
            console.log(`Removendo ${candidates[i]} da combinação antes de voltar: ${currentCombination}`);
            currentCombination.pop(); // Backtracking
        }
    };

    backtrack([], 0, 0);
};

findCombinations([2, 3, 6, 7], 7);
console.log('Resultado final:', result);
