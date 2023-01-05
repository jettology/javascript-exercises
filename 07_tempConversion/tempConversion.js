// C = F * 9/5 + 32
// F = (C - 32) * 5/9

const convertToCelsius = function(f_temp) {
  return Math.round( ((f_temp - 32) * 5 / 9 ) * 10 ) / 10;
};

const convertToFahrenheit = function(c_temp) {
  return Math.round( (c_temp * 9 / 5 + 32) * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
