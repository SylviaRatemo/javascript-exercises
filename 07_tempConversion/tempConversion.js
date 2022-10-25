const ftoc = function(far) {
  let cel = ((far - 32) * 5) / 9;
  if (cel - Math.floor(cel) !== 0){
    return parseFloat(cel.toFixed(1));
  }
  return cel;
};

const ctof = function(cel) {
  let far = ((cel * 9) / 5) + 32;
  if (far - Math.floor(far) !== 0) {
    return parseFloat(far.toFixed(1));
  }
  return far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
