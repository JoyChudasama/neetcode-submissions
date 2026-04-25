class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1, b = nums2;

        // we want to run binary search on shorter array 
        if (a.length > b.length) {
            [a, b] = [b, a];
        }

        const full = a.length + b.length;
        const half = Math.floor((full + 1) / 2);
        let left = 0;
        let right = a.length;

        while (left <= right) {

            const i = Math.floor((left + right) / 2);
            const j = half - i;

            const Aleft = i > 0 ? a[i - 1] : Number.NEGATIVE_INFINITY;
            const Aright = i < a.length ? a[i] : Number.POSITIVE_INFINITY;
            const Bleft = j > 0 ? b[j - 1] : Number.NEGATIVE_INFINITY;
            const Bright = j < b.length ? b[j] : Number.POSITIVE_INFINITY;

            if (Aleft <= Bright && Bleft <= Aright) {
                if (full % 2 !== 0) {
                    return Math.max(Aleft, Bleft);
                }

                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            } else if (Aleft > Bright) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }

        return -1;
    }
}
