//naive solution

// let same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// console.log(same([1,2,3,4,5], [9,16,4,1, 25]));

//refactored solution using frequency counters
//given two arrays of numbers, determine whether the second array contains all of the squared values from the first array
  //not sorted
let same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  for (let key in freqCounter1) {
    //check if all same keys (squared key) exist in both counters
    if (!freqCounter2[key ** 2]) {
      return false;
    }
    //check if their frequency are the same
    if (freqCounter1[key] !== freqCounter2[key ** 2]) {
      return false;
    }
  } 
  return true;
}
console.log(same1([1,2,3,4,5,1,2], [1,4,9,16,25,1,4]));

