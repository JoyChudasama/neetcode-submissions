class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        this.helper(nums, res, 0);
        return res;
    }

    helper(nums, res, i) {

        if (i >= nums.length) {
            res.push([...nums]);
            return;
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            this.helper(nums, res, i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
}
