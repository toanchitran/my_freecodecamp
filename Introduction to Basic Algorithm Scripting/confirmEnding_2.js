function confirmEnding(string, target) {
    return string.substr(-target.length) === target;
}

console.log(confirmEnding('Bastian', 'n'));