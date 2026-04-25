class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // maxArea(heights) {
    //     let res = 0;

    //     for(let i = 0; i < heights.length; i++){
    //         for(let j = i+1; j < heights.length; j++){
    //             const area = (j-i) * Math.min(heights[i], heights[j]);
    //             res = Math.max(area, res);
    //         }
    //     }

    //     return res; 
    // }
    
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxContainerArea = 0;

        while(left < right){
            const containerArea = (right - left) * Math.min(heights[left], heights[right]);
            maxContainerArea = Math.max(containerArea, maxContainerArea);

            if(heights[left] > heights[right]){
                right-=1;
            }else {
                left+=1;
            }
        }

        return maxContainerArea;
    }
}
