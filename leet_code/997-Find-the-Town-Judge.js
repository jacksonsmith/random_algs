/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) { // 3 [[1,3],[2,3]]
    const degreeIn = {} // 1:0, 2:0, 3:0
    const degreeOut = {} //1:0, 2:0, 3:0

    for (let i = 1; i <= n; i ++) { // 1 3
        degreeIn[i] = 0
        degreeOut[i] = 0
    }

    for (let i = 0; i < trust.length; i++) { // 0 -> 1
        let DOut = trust[i][0] // 1 | 2
        let dIn = trust[i][1] // 3. | 3

        degreeOut[DOut] += 1 // $1 1:1 | $2  1:1 2:1
        degreeIn[dIn] += 1 // $1 3:1 | $2 3:2
    }

//    const degreeIn = {} // 1:0, 2:0, 3:2
// const degreeOut = {} //1:1, 2:1, 3:0

    for (let i = 1; i <=n ; i++) { // 1 -> 3
        if (degreeIn[i] === n -1 && degreeOut[i] == 0) { // 0 === 2 && 1 === 0 || 0 === 2 && 1 === 0 || 2 === 2 && 0 === 0
            return i
        }
    }

    return -1
};