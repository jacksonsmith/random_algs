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