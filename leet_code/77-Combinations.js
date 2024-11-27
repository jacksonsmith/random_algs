/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

function backtrack(n, k, result, partial = []) {
    if (partial.length >= k) {
        result.push([...partial])
        return
    }

    let x = partial.length === 0 ? 1 : partial[partial.length - 1] + 1;

    for (let i = x; i <= n; i++) {
        partial.push(i)
        backtrack(n, k, result, partial)
        partial.pop()
    }
}

var combine = function (n, k) {
    if (n === 1 && k === 1) return [[1]]

    let result = []
    backtrack(n, k, result, [])
    return result
};


console.log(combine(4, 2))