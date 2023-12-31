import Node from './Node.js';
/**
 * @param {Node} a 
 * @param {Node} b 
 * @returns 
 */
const nodeSort=(a, b)=>a.frequency-b.frequency;

/** 
    @param {Map} frequencyMap
    @return {Node}
**/

export default function HuffmanCoding(freqMap) {
    /**
     * @TODO Need Need to change to MinHeap which takes 
     * Heapify - O(n) 
     * Extract min - O(log n)
     */

    // Map to Node
    const nodes = [...freqMap.entries()].map(e=> new Node(e[0], e[1])).sort(nodeSort);
    const n = nodes.length

    for (let i = 1; i < n; i++) {
        const z = new Node();
        z.left = nodes.shift()
        z.right = nodes.shift()
        z.frequency = z.left.frequency + z.right.frequency
        nodes.push(z)
        nodes.sort(nodeSort)
    }
    return nodes[0]
} 
/**
 * 
 * @param {Node} root 
 * @param {String} code 
 * @param {Map} codeMap 
 */
export function buildCodingMap(root, code, codeMap) {
    if (root.symbol){
        codeMap.set(root.symbol, code)
    } else {
        buildCodingMap(root.left, code+'0', codeMap);
        buildCodingMap(root.right, code+'1', codeMap);
    }
    return codeMap
}