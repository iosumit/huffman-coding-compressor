/**
 * 
 * @param {String} data 
 * @param {Map} codeMap 
 * @returns 
 */
export default function encoder(data, codeMap) {
    let enc='';
    for (const sym of data) {
        enc += codeMap.get(sym)
    }
    return enc
}