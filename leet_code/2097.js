/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
    const graph = new Map();
    const degreeIn = new Map();
    const degreeOut = new Map();

    // Construir o grafo e calcular graus de entrada/saída
    for (const [first, second] of pairs) {
        if (!graph.has(first)) graph.set(first, []);
        if (!graph.has(second)) graph.set(second, []);
        if (!degreeIn.has(second)) degreeIn.set(second, 0);
        if (!degreeOut.has(first)) degreeOut.set(first, 0);

        graph.get(first).push(second); // Adiciona uma aresta de `first` para `second`

        degreeOut.set(first, degreeOut.get(first) + 1);
        degreeIn.set(second, degreeIn.get(second) + 1);
    }

    // Encontrar o nó inicial (onde grau de saída > grau de entrada)
    let start = null;
    for (const node of graph.keys()) {
        if (degreeOut.get(node) > (degreeIn.get(node) || 0)) {
            start = node;
            break;
        }
    }

    // Se nenhum nó específico for encontrado, inicie pelo primeiro par
    if (start === null) start = pairs[0][0];

    // Algoritmo de Hierholzer
    const stack = [start];
    const result = [];

    while (stack.length > 0) {
        const u = stack[stack.length - 1];
        if (graph.get(u) && graph.get(u).length > 0) {
            stack.push(graph.get(u).pop()); // Explora a próxima aresta
        } else {
            result.push(stack.pop()); // Retira o nó e adiciona ao caminho
        }
    }

    result.reverse(); // Reverter o caminho, já que ele foi montado de trás para frente

    // Transformar o caminho em pares
    const validArrangement = [];
    for (let i = 0; i < result.length - 1; i++) {
        validArrangement.push([result[i], result[i + 1]]);
    }

    return validArrangement;
};

// Teste
console.log(
    "valid: ",
    validArrangement([
        [5, 1],
        [4, 5],
        [11, 9],
        [9, 4],
    ])
);
