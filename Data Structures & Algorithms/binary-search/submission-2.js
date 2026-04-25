class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(array, target) {
            let leftPointer = 0
            let rightPointer = array.length - 1

    while(leftPointer <= rightPointer){
        const middle = Math.floor((leftPointer + rightPointer) / 2)
        const potentialMatch = array[middle]
        
      if(potentialMatch === target) return middle
      
      if(potentialMatch > target) {
        rightPointer = middle-1
      }
      
      if(potentialMatch < target) {
        leftPointer = middle+1
      }
        
    }
  
  return -1
    }
}
