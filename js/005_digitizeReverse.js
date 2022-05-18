// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
//String() converts a value to a string
//.split() will seperate the digits
//.map() calls a function once for each element
//.reverse() will reverse the order of the elements
console.log(digitize(5321));