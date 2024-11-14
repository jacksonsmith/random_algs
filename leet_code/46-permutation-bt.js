function permute(nums) {
    var res = [];
    backtrack(nums, res, [], {});
    console.log(res);
    return res;
}
;
function backtrack(nums, res, perm, used) {
    //goal
    if (perm.length === nums.length) {
        res.push([...perm]);
        return;
    }
    for (var i = 0; i < nums.length; i++) {
        //decision
        if (!used[nums[i]]) {
            perm.push(nums[i]);
            used[nums[i]] = true;
            backtrack(nums, res, perm, used);
            //undo
            perm.pop()
            used[nums[i]] = false;
        }
    }
}
permute([1, 2, 3]);
