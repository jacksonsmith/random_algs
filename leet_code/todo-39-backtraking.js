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
