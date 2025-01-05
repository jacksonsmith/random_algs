function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
let max = -Infinity

var maxPathSum = function(root) {
    if (!root) return 0

    const left = maxPathSum(root.left)
    const right = maxPathSum(root.right)

    return Math.max(left + Number(root.val) + right, left, right)
};


// const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const root = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

console.log(maxPathSum(root))