var longestPalindrome = function(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j >= 0; j--) {
      let subString = str.slice(i, j);
      if (subString === subString.split('').reverse().join('')) {
        longest = subString;
      }
    }
  }
};

console.log(longestPalindrome('hello'));