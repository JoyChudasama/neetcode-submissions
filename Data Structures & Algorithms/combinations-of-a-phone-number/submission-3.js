class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        if (digits.length === 0) return res;
        function getDigitToLettersMap() {
            return {
                '2': ['a', 'b', 'c'],
                '3': ['d', 'e', 'f'],
                '4': ['g', 'h', 'i'],
                '5': ['j', 'k', 'l'],
                '6': ['m', 'n', 'o'],
                '7': ['p', 'q', 'r', 's'],
                '8': ['t', 'u', 'v'],
                '9': ['w', 'x', 'y', 'z'],
            }
        }
        const dict = getDigitToLettersMap();
        if (digits.length === 1) return dict[digits[0]];

        const backtrack = (i, curStr) => {
            if (curStr.length === digits.length) {
                res.push(curStr);
                return;
            }
            for (const c of dict[digits[i]]) {
                backtrack(i + 1, curStr + c);
            }
        }
        backtrack(0, "");
        return res;
    }
}
