class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(array) {
        let slow = 0;
        let fast = 0;

        while (true) {
            slow = array[slow];
            fast = array[array[fast]];
            if (slow === fast) break;
        }

        let slow2 = 0;
        while (true) {
            slow = array[slow];
            slow2 = array[slow2];

            if (slow === slow2) return slow;
        }

        return -1;
    }
}
