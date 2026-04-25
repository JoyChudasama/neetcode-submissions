class MinStack {
    constructor() {
        this.stack = [],
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if(this.minStack.length){
            this.minStack.push(Math.min(this.getMin(), val));
        }else{
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
