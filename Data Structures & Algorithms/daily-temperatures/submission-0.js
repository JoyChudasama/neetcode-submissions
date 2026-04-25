class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    dailyTemperatures(arr) {

        // i = day
        // array[i] = temperature
        // return result[] where result[i] = days to warmer day, if no warmer day in the future set it to 0

        const result = new Array(arr.length).fill(0);

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[j] > arr[i]) {
                    result[i] = j - i;
                    break;
                }
            }
        }

        return result;
    }
}
