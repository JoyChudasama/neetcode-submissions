class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const maxInKWindows = [];

        for (let i = 0; i < n; i++) {

            let counter = 0;
            let maxSoFar = Number.NEGATIVE_INFINITY;
            for (let j = i; j < n; j++) {
                maxSoFar = Math.max(maxSoFar, nums[j]);
                counter += 1;
                if (counter === k) break;
            }
            maxInKWindows.push(maxSoFar);
            if (i === n - k) break;
        }

        return maxInKWindows;
    }
}
