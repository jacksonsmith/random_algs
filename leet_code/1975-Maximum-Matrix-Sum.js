/**
 * @param {number[][]} matrix
 * @return {number}
 */

//[1, 2, -3],[-3, 4]
var maxMatrixSum = function(matrix) {
    var totalSum = 0
    var minValue = Infinity
    var negativeCount = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let current = matrix[i][j]
            totalSum += Math.abs(current)
            minValue = Math.min(minValue, Math.abs(current))

            if (current < 0) {
                negativeCount++
            }
        }
    }

    if (negativeCount % 2 === 0) {
        return totalSum
    } else {
        const minus = 2 * Math.abs(minValue)
        return totalSum - minus
    }
};


console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]))