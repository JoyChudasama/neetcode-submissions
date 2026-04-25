class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const curr = [];

        const backtrack = (i, curr, currSum) => {
            if (currSum === target) {
                res.push([...curr]);
                return;
            }

            if (currSum > target || i >= nums.length) return;

            curr.push(nums[i]);
            backtrack(i, curr, currSum + nums[i]);

            curr.pop();
            backtrack(i + 1, curr,currSum);
        }
        backtrack(0, [], 0);
        return res;
    }
}
