function confirmEnding(str, target) {
    return (str.substr(-target.length) === target) ? true : false;
}

console.log(confirmEnding("Bastian", "n"));