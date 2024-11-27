const ListNode = function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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
var removeNodes = function(head) { // [5,2,13,3,8]
    return aux(head)
};


function aux(head) { //8, 13
    if (!head) return null

        head.next = aux(head.next);

        if (head.next && head.val < head.next.val) { // [5,2,13,3,8] 13 < 2
            return head.next
        }

        return head
}


console.log(removeNodes(arrayToLinkedList([5,2,13,3,8])))