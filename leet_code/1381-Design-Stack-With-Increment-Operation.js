/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = []
    this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize)
    this.stack.push([x,0])
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        let [element, inc] = this.stack[this.stack.length - 1]
        this.stack.pop()

        if (this.stack.length > 0) {
            this.stack[this.stack.length - 1][1] = this.stack[this.stack.length - 1][1] + inc
        }

        return element + inc
    }

    return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if (this.stack.length > 0) {
        let limit =  Math.min(k, this.stack.length) - 1
        this.stack[limit][1] = this.stack[limit][1] + val
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 */

var obj = new CustomStack(10)
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
obj.increment(3,100)

console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())