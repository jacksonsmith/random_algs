
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
var insertIntoBST = function(root, val) {
    aux(root,val)
    return root
};


function aux(node, val) {
    if (!node) {
        return new TreeNode(val, null, null)
    }

    if (val >= node.val) {
        node.right = aux(node.right, val)
    }  else {
        node.left = aux(node.left, val)
    }

    return node
}


const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))

insertIntoBST(root, 5)