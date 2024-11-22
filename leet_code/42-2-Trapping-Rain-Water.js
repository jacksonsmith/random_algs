/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0
    let i = 0

    for(let i = 0; i < height.length; i++) {
        let l = i + 1
        let r = height.length - 1

        while (r < height.length &&height[l] < height[r]) r++

        let potentialWater = Math.min(height[r], height[l]) - height[i]

        if (potentialWater > 0) {
            sum += potentialWater
        }

        i = r + i
    }

    return sum
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))