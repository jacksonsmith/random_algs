/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    l = 0
    r = nums.length - 1 // 4
    idx = r
    let result = Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2
    }

    while (l <= r) {
        if (nums[r] == nums[l]) {
            result[idx] = nums[l]
            l++
        } else if (nums[r] > nums[l]) {
            result[idx]=nums[r]
            r--
        } else {
            result[idx]=nums[l]
            l++
        }

        idx--
    }

    return result
};