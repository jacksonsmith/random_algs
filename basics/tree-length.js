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
    diameterOfBinaryTree(root) {
        let l = this.diameter(root.left, -1)
        let r = this.diameter(root.right, 1)
    }

    diameter(node, length) {
        if (!node) return 0
        if (!node.left && !node.right) {
            return Math.abs(length)
        }

        return Math.max(Math.abs(this.diameter(node.left, length - 1)), Math.abs(this.diameter(node.right, length + 1)))

    }
}

const s = new Solution()

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, new TreeNode(5, null)), new TreeNode(4)))

console.log(s.diameterOfBinaryTree(root))