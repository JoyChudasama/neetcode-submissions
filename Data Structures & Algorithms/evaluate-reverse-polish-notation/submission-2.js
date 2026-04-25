class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operatorDict = {
            '+': (a, b) => { return b + a },
            '-': (a, b) => { return b - a },
            '*': (a, b) => { return b * a },
            '/': (a, b) => { return Math.trunc(b / a) },
        };
        const stack = [];
        let i = 0;

        while (i < tokens.length) {
            const currentElement = tokens[i];

            if (currentElement in operatorDict) {
                const calculatedValue = operatorDict[currentElement](stack.pop(), stack.pop());
                stack.push(calculatedValue);
            } else {
                stack.push(parseInt(currentElement));
            }

            i += 1;
        }

        return stack.pop();
    }
}
