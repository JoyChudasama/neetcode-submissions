class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;

        for(let i = 0; i < heights.length; i++){
            for(let j = i+1; j < heights.length; j++){
                const area = (j-i) * Math.min(heights[i], heights[j]);
                res = Math.max(area, res);
            }
        }

        return res; 
    }
}
