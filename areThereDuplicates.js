function areThereDuplicates() {
  let args = [...arguments];
  let freq = {};
  for (let i of args) {
    freq[i] = (freq[i] || 0) + 1;
    if (freq[i] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,2,3,4,2));