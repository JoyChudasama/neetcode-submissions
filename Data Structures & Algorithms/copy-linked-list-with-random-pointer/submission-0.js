// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        
    const nodeDict = new Map();
    nodeDict.set(null, null);

    let curr = head;
    while (curr) {
        const cpNode = new Node(curr.val);
        nodeDict.set(curr, cpNode);
        curr = curr.next;
    }

    curr = head;
    while (curr) {
        const cpNode = nodeDict.get(curr);
        cpNode.next = nodeDict.get(curr.next);
        cpNode.random = nodeDict.get(curr.random);
        curr = curr.next;
    }

    return nodeDict.get(head);
    }

    // // 3 -> 7 -> 4 -> 5 -> null
    // helper(ogNode) {
    //     if (ogNode === null) return ogNode;

    //     const cpNode = new Node(ogNode.val);
    //     const randomNode = ogNode.random ? new Node(ogNode.random.val) : null;
    //     cpNode.random = randomNode;

    //     cpNode.next = this.helper(ogNode.next);
    //     console.log(cpNode);
    //     return cpNode;
    // }
}
