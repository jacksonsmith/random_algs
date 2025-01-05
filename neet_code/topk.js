class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) { //[1,2,2,3,3,3]
        if (nums.length === 1 && k === 1) return [nums[0]]
        if (nums.length === 2 && k === 2) return [nums[0], nums[1]]

        const dict = {}

        for (const num of nums) {
            if(!dict[num]) {
                dict[num] = 0
            }
            dict[num] +=1 // {2: ,3}
        }

        const elements = Object.entries(dict) 
        elements.sort((a,b) => b[1] - a[1])

        return elements.slice(0,k).map((a) => a[0])
    }
}

const s = new Solution()
const nums = [1,2,2,3,3,3]
const k = 2

console.log(s.topKFrequent(nums, k))