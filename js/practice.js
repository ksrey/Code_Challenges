//transform string into a number
const stringToNumber = function(str){
    return Number(str)
}

//remove first and last character
function removeChar(str){
    return str.slice(1, -1);
}

//reverse the numbers in a string
function digitize(n){
    return String(n).split("").map(Number).reverse()
}
console.log(digitize(54321));
