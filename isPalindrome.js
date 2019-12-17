function isPalindrome(str) {
  const recurse = (str) => {
    if (str.length === 1) return str[0];
    return str[str.length - 1] + recurse(str.slice(0, str.length - 1));
  }
  let revStr = recurse(str);
  if (str === revStr) return true;
  return false;
}

console.log(isPalindrome('caraca'));