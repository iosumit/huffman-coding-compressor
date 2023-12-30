export function buildFrequencyMap(data) {
    const freqMap = new Map();
    for (const sym of data) {
        freqMap.set(sym, (freqMap.get(sym)||0) + 1)
    }
    return freqMap
}