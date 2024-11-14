function permute(nums: number[]): number[][] {
    console.log("iniciando")
    const res: number[][] = []
    backtrack(nums, res, [], {})

    console.log(res)

    return res
};

function backtrack(nums: number[],res: number[][], perm: number[], used:  { [key: number]: boolean }) {
    //goal
    if (perm.length === nums.length) {
        res.push(perm)
        return
    }

    for (let i=0; i < nums.length; i++) {
        if (!used[i]) {
            perm.push(nums[i])
            used[nums[i]] = true
            backtrack(nums,res, perm, used)
            used[nums[i]] = false
        }
    }
}

permute([1,2,3])