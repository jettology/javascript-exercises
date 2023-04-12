const palindromes = function (myString) {
    const regex = /[^A-Za-z0-9]/g;

    // set lowercase
    myString = myString.toLowerCase();
    // remove any character that is not alphanumeric
    myString = myString.replace(regex, '');
    
    let revString = myString.split("").reverse().join("");

    return myString === revString;
};

// Do not edit below this line
module.exports = palindromes;
