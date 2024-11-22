/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0
    let left = []
    let right = new Array(height.length);

    let currentMax = 0


    for (let i = 0; i < height.length; i++) {
        currentMax = Math.max(height[i], currentMax)
        left.push(currentMax)
    }

    currentMax = 0

    for (let i = height.length - 1; i >= 0; i--) {
        currentMax = Math.max(height[i], currentMax)
        right[i] = currentMax
    }


    for (let i = 0; i < height.length; i++) {
        let potentialWater = Math.min(left[i], right[i]) - height[i]
        if (potentialWater > 0) {
            sum += potentialWater
        }
    }

    return sum
};