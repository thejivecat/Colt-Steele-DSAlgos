//write a function which accepts an array of integers and a number n. it should calculate 
//the maximum sum of n consecutive elements in the array

//naive solution with O(n^2) time complexity

// const maxSubarraySum = (arr, n) => {
//   if (arr.length < n) { //if there aren't n consecutive integers in array, return null
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) { //first loop is the start of window
//     let temp = 0; //temp var stores added consecutive integers
//     for (let j = 0; j < num; j++) { //second loop goes over n consecutive integers
//       temp += arr[i + j];
//     }
//     if (temp > max) { //compare temp to current max and replace if larger
//       max = temp;
//     }
//   }
//   return max;
// }

//better solution
//algorithm: add first n consecutive digits, then subtract first number and add next number and compare to max
const maxSubarraySum = (arr, n) => {
  let maxSum = 0; //keep track of max
  let tempSum = 0; //keep track of temp max
  if (arr.length > n) return null;
  for (let i = 0; i < n; i++) { //add first n consecutive integers to max sum
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) { //sliding window, loop through from n to end of array, and subtract off the first element from temp and add next element
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,3,4], 2));