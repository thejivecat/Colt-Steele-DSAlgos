//implement a function which accepts a sorted array, and counts the unique values in the array
//there can be negative numbers in the array, but it will always be sorted

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let freqCount = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    freqCount[num] = (freqCount[num] || 0) + 1;
  }
  return Object.keys(freqCount).length;
}

console.log(countUniqueValues([]));
