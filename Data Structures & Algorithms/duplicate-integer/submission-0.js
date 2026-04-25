class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenNums = {};
        for(const num of nums){
            if(num in seenNums) return true;
            seenNums[num] = true
        }

        return false;
    }
}
