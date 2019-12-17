function recursiveRange(n) {
  if (n === 0) return 0;
  else if (n > 0) {
    return n + recursiveRange(n - 1);
  } else return n + recursiveRange(n + 1);
}

console.log(recursiveRange(-5));