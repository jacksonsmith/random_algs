
  class Node {
      constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
      }
  }

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node, parent = null) {
        if (!node) {
            return null
        }

        for (const neighboor of node.neighbors) {
            if (neighboor.val !== parent)
            this.cloneGraph(neighboor, node.val)
        }

        const newNode = new Node(node.val)
        if (newNode) newNode.neighbors.push(newNode)

        return newNode
    }

    //inOrder //preOrder postOrder
}


// Helper function to build a graph from an adjacency list
function buildGraph(adjList) {
    if (!adjList || adjList.length === 0) return null;

    const nodes = adjList.map((_, i) => new Node(i + 1)); // Create nodes with 1-based indexing

    // Link nodes based on adjacency list
    adjList.forEach((neighbors, i) => {
        nodes[i].neighbors = neighbors.map(index => nodes[index - 1]);
    });

    return nodes[0]; // Return the starting node
}

// Helper function to traverse the graph and convert it back to an adjacency list
function graphToAdjList(node) {
    if (!node) return [];

    const visited = new Map();
    const adjList = [];

    function dfs(curr) {
        if (visited.has(curr.val)) return;

        visited.set(curr.val, curr);
        adjList[curr.val - 1] = curr.neighbors.map(neighbor => neighbor.val);

        for (const neighbor of curr.neighbors) {
            dfs(neighbor);
        }
    }

    dfs(node);

    return adjList;
}

// Test case
const adjList = [[2], [1, 3], [2]];
const originalGraph = buildGraph(adjList);

const solution = new Solution();
const clonedGraph = solution.cloneGraph(originalGraph);

// Convert the cloned graph back to an adjacency list for comparison
const clonedAdjList = graphToAdjList(clonedGraph);

console.log("Input Adjacency List:", adjList);
console.log("Cloned Adjacency List:", clonedAdjList);

// Validate the result
if (JSON.stringify(adjList) === JSON.stringify(clonedAdjList)) {
    console.log("Test Passed!");
} else {
    console.log("Test Failed!");
}