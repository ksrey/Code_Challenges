// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P-parameters: Is it always going to be interger?  Are we going to be given any special characters?  An empty arr ever?
//R-return: Return a new arr with each value doubled
//E-examples: If we are given [2,3,4], should return [4,6,8]
// if we are given [4,5,6], should return [8,10,12]
//P-pseudo code: 
//make a function that takes in an array
function doubled(arr){
    return arr.map(element=>element*2)
}
//map through the array and multiply each element by 2, also return lol
doubled([1,2,3])
console.log(doubled([2,3,4]),)