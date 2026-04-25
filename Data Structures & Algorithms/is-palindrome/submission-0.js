class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {

            while (left < right && !this.isValidChar(s[left])) left += 1;

            while (right > left && !this.isValidChar(s[right])) right -= 1;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left += 1;
            right -= 1;
        }

        return true;
    }

    isValidChar(c) {
        return (c >= 'A' && c <= 'Z' || 
                c >= 'a' && c <= 'z' || 
                c >= '0' && c <= '9');
    }

}
