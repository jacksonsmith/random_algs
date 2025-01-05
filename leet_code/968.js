function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

var minCameraCover = function(root) {
    let count = 0

    const countCamera = (root) => {
        if (!root) return true

        if (countCamera(root.left) && countCamera(root.right)) {
            count++
            return false
        } else {
            return true
        }
    }

    countCamera(root)

    return count
};

const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), null)

console.log(minCameraCover(root) - 1)