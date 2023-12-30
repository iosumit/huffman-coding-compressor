import decoder from './lib/Decoder.js';
import encoder from './lib/Encoder.js';
import HuffmanCoding, { buildCodingMap } from './lib/HuffmanCoding.js';
import {buildFrequencyMap} from './lib/Utils.js';
import fs from 'fs';

/**
 * 
 * @param {String} source 
 * @param {String} destination 
 */
function compress(source, destination) {
    // Pick the file 
    const buffer = fs.readFileSync(source);
    const data = buffer.toString('binary');

    // Create Frequency Map
    const freqMap = buildFrequencyMap(data)

    // Create Huffman Tree
    const huffmanTree = HuffmanCoding(freqMap)

    // Create coding ( 0 | 1 ) Map
    const codingMap = buildCodingMap(huffmanTree, '', new Map())

    const encodedData = encoder(data, codingMap)

    const type = source.substring(source.lastIndexOf('.'))
    const compressedData = {
        type, 
        huffmanTree, 
        encodedData
    }

    fs.writeFileSync(destination, JSON.stringify(compressedData))
}

function decompress(source, destination) {
    const raw = fs.readFileSync(source, 'utf8');
    const compressData =  JSON.parse(raw)

    const decompressedData = decoder(compressData.encodedData, compressData.huffmanTree)

    fs.writeFileSync(destination+compressData.type, Buffer.from(decompressedData, 'binary'))

} 

const src =  "./file/apt.mp4"
const compDes =  "./file/apt-compressed.hfc"
const decompDes =  "./file/apt-decomp"

compress(src, compDes)
decompress(compDes, decompDes)

