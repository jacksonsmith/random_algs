/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let max = 0
    let sumCurrentWindow = 0
    let set = new Set()
    let start = 0

    for (let end = 0; end < nums.length; end++) { // [1,5,4,2,9,9,9]
        // Se o número já está no conjunto, deslize a janela
        while(set.has(nums[end])) { //999231
            sumCurrentWindow -= nums[start]
            set.delete(nums[start])
            start++
        }

        // adiciono na janela
        sumCurrentWindow += nums[end] // 9
        set.add(nums[end]) //9


        // se a janela tem k items calculo e deslizo a janela
        const windowSize = end - start + 1

        if (windowSize === k) {
            max = Math.max(sumCurrentWindow, max)
            sumCurrentWindow -= nums[start]
            set.delete(nums[start])
            start++
        }

    }

    return max
};

const nums = [1,5,4,2,9,9,9]
// const nums = [9,9,9,1,2,3]
const k = 3

console.log(maximumSubarraySum(nums, k))
