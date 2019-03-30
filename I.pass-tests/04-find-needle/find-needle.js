function findNeedle(words, toFind) {
    return words.findIndex(el => el === toFind);
}

module.exports = findNeedle;
