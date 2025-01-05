/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const green = 'green'
const red = 'red'

var isBipartite = function(graph) { // [[1,2,3],[0,2],[0,1,3],[0,2]]
    const n = graph.length // 4
    const visited = new Map(); // Compartilhado em toda execução

    for (let i = 0; i < n; i++) { // [0,3]
        if (visited.has(i)) continue
        if (!dfs(graph, i, green, visited)) { //
            return false // return false
        }
    }

    return true
};

const dfs = (graph, node, nodeColor = green, visited) => { //0, verde, []
    if (visited.has(node)) return visited.get(node) === nodeColor // map.has(0) -> false

    visited.set(node, nodeColor) // {0: 'verde'}

    const neighborColor = nodeColor === green ? red : green // vermelho

    for (const neighbor of graph[node]) { // 1,2,3
        if  (!dfs(graph, neighbor, neighborColor, visited )) // [1], vermelho, {0: 'verde'}
            return false //return false
    }

    return true
}


// console.log(isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]]))
console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]]));

/*
graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
check if visited with color
visit
calcNeigboor
AddNeighborStack

dfs(0) map {} verde
- check if visited with color -> false
- visit {0: verde}
- calcNeigboor -> vermelho
- AddNeighborStack [1]

dfs(0)(1) map {1} vermelho
- check if visited with color -> false
- visit {0: verde, 1: vermelho}
- calcNeigboor -> verde
- AddNeighborStack [0,2]

dfs(1)(0) map {0: verde, 1: vermelho} verde
- check if visited with color -> true

dfs(1)(2) map {0: verde, 1: vermelho} verde
- check if visited with color -> false
- visit {0: verde, 1: vermelho, 2: verde}
- calcNeigboor -> vermelho
- AddNeighborStack [0,1,3]


dfs(2)(0) map {0: verde, 1: vermelho, 2: verde} vermelho
- check if visited with color -> visited.has(0) && color verde !== 'vermelho' return false
- visit {0: verde, 1: vermelho, 2: verde}
- calcNeigboor -> vermelho
- AddNeighborStack [0,1,3]


*/


/*
graph = [[1,3],[0,2],[1,3],[0,2]]

dfs(0) map {} verde
- check if visited map.has(0) false
    - check color Ncolor
- visit {0: verde}
- calcNeigboor -> vermelho
- AddNeighborStack [1,3]

graph = [[1,3],[0,2],[1,3],[0,2]]

dfs(0)(1) map {} vermelho
- check if visited map.has(1) false
    - check color Ncolor
- visit {0: verde, 1: vermelho}
- calcNeigboor -> verde
- AddNeighborStack [0,2]


dfs(0)(1)(0) map {0: verde, 1: vermelho} verde
- check if visited map.has(0) true
    - check color verde === verde return true


dfs(0)(1)(2) map {} verde
- check if visited map.has(2) false
    - check color Ncolor
- visit {0: verde, 1: vermelho, 2: verde}
- calcNeigboor -> vermelho
- AddNeighborStack [1,3]

dfs(0)(1)(2)(1) map {0: verde, 1: vermelho, 2: verde} %vermelho
- check if visited map.has(1) true
    - - check color Ncolor 1 -> vermelho === %vermelho


dfs(0)(1)(2)(3) map {0: verde, 1: vermelho, 2: verde} %vermelho
- check if visited map.has(3) false
    - check color Ncolor
- visit {0: verde, 1: vermelho, 2: verde, 3: 'vermelho'}
- calcNeigboor -> verde
- AddNeighborStack [0,2]

*/