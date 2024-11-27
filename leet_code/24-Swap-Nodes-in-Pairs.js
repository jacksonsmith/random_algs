/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const ListNode = function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var swapPairs = function(head) {
    if (!head) return []
    if (head.length === 1) return [node]
    
    return aux(head)
};

function aux(node, count = 1) {
        if (!node) return null

        node.next = aux(node.next, count + 1)

        if (node.next && count % 2 !== 0 ) {
            return swap(node) //
        } else {
            return node
        }
}


// 1  2    3 4
//[1,2 -> 3,4] null
//[1,2, 3]
// 1, 2, 3
//[1,2, 3, 4]
function swap(nodeTree) {
    let nodeFour = nodeTree?.next
    nodeTree.next = nodeFour?.next
    nodeFour.next = nodeTree
    return nodeFour
}


function arrayToLinkedList(arr) {
    let dummy = new ListNode(0); // Dummy node to simplify the process
    let current = dummy;
 
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
 
    return dummy.next;
 }

 console.log(JSON.stringify(swapPairs(arrayToLinkedList([1,2,3]))))
 console.log(JSON.stringify(swapPairs(arrayToLinkedList([1,2,3,4]))))