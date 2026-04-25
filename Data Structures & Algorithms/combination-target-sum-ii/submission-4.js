class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
        // FILLING THE TEMPLATE
        // 1. Choice
        // - add a currnet num with nums[i] or skip the num using nums[i+1]

        // 2. Constraint?
        // - currSum >= target or i is out of bound or the ans is already been used

        // 3. Goal
        // - currSum === target

        // 4. Backtrack
        // - pop the latest choice

        nums.sort((a, b) => a - b);
        const res = [];

        const dfs = (i, combination, sum) => {
            if (sum === target) {
                res.push([...combination]);
                return;
            }

            if (i >= nums.length || sum > target) return;

            combination.push(nums[i]);
           
            dfs(i + 1, combination, sum + nums[i]);
 while(nums[i] === nums[i+1]){
                i+=1;
            }
            

            combination.pop();
            dfs(i + 1, combination, sum);
        }

        dfs(0, [], 0);

        return Array.from(res.values())
    }
}
