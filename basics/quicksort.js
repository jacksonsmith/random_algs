function sort(nums) {
     let sorted = qs_otimized(nums)

     console.log(sorted)
}


function qs(nums) {
    if (nums.length <= 1) return nums

    let left = []
    let right = []
    let p = nums.length - 1

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[p]) {
            right.push(nums[i])
        } else {
            left.push(nums[i])
        }
    }
    
    return [...qs(left),nums[p],...qs(right)]
}


function qs_otimized(nums, end = nums.length - 1, start = 0) {
    if (start > end) return nums

    let p = partition(nums, end, start)
    
    qs_otimized(nums, p - 1, start), 
    qs_otimized(nums, end, p + 1)

    return nums
}
//[5,9,3,2,8]
// i   j  
// [2,7,4,6,4,1,8,3]
// [2,1,4,6,4,7,8,3]
// [2,1,3,6,4,7,8,4]
function partition(nums, end, start) {
    let p = nums[end]
    let i = start - 1
    for (let j = start; j < end -1; j++ ) {
        if (nums[j] < p) {
            i++
            [[nums[i], nums[j]] = [nums[j], nums[i]]]
        }
    }

    [[nums[i +1], nums[end]] = [nums[end], nums[i + 1]]]

    return i + 1
}


sort([4,7,2])
// sort([4,7,2,6,4,1,8,3])