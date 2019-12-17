const sameFrequency = (num1, num2) => {
  let str1 = `${num1}`;
  let str2 = `${num2}`;
  if (str1.length !== str2.length) {
      return false;
  }
  const freq1 = {};
  const freq2 = {};
  for (let i of str1) {
    freq1[i] = (freq1[i] || 0) + 1;
  }
  for (let i of str2) {
    freq2[i] = (freq2[i] || 0) + 1;
  }
  for (let key in freq1) {
    if (!freq2[key]) {
      return false;
    }
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
};

