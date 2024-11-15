function sort(nums) {
     let sorted = qs(nums)

     console.log(sorted)
}


function qs(nums) {
    if (nums.length <= 1) return nums
    // if (nums.length === 0) return []

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

// function partition(nums, start, end) {
//     let pivot = start
//     for (let i = start; i < end; i++ ) {
//         if (nums[i] < pivot) {
//             swap(i, pivot)
//             pivot++
//         }
//     }

//     return pivot
// }

sort([4,7,2,6,4,1,8,3])