// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheeps){
    return arrayOfSheeps.filter(Boolean).length;
}
//.filter will filter out every instance of false and .length will return the number left of true.