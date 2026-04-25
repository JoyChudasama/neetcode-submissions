class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
                  const res = [];
    nums.sort((a, b) => a - b);

    const dfs = (i, combination, sum) => {
        if (sum === target) {
            res.push([...combination]);
            return;
        }

        if (i >= nums.length || sum > target) return;

        combination.push(nums[i]);
        dfs(i + 1, combination, sum + nums[i]);

        combination.pop();
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }

        dfs(i + 1, combination, sum);
    }

    dfs(0, [], 0);
    return res;
    }
}
