class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    // target 2
    // primeira busca
    // leftRow = 0
    // rightRow = 2
    // midRow = (2 + 0) / 2 = 1
    // midCol = (4 + 0) / 2 = 2
    // matrix[1,2] = 12
    // 

    // segunda busca
    // leftRow = 0
    // rightRow = 1
    // midRow = (0 + 1) / 2 = 0
    // midCol = (4 + 0) / 2 = 2
    // matrix[0,2] = 4
    // 

    // terceira busca
    // leftRow = 0
    // rightRow = 0
    // midRow = (0 + 0) / 2 = 0
    // midCol = (0 + 3) / 2 = 1
    // matrix[0,1] = 2
    // 

    searchMatrix(matrix, target) {
        const row = this.searchLine(matrix, target)

        if (row === -1) return false

        const result = this.searchCol(matrix, row, target)

        console.log(`result is: ${result}`)

        return result
    }

    searchLine(matrix, target) {
        const m = matrix.length
        let left = 0
        let right = m - 1

        while (left <= right) {
            let midRow = Math.floor((left + right) / 2)
            const isBiggerLast = target > matrix[midRow][matrix[midRow].length - 1]
            const isLeastFirst = target < matrix[midRow][0]

            if (target >= matrix[midRow][0] && target <= matrix[midRow][matrix[midRow].length - 1]) {
                return midRow
            } else if (isBiggerLast) {
                left = midRow + 1
            } else if (isLeastFirst) {
                right = midRow - 1
            }
        }

        return -1
    }

    searchCol(matrix, row, target) {
        let left = 0
        let right = matrix[row].length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (matrix[row][mid] === target) {
                return true
            } else if (target > matrix[row][mid]) {
                left = mid + 1
            } else if (target < matrix[row][mid]) {
                right = mid - 1
            }
        }

        return false
    }
}

class SolutionLinear {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    // target 2
    // primeira busca
    // leftRow = 0
    // rightRow = 2
    // midRow = (2 + 0) / 2 = 1
    // midCol = (4 + 0) / 2 = 2
    // matrix[1,2] = 12
    // 

    /*
    
    left = 0
    right = linha * height (12) - 1
    
    row = (6 -1 / 4 -> 1
    col -> 1
    
    1,3,5,7,10,[11]
    
    const matrix = [
        [1, 3, 5, 7],
        [10, [11], 16, 20],
        [23, 30, 34, 60],
    ];
    
    */


    searchMatrix(matrix, target) {
        const columnLines = matrix[0].length
        let left = 0
        // right = matrix.reduce((sum, row) => sum + row.length, 0);
        let right = (columnLines * matrix.length) - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            const current = matrix[Math.floor(mid / columnLines)][mid % columnLines]

            if (target === current) {
                return true
            } else if (target > current) {
                left = mid + 1
            } else if (target < current) {
                right = mid - 1
            }
        }

        return false
    }
}



const solution = new Solution()
const linearSolution = new SolutionLinear()

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target = 3

solution.searchMatrix(matrix, target)
console.log("linear solution: ", linearSolution.searchMatrix(matrix, target))