class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  // Criar os nós
  const head = new Node(1);
  let current = head;
  
  // Conectar os nós
  for (let i = 2; i <= 8; i++) {
    current.next = new Node(i);
    current = current.next;
  }
  
  // Imprimir a linked list
  current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }

  const invert = (a) => {
    
  }