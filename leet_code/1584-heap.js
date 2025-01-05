class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return top;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length;
    const visited = new Set();
    const heap = new MinHeap(); // Fila de prioridade
    let totalCost = 0;
    const g = {};

    // Construção do grafo
    for (let i = 0; i < n; i++) {
        g[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            g[i].push([j, weight]);
        }
    }

    // Inicializa o heap com o primeiro nó
    heap.push([0, 0]); // [peso, nó inicial]

    while (heap.size() > 0) {
        const [weight, current] = heap.pop();

        if (visited.has(current)) continue;

        visited.add(current);
        totalCost += weight;

        for (const [neighbor, nWeight] of g[current]) {
            if (!visited.has(neighbor)) {
                heap.push([nWeight, neighbor]);
            }
        }
    }

    return totalCost;
};
