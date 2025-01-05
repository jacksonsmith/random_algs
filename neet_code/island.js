const GRID = {
    WATER : -1,
    TREASURE_CHEST: 0,
    LAND: 2147483647,
    LAND_VISITED: -2
}

const ALL_DIRECTIONS = [[-1,0], [1,0], [0,-1], [0,1]]

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const m = grid.length
        const n = grid[0].length

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const visited = Array.from({ length: m }, () => Array(n).fill(false));

                if (grid[i][j] === GRID.LAND) {
                    const count = this.bfs(i,j,visited,grid)
                    grid[i][j] = count
                }
            }
        }
    }

    bfs(startRow, startCol,visited, grid) {
        if (grid[startRow][startCol] !== GRID.LAND)  return grid[startRow][startCol]

        const queue = [[startRow,startCol,0]]

        while (queue.length) {
            const [row, col, count] = queue.shift()

            //visiting
            visited[row][col] = true
            // count++

            for (const [nRow, nCol] of ALL_DIRECTIONS) {
                const nextDirection = [row + nRow, col + nCol]
                if (!this.isValidRowCol(...nextDirection, grid)) continue
                const nextRow = nextDirection[0]
                const nextCol = nextDirection[1]

                if (visited[nextRow][nextCol]) continue
                if (grid[nextRow][nextCol] === GRID.WATER) continue
                if (grid[nextRow][nextCol] === GRID.TREASURE_CHEST) return count + 1

                queue.push([...nextDirection, count + 1])
            }
        }
        return 0
    }

    isValidRowCol (row, col, grid) {
        const isValidRow = row >= 0 && row < grid.length
        const isValidCol = col >= 0 && col < grid[0].length

        return isValidRow && isValidCol
    }
}

const grid = [
    [2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],
    [0,-1,2147483647,2147483647]
  ]

const s = new Solution()

s.islandsAndTreasure(grid)

console.log(grid)