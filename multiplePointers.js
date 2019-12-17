//write a function called sumZero which accepts a sorted array of integers. the function should return the
//first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if 
//a pair does not exist

//so naive, didn't even check to see if this worked
// const sumZero = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j >= 0; j--) {
//       if (arr[i] + arr[j] === 0) {
//         result.push(arr[i], arr[j]);
//         return result;
//       }
//     }
//   }
// }

//way better solution below:

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}