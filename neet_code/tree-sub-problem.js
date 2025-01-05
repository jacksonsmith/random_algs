/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root || !subRoot) return false

        if (this.isSameTree(root, subRoot)) return true

        const l = this.isSubtree(root.left, subRoot)
        const r = this.isSubtree(root.right, subRoot)

        console.log(`root: ${root.val} l is ${l} and r is ${r}`)

        return l || r
    }

    isSameTree(p, q) {
        if (!p && !q) return true
        if (!p || !q) return false
        if (p.val !== q.val) return false

        console.log(`p: `, p.val)
        console.log(`q: `, p.val)

        const l = this.isSameTree(p.left, q.left)
        const r = this.isSameTree(p.right, q.right)

        return l && r
    }    
}


// Exemplo 1: root = [1,2,3,4,5], subRoot = [2,4,5]
const root1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)), 
    new TreeNode(3)
);
const subRoot1 = new TreeNode(2, new TreeNode(4), new TreeNode(5));

// Exemplo 2: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]
const root2 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4, new TreeNode(6)), new TreeNode(5)), 
    new TreeNode(3)
);
const subRoot2 = new TreeNode(2, new TreeNode(4), new TreeNode(5));

// Testando as entradas
const solution = new Solution();

console.log("Example 1 Output:", solution.isSubtree(root1, subRoot1));
console.log("Example 2 Output:", solution.isSubtree(root2, subRoot2));