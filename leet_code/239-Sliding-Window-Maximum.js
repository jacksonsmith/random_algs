var CustomQueue = function () {
    this.front = null;
    this.back = null;
    this.length = 0;
};

var Node = function (x) {
    this.value = x;
    this.next = null;
    this.back = null;
};

CustomQueue.prototype.pushFront = function (x) {
    const newNode = new Node(x);
    if (this.length === 0) {
        this.back = newNode;
        this.front = newNode;
    } else {
        let oldFront = this.front;
        oldFront.back = newNode;
        newNode.next = oldFront;
        this.front = newNode;
    }

    this.length++;
};

CustomQueue.prototype.pushBack = function (x) {
    const newNode = new Node(x);
    if (this.length === 0) {
        this.back = newNode;
        this.front = newNode;
    } else {
        let first = this.back;

        first.next = newNode;
        newNode.back = first;
        this.back = newNode;
    }

    this.length++;
};

CustomQueue.prototype.popFront = function () {
    if (this.length === 0) {
        return -1;
    }

    let oldFront = this.front;

    if (this.front === this.back) {
        this.front = null;
        this.back = null;
    } else {
        let second = oldFront.next;
        second.back = null;
        this.front = second;
    }

    this.length--;

    return oldFront.value;
};

CustomQueue.prototype.popBack = function () {
    if (this.length === 0) {
        return -1;
    }

    let oldBack = this.back;

    if (this.front === this.back) {
        this.front = null;
        this.back = null;
    } else {
        let penultimo = oldBack.back;

        this.back = penultimo;
        penultimo.next = null;
    }

    this.length--;

    return oldBack.value;
};

var maxSlidingWindow = function (nums, k) {
    let queue = new CustomQueue(); //[Front] -> Node(1) <--> Node(2) <- [Back]
    
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (queue.front !== null && queue.front.value < i - k + 1) {
            queue.popFront();
        }

        while (queue.length > 0 && queue.back !== null && nums[i] > nums[queue.back.value]) {
            queue.popBack();
        }

        queue.pushBack(i);

        if (i >= k - 1) {
            result.push(nums[queue.front.value]);
        }
    }

    return result;
};

var maxSlidingWindowHeap = function (nums, k) {
    const { maxHeap } = require('../aux/maxheap'); // Supondo que você tenha o MaxHeap
    const result = [];

    // Insere os primeiros k elementos no heap
    for (let i = 0; i < k; i++) {
        maxHeap.insert({ value: nums[i], index: i }); // Insere valor e índice
    }

    result.push(maxHeap.getMax().value); // Adiciona o maior valor inicial ao resultado

    // Processa o restante dos elementos
    for (let i = k; i < nums.length; i++) {
        // Remove elementos fora da janela
        while (maxHeap.getMax().index <= i - k) {
            maxHeap.extractMax();
        }

        // Insere o novo elemento no heap
        maxHeap.insert({ value: nums[i], index: i });

        // Adiciona o maior valor da janela atual ao resultado
        result.push(maxHeap.getMax().value);
    }

    maxHeap.heap = []

    return result;
};

// Define arraysEqual antes de usá-la
const arraysEqual = (a, b) => a.length === b.length && a.every((val, index) => val === b[index]);

console.log(arraysEqual(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7])); // Deve retornar true

console.log(arraysEqual(maxSlidingWindowHeap([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7])); // Deve retornar true
