class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(arr) {
        if(arr.legth === 0) return 0;

        let left = 0;
        let right = arr.length - 1;
        let leftMaxSoFar = arr[left];
        let rightMaxSoFar = arr[right];
        let totalWater = 0;

        while(left < right){
            if(leftMaxSoFar < rightMaxSoFar){
                left+=1;
                leftMaxSoFar = Math.max(leftMaxSoFar, arr[left]);
                totalWater += leftMaxSoFar - arr[left];
            }else{
                right-=1;
                rightMaxSoFar = Math.max(rightMaxSoFar, arr[right]);
                totalWater += rightMaxSoFar - arr[right];
            }
        }

        return totalWater


    }

    // trap(height) {
        
        
    
    // }

}
