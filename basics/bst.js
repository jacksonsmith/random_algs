class TreeNode {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST {
    constructor(root) {
        this.root = root
    }
    insert(val) {
        if (!this.root) {
            this.root = new TreeNode(val)
            return this.root
        }

        let current = this.root

        while(current.left && current.right) { // is not a leaf
            if (val >= current.data) {
                current = current.right
            } else {
                current = current.left
            }
        }

        if (val >= current.data) {
            current.right = new TreeNode(val)
        } else {
            current.left = new TreeNode(val)
        }
    }

    search(val) {
        if (!this.root) return -1

        let current = this.root

        while(current) {
            if (val === current.data) return current

            if (val >= current.data) {
                current = current.right
            } else {
                current = current.left
            }
        }

        return -1
    }

    sucessor(val) {
        if (!this.root) return null

        let current = this.root
        let sucessor = null

        while (current) {
            if (val <= current.data) {
                sucessor = current
                current = current.left
            } else {
                current = current.right
            }
        }

        return sucessor
    }

    delete(val) {
        
    }
}


const bst = new BST()

bst.insert(2)
bst.insert(1)
bst.insert(4)
bst.insert(5)


console.log("Encontrado: ", bst.search(2))

console.log("sucessor de 2 é: ", bst.sucessor(4))

console.log(bst.root)