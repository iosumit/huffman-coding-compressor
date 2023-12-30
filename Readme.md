# Huffman Coding Compressor

- Huffman coding is widely used in file compression algorithms, such as those employed in ZIP files. It is part of many compression standards due to its simplicity and effectiveness.

- Huffman coding is a lossless compression algorithm, meaning that the original data can be perfectly reconstructed from the compressed data.

 - Huffman codes can be represented as binary trees, where each leaf node represents a symbol and the path from the root to the leaf node determines the code for that symbol.

 - Huffman compression is based on the frequency of symbols in the input data. Symbols that occur more frequently are assigned shorter codes, resulting in more efficient compression.

---

## How to use it

In `src/main.js` file change the file names on line 48 and
Create folder `file` inside root directory
```
const src =  "./file/apt.mp4"
const compDes =  "./file/apt-compressed.hfc"
const decompDes =  "./file/apt-decomp"
```

Now run,
```
npm start
```
Two files will be created after exection.
one for compressed version and other decompressed file

---

## Huffman Tree Node Data Structure
    `frequency` - For keeping count of symbol occurence
    `symbol` - Symbol
    `left` - For Attaching left child
    `right` - For Attaching right child