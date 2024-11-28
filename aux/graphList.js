class Graph {
    constructor() {
        this.vertices = []
        this.edgesSize = 0
        this.verticeSize = 0
    }


    addVertice() {
        this.vertices.push([])
        this.verticeSize++
    }

    addEdge(v,e, w = null) {
        this.vertices[v].push({e,w})
        this.edgesSize++
    }
}


const graph = new Graph()

graph.addVertice()
graph.addVertice()

graph.addEdge(0,1)
graph.addEdge(1,0)


console.log(JSON.stringify(graph.vertices))
console.log(JSON.stringify(graph.edgesSize))
console.log(JSON.stringify(graph.verticeSize))