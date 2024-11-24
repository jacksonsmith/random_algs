/**
 * @param {number[]} stones
 * @return {number}
 */

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Insere um elemento no heap
    insert(node) {
        this.heap.push(node);
        this._heapifyUp();
    }

    // Remove o maior elemento do heap
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    // Retorna o maior elemento do heap sem removê-lo
    getMax() {
        return this.heap[0] || null;
    }

    // Heapify para subir o elemento inserido
    _heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Heapify para descer o elemento após a extração
    _heapifyDown() {
        let index = 0;

        while (2 * index + 1 < this.heap.length) {
            let largerChildIndex = 2 * index + 1; // Filho esquerdo
            const rightChildIndex = 2 * index + 2; // Filho direito

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] > this.heap[largerChildIndex]
            ) {
                largerChildIndex = rightChildIndex;
            }

            if (this.heap[index] >= this.heap[largerChildIndex]) break;

            [this.heap[index], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[index]];
            index = largerChildIndex;
        }
    }
}



var lastStoneWeight = function (stones) {
    const maxHeap = new MaxHeap();

    for (let i = 0; i < stones.length; i++) {
        maxHeap.insert(stones[i])
    }

    while (maxHeap.heap.length > 1) {
        let bigger = maxHeap.extractMax()
        let secondBigger = maxHeap.extractMax()

        const result = Math.max(bigger, secondBigger) - Math.min(bigger, secondBigger);

        if (result > 0) {
            maxHeap.insert(result)
        }
    }

    return maxHeap.heap.length === 0 ? 0 : maxHeap.extractMax();
};