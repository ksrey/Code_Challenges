//Return odd numbers from a list

function odds(values){
    return values.filter( v => v%2 );//if number is even, filter will remove it
  }
  odds(2,3,4,5,6)