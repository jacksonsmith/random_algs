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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0
        return this.depth(root, 0)
    }

    depth(root, count) {
        if (!root) {return count}

        return Math.max(this.depth(root.left, count + 1), this.depth(root.right, count + 1))
    }
}

const s = new Solution()

const root = new TreeNode(1,new TreeNode(2), new TreeNode(3, new TreeNode(4)))


console.log(s.maxDepth(root))