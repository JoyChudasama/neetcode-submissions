class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = new Set();
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    const potentialMatch = nums[i] + nums[k] + nums[j];

                    if(potentialMatch === 0){
                        res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                    }
                }
            }
        }


        return Array.from(res).map(item => JSON.parse(item));
    }
}
