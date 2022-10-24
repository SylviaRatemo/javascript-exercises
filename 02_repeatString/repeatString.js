const repeatString = function(word, count) {
    let repeat = "";
    if (count < 0) {
        repeat = 'ERROR';
    } else {
        for (let i = 0; i < count; i++){
            repeat += word;
        }
    }
    
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
