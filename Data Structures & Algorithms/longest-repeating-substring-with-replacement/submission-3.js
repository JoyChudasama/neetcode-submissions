class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let res = 0;
        let l = 0;
        let mostFreqCharCount = 0;

        for (let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            mostFreqCharCount = Math.max(count[s[r]], mostFreqCharCount);

            while ((r - l) + 1 - mostFreqCharCount > k) {
                count[s[l]] -= 1;
                l += 1;
            }

            res = Math.max((r - l) + 1, res);
        }

        return res
    }
}
