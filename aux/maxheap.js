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
          if (this.heap[parentIndex].value >= this.heap[index].value) break;

          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          index = parentIndex;
      }
  }

  // Heapify para descer o elemento após a extração
  _heapifyDown() {
      let index = 0;

      while (2 * index + 1 < this.heap.length) {
          let largerChildIndex = 2 * index + 1; // Left child
          const rightChildIndex = 2 * index + 2; // Right child

          if (
              rightChildIndex < this.heap.length &&
              this.heap[rightChildIndex].value > this.heap[largerChildIndex].value
          ) {
              largerChildIndex = rightChildIndex;
          }

          if (this.heap[index].value >= this.heap[largerChildIndex].value) break;

          [this.heap[index], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[index]];
          index = largerChildIndex;
      }
  }
}


export const maxHeap = new MaxHeap();