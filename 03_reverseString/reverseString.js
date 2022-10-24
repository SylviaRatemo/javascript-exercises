const reverseString = function(word) {
    let splitStr = word.split("");
    let reverseArray = splitStr.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
