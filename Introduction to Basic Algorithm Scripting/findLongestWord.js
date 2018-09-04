function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = strSplit.sort(function(a, b) {
        return b.length - a.length;
    });
    return longestWord[0].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));