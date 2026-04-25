class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        const res = [];
        const stack = [];

        function backtrack(openN, closeN){

            if(openN === closeN && openN === n) {
                res.push(stack.join(''));
                return;
            };

            if(openN < n){
                stack.push('(');
                backtrack(openN + 1, closeN);
                stack.pop();
            }

            if(openN > closeN){
                stack.push(')');
                backtrack(openN, closeN + 1);
                stack.pop();
            }
        }

        backtrack(0,0);
        return res;
    }
}
