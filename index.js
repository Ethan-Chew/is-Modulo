'use-strict';

module.exports = function isModulo(val1, val2) {
  const num1 = Math.abs(val1);
  const num2 = Math.abs(val2);
  if (!isNumber(num1) || !isNumber(num2)) {
    throw new TypeError('Invalid Input: Input is not a Number.');
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error('Invalid Input: Number expected.');
  }
  if (!Number.isSafeInteger(num1) || !Number.isSafeInteger(num2)) {
    throw new Error(`Invalid Input: Input exceeds Maximum Safe Integer (${Number.MAX_SAFE_INTEGER})`);
  }

  return num1 % num2;
};