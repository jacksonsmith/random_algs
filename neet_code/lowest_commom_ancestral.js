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

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const ancsestorsP = this.find(root, p.val)
        const ancsestorsQ = this.find(root, q.val)

        ancsestorsP.sort((a,b) => a.val - b.val)
        ancsestorsQ.sort((a,b) => a.val - b.val)

        for (let i = 0; i < ancsestorsP.length; i++) {
            for (let j = 0; j < ancsestorsQ.length; j++)  {
                if (ancsestorsP[i].val === ancsestorsQ[j].val) {
                    return ancsestorsQ[j]
                }
            }
        }

        return -1
    }

    find(root, val, list = []) {
        list.push(root)

        if (root.val === val){
            return list
        } else if (root.val > val) {
            return this.find(root.left, val, list)
        } else {
            return this.find(root.right, val, list)
        }
    }
}
