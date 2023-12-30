import Node from './Node.js';
/**
 * 
 * @param {String} encData 
 * @param {Node} huffmanTree 
 */
export default function decoder(encData, huffmanTree) {
    let decData = ''
    let cur = huffmanTree
    
    for (const b of encData) {
        if (b=='0'){
            cur = cur.left
        } else {
            cur = cur.right
        }
        if (cur.symbol){
            decData+=cur.symbol
            cur = huffmanTree
        }
    }
    return decData
}