const comb = (n, banned, maxSum) => { // 2, 3 ,4  
    const result = []
    const set = new Set(banned)
    const allowedNumbers = []

    for (let i = 1; i <= n; i++) {
        if (set.has(i)) continue

        allowedNumbers.push(i)
    }

    console.log("allowedNumbers: ", allowedNumbers)

    if (!allowedNumbers.length) return 0

    backtrack(0, allowedNumbers, [], result)

    let mapReducedFiltered = result.map(
        (combination) => ({
            sum: combination.reduce((a, b) => a + b, 0), // Calcula a soma
            length: combination.length, // Calcula o comprimento
        })).filter((n) => n[0] <= maxSum)


    console.log("result ->: ", result)

    console.log("map reduce ->: ", mapReducedFiltered)

    return mapReducedFiltered.sort((a, b) => b.sum - a.sum)?.[0]?.length ?? 0
}

function backtrack(start, arr, current, result) {
    if (current.length > 0) { // [2]
        result.push([...current])
    }

    for (let i = start; i < arr.length; i++) { //
        current.push(arr[i]) // [2]
        backtrack(i + 1, arr, current, result) // [2, 3]
        current.pop()
    }
}

const result = comb(5, [1, 6, 5], 6)

console.log("final result: ", result)