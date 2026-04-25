class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        const res = [];

        const backtrack = (i, nums) => {
            if (i === nums.length) {
                res.push([...nums]);
                return;
            }

            for (let j = i; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                backtrack(i + 1, nums);
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        backtrack(0, nums);
        return res;
    }
}
