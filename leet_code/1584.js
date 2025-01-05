/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length
    const visited = new Set()
    const distances = {}
    const heap = [[0, 0]]
    let totalCost = 0
    const g = {}

    for (let i = 0; i < n; i++) {
        g[i] = []
        for (let j = 0; j < n; j++) {
            if (i === j) continue
            const weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
            g[i].push([j, weight])
        }
    }

    for (let node in g) {
        distances[node] = Infinity;
    }
    

    while(heap.length) {
        heap.sort((a,b) => a[1] - b[1])
        const [current, weight] = heap.shift()

        if (visited.has(current)) continue

        visited.add(current)
        totalCost+= weight

        for (const [neighboor, Nweight] of g[current]) {
            if (!visited.has(neighboor) && Nweight < distances[neighboor]) {
                distances[neighboor] = Nweight
                heap.push([neighboor, Nweight ])
            }
        }
    }

    return totalCost
};