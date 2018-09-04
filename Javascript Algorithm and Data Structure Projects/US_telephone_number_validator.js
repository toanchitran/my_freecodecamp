/*
* Return true if the passed string is a valid US phone number.
* The user may fill out the form field any way they choose as long as it is a valid US number.
* The following are all valid formats for US numbers:
* 555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555
* */

function telephoneCheck(str) {
    return /^(1|1\s)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/.test(str);
}

console.log(telephoneCheck("555-555-5555"));