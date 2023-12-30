export default class Node{
    /**
     * 
     * @param {String} symbol 
     * @param {Number} frequency 
     */
    constructor(symbol, frequency){
        this.frequency = frequency;
        this.symbol = symbol;
        this.left = null;
        this.right = null;
    }
}