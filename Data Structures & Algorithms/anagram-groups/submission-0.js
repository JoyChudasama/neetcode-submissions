class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramStrsMap = new Map();
        
        for(const string of strs){
            const sortedString = string.split('').sort().join('');

            if(anagramStrsMap.has(sortedString)){
                const groupedStrings = anagramStrsMap.get(sortedString);
                groupedStrings.push(string);
                anagramStrsMap.set(sortedString, groupedStrings);
            }else{
                anagramStrsMap.set(sortedString, [string])
            }
        }

        const results = []
        anagramStrsMap.forEach(value => {results.push(value)})

        return results;
    }
}
