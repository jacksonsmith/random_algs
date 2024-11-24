/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    let array = [2,3,5]

    if ( n === 0) {
        return false
    }

    if ( n === 1) {
        return true
    }

    for (i = 0; i < array.length; i++) { // o(1)
        let divider = array[i]

        while(n % divider === 0 ) { // log (n)
            return isUgly(n / divider)
        }
    }

    return false

};


console.log(isUgly(7))