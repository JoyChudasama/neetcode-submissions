class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // O(n^2) Time | O(1) Space  
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = 1; j < nums.length; j++) {
        //         if(nums[i] + nums[j] === target){
        //             return [i, j]
        //         }
        //     }
        // }

        const diff = new Map();
        for(let i=0; i < nums.length; i++){
            const potentialMatch = target - nums[i];
            if(diff.has(potentialMatch)){
                return [diff.get(potentialMatch), i]
            }

            diff.set(nums[i], i);
        }

     


        return []
    }
}
