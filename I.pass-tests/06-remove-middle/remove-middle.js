module.exports = function (words) {
    mid = parseInt(words.length / 2);

    return words.splice(mid, 1);
}