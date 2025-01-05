/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    const visited = {}
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            const node = `${row},${column}`;
            if (!visited[node] && dfs(node, visited, grid, null)) return true;
        }
    }

    return false
};

const DFS_NODE_STATUS = {
    VISITING: 'visiting',
    VISITED: 'visited',
    UNVISITED: 'unvisited'
}

const ALL_DIRECTIONS = [[-1, 0], [1,0], [0,-1], [0,1]]

function isBoundryLimits(row, column, grid) {
    const isValidRow = row >= 0 && row < grid.length
    const isValidColumn = column >= 0 && column < grid[0].length

    return isValidRow && isValidColumn
}

function dfs(node, visited, grid, parent) {
    if (visited[node] === DFS_NODE_STATUS.VISITED) {
        return false
    }

    if (visited[node] === DFS_NODE_STATUS.VISITING) {
        return true
    }

    visited[node] = DFS_NODE_STATUS.VISITING

    for (const [directionRow, directionColumn] of ALL_DIRECTIONS) {
        const [currentRow, currentColumn] = node.split(",").map(Number)
        const nextRow = currentRow + directionRow
        const nextColumn = currentColumn + directionColumn
        const nextNode = `${nextRow},${nextColumn}`
        if (!isBoundryLimits(nextRow, nextColumn, grid)) continue
        if (grid[nextRow][nextColumn] !== grid[currentRow][currentColumn]) continue
        if (nextNode === parent) continue; // Ignorar o nó pai

        if (dfs(nextNode, visited, grid, node)) {
            return true
        }
    }

    
    visited[node] = DFS_NODE_STATUS.VISITED

    return false
}

// const grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]

const grid2 = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]

const grid3 = [["a","b","b"],["b","z","b"],["b","b","a"]]

console.log(containsCycle(grid3))