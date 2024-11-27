let x = 0
function hanoi(N, source, aux, target) {
    if (N >= 1) {
        hanoi(N - 1, source, target, aux)
        console.log(`Move, ${N}, from, ${source}, to, ${target}`)
        x++
        hanoi(N - 1, aux, source, aux)
    }
}

hanoi(5, 'A', 'B', 'C')
console.log(x)