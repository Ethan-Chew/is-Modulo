'use strict';

module.exports = function isModulo(val1, val2) {
  const num1 = Math.abs(val1);
  const num2 = Math.abs(val2);
  if (!isNumber(num1) || !isNumber(num2)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(num1) || !Number.isSafeInteger(num2)) {
    throw new Error('value exceeds maximum safe integer');
  }

  return num1 % num2;
};