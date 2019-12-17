function fib(n) {
  if (n === 0) return null;
  if (n === 1 || n === 2) return 1;

  let fibArr = [1,1];
  const recurse = (arr) => {
    if (arr.length === n) return arr[arr.length-1];
    else {
      fibArr.push(fibArr[arr.length - 1] + fibArr[arr.length - 2]);
      return recurse(fibArr);
    }
  }
  return recurse(fibArr);
}

console.log(fib(4));