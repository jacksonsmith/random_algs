function binario_trash(i) {
    const range = Array.from({ length: i }, (_, i) => i + 1)
    for (const i of range) {
        for (const j of range) {
            for (const z of range) {
                for (const w of range) {
                    console.log(i, j, w, z)
                }
            }
        }
    }
}


function binario_good(n, partial = [], set = new Set()) {
    if (partial.length === n) {
        console.log(partial)
        return
    }

    for (let i = 1; i < n + 1; i++) {
        if (!set.has(i)) {
            partial.push(i)
            set.add(i)
            binario_good(n, partial, set)
            set.delete(i)
            partial.pop()
        }
    }
}

// console.log(binario_trash(4))
console.log("----------")
console.log(binario_good(3))