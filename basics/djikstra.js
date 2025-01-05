function djikstra(node) {
    const visited = new Set()
    const distances = {}

    for (const node of Object.keys(graphDijkstra)) {
        distances[node] = Infinity
    }

    distances[node] = 0

    const priorityQueue = [[node, 0]]

    while(priorityQueue.length) {
        priorityQueue.sort((a,b) => a[1] - b[1])
        const [currentNode, currentDistance] = priorityQueue.shift()

        if (visited.has(currentNode)) continue
        visited.add(currentNode)

        for (const [neighboor, weight] of Object.entries(graphDijkstra[currentNode])) {
            const neighboorDistance = currentDistance + weight 

            if (neighboorDistance < distances[neighboor]) {
                distances[neighboor] = neighboorDistance
                priorityQueue.push([neighboor, neighboorDistance])
            }
        }

    }


    return distances



}


const graphDijkstra = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
  };
  

  console.log(djikstra('A'))