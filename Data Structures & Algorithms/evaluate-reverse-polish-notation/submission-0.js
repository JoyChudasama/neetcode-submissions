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
            '/': (a, b) => { return b / a },
        };
        const stack = [];
        let i = 0;

        while (i < tokens.length) {
            const currentElement = tokens[i];

            if (currentElement in operatorDict) {
            // if (operatorDict[currentElement]) {
                // if(!(stack.length >= 2)) continue;
                // const calculatedValue = operatorDict[currentElement](stack.pop(), stack.pop());
                const calculatedValue = this.getCalculatedValue(stack.pop(), stack.pop(), currentElement);
                console.log(calculatedValue)
                stack.push(calculatedValue);
            } else {
                stack.push(parseInt(currentElement));
            }

            i += 1;
        }

        return stack.pop();
    }

    getCalculatedValue(a, b, operator) {
        if (operator === '+') return a + b;
        if (operator === '-') return b - a;
        if (operator === '*') return a * b;
        if (operator === '/') return Math.trunc(b / a);
    }
}
