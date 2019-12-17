//Anagrams

  //given two strings, write a function to determine if the second string is an anagram of the first. 
  //an anagram is a word, phrase, or name formed by rearranging the letters of another, such as 
  //'cinema' from 'iceman'

//e.g
// validAnagram('', '') //true 
// validAnagram('aaz', 'zza') //true
// validAnagram('anagram', 'nagaram') //true
// validAnagram('rat', 'car') //false
// validAnagram('awesome', 'awesom') //false
// validAnagram('qwerty', 'qeywrt') //false
// validAnagram('texttwisttime', 'timetwisttext') //true

// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let freqCount1 = {};
//   let freqCount2 = {};
//   for (let char of str1) {
//     freqCount1[char] = (freqCount1[char] || 0) + 1;
//   }
//   for (let char of str2) {
//     freqCount2[char] = (freqCount2[char] || 0) + 1;
//   }
//   for (let key in freqCount1) {
//     if (!freqCount2[key]) {
//       return false;
//     }
//     if (freqCount2[key] !== freqCount1[key]) {
//       return false;
//     }
//   }
//   return true;
// }


//MORE cleVer Solution

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }
  return true;
}
console.log(validAnagram('', '')) //true 
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('anagram', 'nagaram')) //true
console.log(validAnagram('rat', 'car')) //false
console.log(validAnagram('awesome', 'awesom')) //false
console.log(validAnagram('qwerty', 'qeywrt')) //true
console.log(validAnagram('texttwisttime', 'timetwisttext')) //true

