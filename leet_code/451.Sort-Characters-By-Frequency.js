class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper function to get the parent index
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Helper function to get the left child index
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Helper function to get the right child index
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Helper function to swap elements
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Insert a value into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    // Bubble up the element at the end to maintain heap property
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex].value < this.heap[index].value ) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // Extract the maximum value (root) from the heap
    extractMax() {
      if (this.heap.length === 0) {
        throw new Error("Heap is empty");
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return max;
    }
  
    // Bubble down the root element to maintain heap property
    heapifyDown() {
      let index = 0;
      const length = this.heap.length;
  
      while (this.getLeftChildIndex(index) < length) {
        let largest = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
  
        if (rightChildIndex < length && this.heap[rightChildIndex].value  > this.heap[largest].value ) {
          largest = rightChildIndex;
        }
  
        if (this.heap[index].value  < this.heap[largest].value ) {
          this.swap(index, largest);
          index = largest;
        } else {
          break;
        }
      }
    }
  
    // Peek at the maximum value without removing it
    peek() {
      if (this.heap.length === 0) {
        throw new Error("Heap is empty");
      }
      return this.heap[0];
    }
  
    // Get the size of the heap
    size() {
      return this.heap.length;
    }
  }
  

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {}
    let heap = new MaxHeap()
    let result = []

    for (const letter of s) {
        if (hash[letter]) {
            hash[letter]+= 1
        } else {
            hash[letter]= 1
        }
    }

    const hashList = Object.keys(hash)

    for (const key of hashList) {
        heap.insert({key, value: hash[key]})
    }

    while (heap.size() > 0) {
        let {key, value} = heap.extractMax()
        while (value > 0) { 
          result.push(key)
          value--
        }
    }

    return result.join('')
};


console.log(frequencySort("tree"))
console.log(frequencySort("tree") === "eetr")