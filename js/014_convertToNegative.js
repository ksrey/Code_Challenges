//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return -Math.abs(num)
  }
  //The Math.abs() function returns the absolute value of a number.

  //Or
  function makeNegative(num) {
    return Math.abs(num) * -1;
  }