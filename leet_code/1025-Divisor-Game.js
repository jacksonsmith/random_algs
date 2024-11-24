/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    return whoLost(n, "Alice") === "Bob"
};


function whoLost(n, player) {
    if (n === 0) {
        return player
    }

    for(let i = 1; i < n; i++) { //o (n)
        if (n % i === 0) {
            const nextPlayer = player === "Alice" ? "Bob" : "Alice";
            return whoLost(n - i, nextPlayer) // (n - 1)
        }
    }

    return player
}

console.log(divisorGame(3))