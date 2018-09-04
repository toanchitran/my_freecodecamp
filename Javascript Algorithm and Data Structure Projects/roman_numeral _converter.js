function convertToRoman(num) {

    // Create arrays with default conversion with matching indices.
    var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romanValue = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // Create a copy of num to work on and an empty string variable for the final roman number
    var decimalNumber = num;
    var romanNumber = '';


    while (decimalNumber > 0) {
        if (decimalNumber < 1000)
        // Loop through the indices of the decimalValue array.
            for (var index = 0; index < decimalValue.length; index++) {
            // Get the maximum decimal number less or equal then the decimal number.
                if (decimalValue[index] <= decimalNumber && +decimalValue[index + 1] > decimalNumber) {
                // Add the Roman numeral & decrease numCopy by the decimal equivalent.
                    romanNumber += romanValue[index];
                    decimalNumber -= decimalValue[index];
            }
        }
        else {
            var a = Math.trunc(decimalNumber/1000);
            romanNumber = "M".repeat(a);
            decimalNumber = decimalNumber - 1000*a;
        }
    }

    return romanNumber;
};

console.log(convertToRoman(3999));