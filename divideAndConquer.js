//this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
//this pattern can tremendously decrease time complexity

//example: given a sorted array of integers, write a function called search, that accepts a value
// and returns the index where the value passed to the function is located. if the values is not found,
// return -1.

//logn time complexity
const search = (arr, val) => {
  //start at midpoint
  //if val is same as element at midpoint, return it's index
  //if val is greater than element at midpoint, then chop off right side of midpoint and repeat on right
  //else if val is less than element at midpoint, chop off left side of midpoint and repeat on left
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cur = arr[mid];

    if (arr[mid] < val) {
      min = mid + 1;
    } else if (arr[mid] > val) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(search([1,2,3,4,5,6,7,8], 4));