//Return odd numbers from a list

function odds(values){
    return values.filter( v => v%2 );//if number is even, filter will remove it because it is false
    
  }
  odds(2,3,4,5,6)
//create a function named odds with the parameters of 'values'; return values with a filter that returns values divisible by 2; false so it will remove even numbers and return the odd numbers from the list.  Call parameters of numbers.