class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
    const maxInKWindows = new Array(n - k + 1);
    const dq = new Deque();
    let l = 0;
    let r = 0;

    while (r < n) {
        while (!dq.isEmpty() && nums[dq.back()] < nums[r]) {
            dq.popBack();
        }
        dq.pushBack(r);

        if (l > dq.front()) dq.popFront();

        if ((r + 1) >= k) {
            maxInKWindows[l] = nums[dq.front()];
            l += 1;
        }

        r += 1;
    }

    return maxInKWindows;
    }
}
