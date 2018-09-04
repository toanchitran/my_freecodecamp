function bouncer(arr) {
    function isTruthy(arg){
        return Boolean(arg);
    }
    return arr.filter(isTruthy);

}

console.log(bouncer([7, "ate", "", false, 9]));