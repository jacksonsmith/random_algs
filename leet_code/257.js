
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return []; // Retorna array vazio se a raiz for nula.
    if (!root.left && !root.right) return [String(root.val)]; // Nó folha: retorna o valor como string.

    const result = [];

    if (root.left) {
        for (const path of binaryTreePaths(root.left)) {
            result.push(`${root.val}->${path}`); // Concatena o caminho do filho esquerdo.
        }
    }

    if (root.right) {
        for (const path of binaryTreePaths(root.right)) {
            result.push(`${root.val}->${path}`); // Concatena o caminho do filho direito.
        }
    }

    return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);

console.log(binaryTreePaths(root));