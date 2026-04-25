class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // const res = new Set();
        // nums.sort((a, b) => a - b);

        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         for (let k = j + 1; k < nums.length; k++) {
        //             const potentialMatch = nums[i] + nums[k] + nums[j];

        //             if(potentialMatch === 0){
        //                 res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        //             }
        //         }
        //     }
        // }


        // return Array.from(res).map(item => JSON.parse(item));
    
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {

            if (nums[i] > 0) break;

            if (i > 0 && nums[i] === nums[i - 1]) continue;


            let left = i+1;
            let right = nums.length - 1;

            while(left < right){
                const potentialMatch = nums[i] + nums[left] + nums[right];

                if(potentialMatch > 0){
                    right-=1;
                }else if(potentialMatch < 0){
                    left+=1;
                }else{
                    res.push([nums[i], nums[left], nums[right]]);
                    left+=1;
                    right-=1;
                    while(left < right && nums[left] === nums[left-1]){
                        left+=1;
                    }
                }
            }

        }
        return res;
    }
}
