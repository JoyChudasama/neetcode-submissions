class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length < 2) return nums.length;

        nums.sort((a, b) => a - b);

        let longestSoFar = 1;
        let currentLongest = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;
            if (1 === nums[i] - nums[i - 1]) {
                currentLongest += 1;
            } else {
                longestSoFar = Math.max(longestSoFar, currentLongest);
                currentLongest = 1;
            }
        }


        return Math.max(longestSoFar, currentLongest);
    }
}
