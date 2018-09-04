function truncateString(str, num) {
    var truncd = '';
    if (str.length > num) {
        truncd = str.slice(0,num) + '...';
        return truncd;
    }
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));