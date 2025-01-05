
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var isBalanced = function(root) {
    const [, balancedLeft] = checkBalanced(root.left, 2)
    const [, balancedRight] = checkBalanced(root.right, 2)

    return balancedLeft && balancedRight
};


function checkBalanced(node) {
    if (!node) {
        return [0, true]
    }

    const [lHeight, Lbalanced] = checkBalanced(node.left)
    const [rHeight, Rbalanced] = checkBalanced(node.right)

    if(!Lbalanced  || !Rbalanced) return false

    const balanced = Math.abs(lHeight - rHeight) <= 1

    return [Math.max(lHeight, rHeight), balanced ]
}


// const root = new TreeNode(1,  new TreeNode(2,  new TreeNode(3,  new TreeNode(4),  new TreeNode(4)),  new TreeNode(3)),  new TreeNode(2))
const root = new TreeNode(3,  new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)) )

console.log(isBalanced(root))