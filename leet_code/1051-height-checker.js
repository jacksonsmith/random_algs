/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let countArray = Array(100).fill(0)
    let expected = []
    let count = 0


    for (let i = 0; i < heights.length; i++) {
        countArray[heights[i]]++
    }

     for (let i = 0; i < countArray.length; i++) {
        while (countArray[i] > 0) {
            expected.push(i);
            countArray[i]--;
        }
    }

    for (let z = 0; z < heights.length; z++) {
        if (expected[z] !== heights[z])
            count++
    }

    return count
};