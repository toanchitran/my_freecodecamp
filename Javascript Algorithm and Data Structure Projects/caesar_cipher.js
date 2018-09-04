function rot13(str) { // LBH QVQ VG!
    return str.toUpperCase().split('').map(function(subStr) {
        return decode(subStr.charCodeAt(0));
    }).join('');

    function decode(arg) {
        // Takes care of characters that are not in [A-Z] such as ! and ? and decodes [A-Z]
        var decoded = 0;
        if (arg >= 65 && arg <= 90) {
            decoded = (arg + 13) % 91;
            return String.fromCharCode(decoded < 65 ? decoded += 65 : decoded);
        }
        return String.fromCharCode(arg);
    }
    return str;
}

console.log(rot13("SERR PBQR PNZC"));