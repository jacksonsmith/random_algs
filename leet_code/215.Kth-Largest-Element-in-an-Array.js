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
        if (this.heap[parentIndex] < this.heap[index]) {
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
  
        if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
          largest = rightChildIndex;
        }
  
        if (this.heap[index] < this.heap[largest]) {
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxHeap = new MaxHeap()

    for (const num of nums) {
        maxHeap.insert(num)
    }

    for (let i = 1; i < k; i++) {
        maxHeap.extractMax()
    }

    return maxHeap.extractMax()
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))

console.log(findKthLargest([3,2,1,5,6,4], 2))