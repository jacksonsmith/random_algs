
const prim = (g) => {

    const n = Object.keys(g).length

    const visited = new Set()
    const distances = {}
    const heap = [[0, 0]]

    for (let node in g) {
        distances[node] = Infinity;
    }
    

    while(heap.length) {
        heap.sort((a,b) => a[1] - b[1])
        const [current, _] = heap.shift()

        if (visited.has(current)) continue

        visited.add(current)

        for (const [neighboor, weight] of Object.entries(g[current])) {
            if (!visited.has(neighboor) && weight < distances[neighboor]) {
                distances[neighboor] = weight
                heap.push([neighboor, weight ])
            }
        }
    }

    console.log(distances)

    return distances

}

const g = {
    0: { 1: 2, 3: 6 },
    1: { 0: 2, 2: 3, 3: 8, 4: 5 },
    2: { 1: 3, 4: 7 },
    3: { 0: 6, 1: 8 },
    4: { 1: 5, 2: 7 }
};


prim(g)