const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};


const bfs = (node, queue = []) => {
    const visited = new Set()
    queue.push(node)

    while (queue.length) {
        const visiting = queue.shift()

        if (!visited.has(visiting)) {
            console.log("visitando: ", visiting)

            visited.add(visiting)
    
            for (let i=0; i < graph[visiting].length; i++) {
                const neighbor = graph[visiting][i]
                if (!visited.has(neighbor))
                    queue.push(neighbor)
            }
        }
    }    
}

bfs('A')