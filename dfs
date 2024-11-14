const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};


const dfs = (node, visited = new Set()) => {
    if (!visited.has(node)) {

        console.log("visiting: ", node)
        visited.add(node)

        for (let i=0; i < graph[node].length; i++) {
            const neighbor = graph[node][i]
            if (!visited.has(neighbor))
                dfs(neighbor, visited)
        }
    }
}

dfs('A')