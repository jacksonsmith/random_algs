/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) { //00111
    let zeroCount = 0
    let oneCount = 0
    let result = -Infinity
    const hash = new Map()

    for (const letter of s) {
        hash[letter] = (hash[letter] || 0) + 1
    }

    hash[1] = hash[1] ?? 0

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            zeroCount++
        } else {
            oneCount++
        }

        result = Math.max(result, zeroCount + (hash[1] - oneCount))
    }

    return result
};


console.log(maxScore("011101"))