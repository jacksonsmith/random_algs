class Graph {
    constructor(n) {
        this.nodes = Array(n).fill().map(() => []);
    }

    addEdge(a,b,weight = 0) {
        this.nodes[a].push([b,weight])
    }

    bfs(n) {
        let queue = [n]
        let visited = new Set()

        while(queue.length) {
            let current = queue.shift()
            visited.add(current)
            console.log(`visiting: ${current}`);

            for (const [node, weight] of this.nodes[current]) {
                if (visited.has(node)) continue
                console.log(`neighboor: ${node}, with weight: ${weight}`);

                visited.add(node)
                queue.push(node)
            }
        }
    }



        djikstra(src, target) {
            let visited = new Set()
            let distances = {}
            let queue = Object.keys(this.nodes)
            queue.shift()

            for (const node of queue) {
                distances[node] = Infinity
            }

            distances[src] = 0
            visited.add(src)


            while(queue.length) {
                //update weights
                queue.sort((a,b) => distances[a] - distances[b])
                let current = queue.shift()

                if (visited.has(current)) continue;
                visited.add(current)

                for (const [neighbor, neighborWeight] of this.nodes[current].slice(1)) {
                    if(visited.has(neighbor)) continue

                    let newDistance = distances[current] + neighborWeight

                    //atualiza vizinhos
                    if (newDistance < distances[neighbor]) {
                        distances[neighbor] = newDistance
                        queue.push(neighbor)
                    }
                }

            }


            console.log(distances)

            return distances

        }

        KruskalNoDJ () {
            const edges = []

            // console.log(this.nodes)

            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i]
                for (let j = 0; j < node.length; j++) {
                    const v_neighboor = node[0]
                    const v_weight = node[1]
                    edges.push([v_weight, node, v_neighboor])
                }
            }

            edges.sort((a,b) => a[0] - b[0])

            console.log(edges)
        }
}

// Criando um grafo com 5 nós
// const g = new Graph(6);

// // Adicionando arestas
// g.addEdge(1, 2, 7);
// g.addEdge(2, 1, 7);
// g.addEdge(1, 4, 3);
// g.addEdge(4, 1, 3);
// g.addEdge(2, 3, 6);
// g.addEdge(3, 2, 6);
// g.addEdge(2, 4, 2);
// g.addEdge(4, 2, 2);
// g.addEdge(2, 5, 5);
// g.addEdge(5, 2, 5);
// g.addEdge(3, 5, 1);
// g.addEdge(5, 3, 1);
// g.addEdge(4, 5, 8);
// g.addEdge(5, 4, 8);

// // Realizando BFS a partir do nó 0
// // g.bfs(1);

// g.djikstra(1)

const g = new Graph(7);

// Adicionando arestas com pesos
g.addEdge(1, 2, 2);
g.addEdge(1, 3, 4);
g.addEdge(2, 4, 7);
g.addEdge(2, 5, 1);
g.addEdge(3, 5, 3);
g.addEdge(4, 6, 1);
g.addEdge(5, 4, 2);
g.addEdge(5, 6, 5);

// Executando Dijkstra a partir do nó 1
// console.log(JSON.stringify(g.djikstra(1)) === JSON.stringify({
//     1: 0,
//     2: 2,
//     3: 4,
//     4: 5,
//     5: 3,
//     6: 6
//   }));


console.log(g.KruskalNoDJ())