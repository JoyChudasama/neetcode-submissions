class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = new Map();
        const curr = [];
        nums.sort((a, b) => a - b)
        const backtrack = (i) => {
            if (i === nums.length) {
                const key = JSON.stringify(curr);
                res.set(key, [...curr]);
                return;
            }

            curr.push(nums[i]);
            backtrack(i + 1);

            curr.pop();
            backtrack(i + 1);
        }

        backtrack(0);
        return Array.from(res.values());
    }
}
