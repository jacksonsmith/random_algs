/**
 * @param {number[][]} grid
 * @return {number}
 */
const directions = [["up", -1, 0], ["down", 1, 0], ["left", 0, -1], ["right", 0, 1]]
var islandPerimeter = function(grid) {
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count += dfs(i,j,grid)
            }
        }
    }

    return count
};


function dfs(row,column, grid) {
    if (grid[row][column] === -1) return 0

    let count = doCount(row, column, grid)

    grid[row][column] = -1


    for (const [direction, incRow, incColumn] of directions) {
        const newRow = row + incRow
        const newColumn =  column + incColumn

        if (!isValidBoundraries(newRow, newColumn, grid))
            continue;

        if (grid[newRow][newColumn] === 1) {
            count += dfs(newRow, newColumn, grid)
        }
    }

    return count
}

function isValidBoundraries(row, column, grid) {
    let result = (row >= 0 && row < grid.length) && (column >= 0 && column < grid[0].length)
    return result
}

function doCount(row,column, grid) {
    let count = 0

    for (const [direction, incRow, incColumn] of directions) {
        const newRow = row + incRow
        const newColumn =  column + incColumn


        if (!isValidBoundraries(newRow, newColumn, grid) ) {
            count +=1
        } else if (grid[newRow][newColumn] === 0) {
            count += 1
        }
    }

    return count
}


let grid =  [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
let expectedOutuput = 16
console.log(islandPerimeter(grid))
console.log(grid)
// [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]