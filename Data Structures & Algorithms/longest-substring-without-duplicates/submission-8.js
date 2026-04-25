class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(string) {
        let longestSubStringCount = 0;
    let l = 0;
    const charSet = new Set();

    for (let r = 0; r < string.length; r++) {
        while (charSet.has(string[r])) {
            charSet.delete(string[l]);
            l += 1;
        }

        charSet.add(string[r]);
        longestSubStringCount = Math.max(longestSubStringCount, r - l + 1);
    }


    return longestSubStringCount;
    }
}
