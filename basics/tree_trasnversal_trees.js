// Define the structure for the Node
class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to perform postorder traversal
function postOrder(node)
{
    // Base case
    if (node == null)
        return;

    // Recur on the left subtree
    postOrder(node.left);

    // Recur on the right subtree
    postOrder(node.right);

    // Visit the current node
    console.log(node.data);
}

function inOrder(node)
{
    // Base case
    if (node == null)
        return;

    // Recur on the left subtree
    inOrder(node.left);

    // Visit the current node
    console.log(node.data);

    // Recur on the right subtree
    inOrder(node.right);
}

function preOrder(node)
{
    // Base case
    if (node == null)
        return;

    // Visit the current node
    console.log(node.data);

    // Recur on the left subtree
    preOrder(node.left);

    // Recur on the right subtree
    preOrder(node.right);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6)
root.right.right = new Node(7)


console.log("------inOrder-------")
inOrder(root);
console.log("-------------")

console.log("------preOrder------")
preOrder(root);
console.log("-------------")

console.log("------postOrder------")
postOrder(root);
console.log("-------------")
