class Solution {
    // O(n^2) time | O(n) space
    // dailyTemperatures(arr) {
    //     const result = new Array(arr.length).fill(0);

    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             if(arr[j] > arr[i]) {
    //                 result[i] = j - i;
    //                 break;
    //             }
    //         }
    //     }

    //     return result;
    // }


    //
    dailyTemperatures(arr) {
        const result = new Array(arr.length).fill(0);
        const tempratureStack = [];
        
        for(let i = 0; i < arr.length; i++){
         
            while(tempratureStack.length && arr[i] > tempratureStack[tempratureStack.length - 1].temprature){
                const lastTempDict = tempratureStack.pop();
                result[lastTempDict.index] = i - lastTempDict.index;
            }
            tempratureStack.push({ 'index' : i, 'temprature' : arr[i]});
        }

        return result;
    }
}
