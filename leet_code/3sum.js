function threeSumWorst(nums) { //n^3
    const result = new Set()
    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) { //o(n)
        for (let j = i + 1; j < nums.length; j++) { //o(n)
            for (let z = j + 1; z < nums.length; z++) { //o(n)
                if (nums[i] + nums[j] + nums[z] === 0) {
                    const sorted = [nums[i], nums[j], nums[z]]
                    sorted.sort((a, b) => a - b) //o(3log3)
                    result.add(JSON.stringify(sorted))
                }
            }
        }
    }

    return [...result].map((item) => JSON.parse(item)) //o(n)
}

function threeSumMedium(nums) { //n^3
    const result = new Set()
    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) { //o(n)
        for (let j = i + 1; j < nums.length; j++) { //o(n)
            const z = -(nums[i] + nums[j])
            if (hash[z] && hash[z] !== i && hash[z] !== j) {
                const sorted = [nums[i], nums[j], z]
                sorted.sort((a,b) => a - b) //o(3log3)
                result.add(JSON.stringify(sorted))
            }
        }   
    }

    return [... result].map((item) => JSON.parse(item)) //o(n)
}

function threeSumBest(nums) { //o(n)
    const result = []
    nums.sort((a, b) => a - b)

    for (let z = 0; z < nums.length; z++) {
        let l = z + 1
        let r = nums.length - 1

        if (z > 0 && nums[z] === nums[z - 1]) {
            continue;
        }

        while (l < r) {
            const current = nums[l] + nums[r] + nums[z]
            if (current === 0) {
                result.push([nums[l], nums[r], nums[z]])
                l++
            } else if (current >= 0) {
                r--
            } else {
                l++
            }
        }
    }

    return [... result]
}


nums = [-1, 0, 1, 2, -1, -4]

console.log("first: ", threeSumWorst(nums))
console.log("second: ", threeSumMedium(nums))
console.log("third: ", threeSumBest(nums))