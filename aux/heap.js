class JackHeap {
    heap = [8, 9, 5, 8, 1, 3, 7, 4]

    insert(x) {
        if (this.heap.length = 0) {
            this.heap.push(x)
        }
    }

    remove() {

    }

    descer() {

    }

    getleftChildren(idx) {
        let leftIndex = 2 * idx + 1
        return leftIndex > this.heap.length - 1 ? null : this.heap[leftIndex]

    }

    getRightChildren(idx) {
        let rightIndex = idx * 2 + 2
        return rightIndex > this.heap.length - 1 ? null : this.heap[rightIndex]
    }

    getChildrens(idx) {
        let left = this.getleftChildren(idx)
        let right = this.getRightChildren(idx)
        return [left, right]
    }

    swap(a, b) {
        [[this.heap[a], this.heap[b]]] = [[this.heap[b], this.heap[a]]]
    }

    heapify(currentIdx = 0) {
        const children = this.getChildrens(currentIdx)

        if (!children[0] && !children[1]) {
            return
        }

        let maiorChildren

        if (children[0] && children[1]) {
            if (children[0] > children[1]) {
                maiorChildren = children[0]
            } else {
                maiorChildren = children[1]
            }
        } else {
            if (children[0] && !children[1]) {
                maiorChildren = children[0]
            } else {
                maiorChildren = children[1]
            }
        }

        if (maiorChildren > this.heap[currentIdx] ) {

            this.swap(currentIdx, maiorChildren)

            this.heapify(maiorChildren)
        }
    }

}

const minheap = new JackHeap()

console.log("antes: ", minheap.heap)

minheap.heapify()

console.log("fechar: ", minheap.heap)