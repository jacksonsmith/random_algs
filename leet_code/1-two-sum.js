function twoSum(nums, target) {
    let complementMap = {}

    for (let i = 0; i < nums.length; i++) {
        complementMap[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = -nums[i] + target
        if (complementMap[complement] && complementMap[complement] !== i) {
            return[complementMap[complement], i].sort()
        }
    }

    return []
};

console.log(twoSum([1,3,4,2], 6))