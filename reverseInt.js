var reverse = function(x) {
  if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
    return 0;
  }
  let str = x.toString();
  if (str[0] === '-') {
    return '-' + str.slice(1).split('').reverse().join('');
  }
  if (str[str.length - 1] === '0') {
    return str.slice(0, str.length-1).split('').reverse().join('');
  }
  return str.split('').reverse().join('');
};

console.log(reverse(120));