class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        this.calcCombination(0, nums, result);
        return result;
    }

    calcCombination(start, nums, result) {
        if (start === nums.length) {
            console.log(nums)
            result.push([...nums])
            return
        }

        for (let i = start; i < nums.length; i++) {  //start = 0
            [nums[start], nums[i]] = [nums[i], nums[start]]
            this.calcCombination(start + 1, nums, result);
            [nums[start], nums[i]] = [nums[i], nums[start]]
        }
    }
}


const solution = new Solution()

solution.permute([1,2,3])