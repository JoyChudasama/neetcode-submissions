class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = new Array(nums.length).fill(1);

        let temp = 1;
        for(let i=0; i < nums.length; i++){
            products[i] = temp;
            temp *= nums[i];
        }
        
        let temp1 = 1;
        for(let i=nums.length-1; i >= 0; i--){
            products[i] *=  temp1
            temp1 *= nums[i];
        }

        return products;
    }
}
