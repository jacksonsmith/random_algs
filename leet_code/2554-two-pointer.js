const comb = (n, banned, maxSum) => {
    const set = new Set(banned);
    const allowedNumbers = [];

    // Criar lista de números permitidos
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            allowedNumbers.push(i);
        }
    }

    console.log("allowedNumbers: ", allowedNumbers);

    if (!allowedNumbers.length) return 0;

    let sum = 0;
    const numbers = [];

    // Iterar sobre os números permitidos e somar
    for (let i = 0; i < allowedNumbers.length; i++) {
        const currentSum = sum + allowedNumbers[i];
        if (currentSum <= maxSum) {
            sum = currentSum;
            numbers.push(allowedNumbers[i]);
        } else {
            break; // Sai do loop se a soma exceder maxSum
        }
    }

    console.log("numbers: ", numbers);

    return numbers.length; // Retorna a quantidade de números permitidos adicionados
};

// const result = comb(7, [11], 50)
const result = comb(5, [1,6,5], 6)

console.log("final result: ", result)