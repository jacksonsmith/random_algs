/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]])

                // Move os ponteiros e ignora duplicados
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;

                l++
                r--

                continue
            } else if (sum > 0) {
                r--
            }
            else if (sum < 0) {
                l++
            }

        }
    }

    return result
};