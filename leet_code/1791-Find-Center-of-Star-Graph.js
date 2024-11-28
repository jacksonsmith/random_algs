/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) { // [[1,2],[2,3],[4,2]]
    const e = edges.length // 3
    const degreeIn = {} // {2: 1}

    for (let i = 0; i < e; i ++) { // 0 -> 2
        let dIn = edges[i][1] // 2, 3, 2
        let dOut = edges[i][0] // 1, 2, 4

        degreeIn[dOut] = degreeIn[dOut] ? degreeIn[dOut] + 1 : 1 //
        degreeIn[dIn] = degreeIn[dIn] ? degreeIn[dIn] + 1 : 1

         // {2: 1, 1: 1} || {2: 2, 1: 1, 3: 1} || {2: 3, 1: 1, 3: 1, 4: 1}
    }

    // {2: 3, 1: 1, 3: 1, 4: 1}
    for (let i = 1; i <= e + 1; i++) { // 1 -> 4
        if (degreeIn[i] === e) { // 1 == 3 False || 2 === 3 true
            return i
        }
    }

    return 0
};