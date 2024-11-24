/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let ListNode = function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

function sumAndComplement(a,b,c = 0) {
let sum = (a + b + c) % 10
let comp = Math.floor((a + b + c) / 10)

// if (sum > 9) {
//     comp = 1
//     sum -= 10
// } else {
//     comp = 0
// }

return {sum,comp}
}

var addTwoNumbers = function(l1, l2) {
let currentSum = sumAndComplement(l1.val, l2.val)
l1 = l1.next
l2 = l2.next
let l3 = new ListNode(currentSum.sum)
let result = l3

while (l2 || l2 || currentSum.comp > 0) {
    let first = l1 ? l1.val : 0
    let second = l2 ? l2.val : 0

    currentSum = sumAndComplement(first, second, currentSum.comp)

    let newNode = new ListNode(currentSum.sum)
    l3.next = newNode

    l1 = l1?.next
    l2 = l2?.next
    l3 = l3?.next
}

return result
};

t = new ListNode(2, new ListNode(4, new ListNode(3)))
v = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(t, v))