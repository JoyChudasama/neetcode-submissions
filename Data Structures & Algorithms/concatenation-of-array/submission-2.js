class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        let pass = 0;
        let i = 0;
        while (i < nums.length && pass < 2) {
            ans.push(nums[i]);
            i += 1;

            if (nums.length === i) {
                i = 0;
                pass += 1;
            }
        }

        return ans;
    }
}
