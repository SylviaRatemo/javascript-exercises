const removeFromArray = function(arr, ...value) {
    value.forEach((value) => {
        const i = arr.indexOf(value);
        if (i > -1){
            arr.splice(i, 1);
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
