class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // return [...nums, ...nums]
        const ans = [];
        for(let i=0; i < nums.length; i++){
            ans.push(nums[i])
        }
        for(let i=0; i < nums.length; i++){
            ans.push(nums[i])
        }
        return ans
    }
}
