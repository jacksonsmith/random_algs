/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const array = Array.from(x.toString())
    let l = 0
    let r = array.length - 1

    while(l < r) {
        if (array[l] !== array[r]) {
            return false
        }

        l++
        r--
    }

    return true
};

console.log(isPalindrome(-121))