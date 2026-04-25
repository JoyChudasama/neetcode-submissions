class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
            if (!wordList.includes(endWord)) return 0;

    const adjList = new Map();
    wordList.push(beginWord);
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
            if (!adjList.has(pattern)) adjList.set(pattern, []);
            adjList.get(pattern).push(word);
        }
    }

    const q = [beginWord];
    const seenWords = new Set();
    let ladderLength = 1; // 1 because we already have a beginWord
    while (q.length) {
        const size = q.length;

        for (let s = 0; s < size; s++) {
            const word = q.shift();
            if (word === endWord) return ladderLength;
            for (let i = 0; i < word.length; i++) {
                const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
                for (const nei of adjList.get(pattern)) {
                    if (seenWords.has(nei)) continue;
                    seenWords.add(nei);
                    q.push(nei);
                }
            }
        }
        
        ladderLength += 1;
    }

    return 0;
    }
}
