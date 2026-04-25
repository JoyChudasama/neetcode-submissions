class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        

        const stack = []
        const dict = {
            "}": '{',
            ']': '[',
            ')': '(',
        }

        for (let i = 0; i < s.length; i++) {
            const current = s[i];

            if (dict[current]) {
                const poppedBracket = stack.pop();
                if (dict[current] !== poppedBracket) return false;
            } else {
                stack.push(current)
            }

        }

        return stack.length === 0;
    }
}
