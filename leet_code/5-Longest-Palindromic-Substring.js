/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    return naive(s)
};

function naive(s) {
    let max = ""
    for (let i = 0; i < s.length; i++) {
        let j = i
        while (j < s.length) {
            const current = s.slice(i,j + 1)
            if (isPalindrome(current)) {
                if (current.length > max.length) {
                    max = current
                }
            }
            j++
        }
    }

    return max
}

function isPalindrome(s) {
    let j = s.length -1

    for (let i=0; i < s.length / 2; i++) {
        if (s[i] !== s[j]) {
            return false
        }
        j--
    }
    return true
}
console.log(longestPalindrome("babad"))

console.log(longestPalindrome("babad") === "bab")