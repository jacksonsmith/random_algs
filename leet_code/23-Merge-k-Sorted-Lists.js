class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Retorna o índice do pai
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Retorna os índices dos filhos
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Insere um novo valor na heap
  insert(value) {
    this.heap.push(value); // Adiciona no final
    this.heapifyUp(); // Corrige a posição
  }

  // Remove o menor elemento (raiz)
  removeMin() {
    if (this.heap.length === 0) {
      return null; // Heap vazia
    }
    if (this.heap.length === 1) {
      return this.heap.pop(); // Apenas um elemento
    }

    const min = this.heap[0]; // Salva o menor elemento
    this.heap[0] = this.heap.pop(); // Move o último para a raiz
    this.heapifyDown(); // Corrige a posição

    return min;
  }

  // Move o último elemento para a posição correta
  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      // Troca com o pai
      [this.heap[index], this.heap[this.getParentIndex(index)]] = [
        this.heap[this.getParentIndex(index)],
        this.heap[index],
      ];

      index = this.getParentIndex(index); // Sobe no nível
    }
  }

  // Move a raiz para a posição correta
  heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      // Verifica se o filho direito é menor
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] <
          this.heap[this.getLeftChildIndex(index)]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      // Se a raiz já for menor que o menor filho, pare
      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }

      // Troca com o menor filho
      [this.heap[index], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[index],
      ];

      index = smallerChildIndex; // Desce no nível
    }
  }

  // Retorna o menor elemento sem removê-lo
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  // Exibe a heap
  printHeap() {
    console.log(this.heap);
  }
}

 const ListNode = function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/


//[[1,4,5],[1,3,4],[2,6]]

// 3 -> Heap


var mergeKLists = function(lists) {
  lists = lists.filter(list => list !== null);
  
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0]

  const minHeap = new MinHeap()

  for ( let i = 0; i < lists.length; i++) {
      minHeap.insert(lists[i].val)
  }

  let minor = minHeap.removeMin()

  let resultLinked = new ListNode(minor)
  let result = resultLinked

  while (minHeap.heap.length) {
      for ( let i = 0; i < lists.length; i++) {
          if (lists[i].next) {
              lists[i] = lists[i].next
              minHeap.insert(lists[i].val)
          }
      }

      resultLinked.next = new ListNode(minHeap.removeMin())
      resultLinked = resultLinked.next
  }

  return result
};

const lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ];

// console.log(mergeKLists(lists))
console.log("Lista mesclada:");
let merged = mergeKLists(lists);

console.log(JSON.stringify(merged))