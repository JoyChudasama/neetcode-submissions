class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        numbers.sort((a, b) => a - b);
    
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            const potentialMatch = numbers[left] +  numbers[right];
            if(potentialMatch === target && numbers[left] !== numbers[right]){
                return [left+=1, right+=1];
            }else if(potentialMatch < target){
                left+=1;
            }else{
                right-=1;
            }
        } 

        return [];
    }
}
