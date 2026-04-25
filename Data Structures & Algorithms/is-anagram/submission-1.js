class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seenCharsInS = {}
        const seenCharsInT = {}

        if(s.length !== t.length) return false;

        for(let i=0; i < s.length; i++){
            if(s[i] in seenCharsInS){
                seenCharsInS[s[i]]+=1
            }else{
                seenCharsInS[s[i]] = 1 
            }
            if(t[i] in seenCharsInT){
                seenCharsInT[t[i]]+=1
            }else{
                seenCharsInT[t[i]] = 1 
            }
        }

        for(const char in seenCharsInS){
            if(seenCharsInS[char] !== seenCharsInT[char]) return false
        }

        return true
    }
}
