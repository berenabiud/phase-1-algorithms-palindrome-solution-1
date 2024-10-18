function isPalindrome(word) {
  // Write your algorithm here
  let re = /[\W_]/g;
  let lowRegStr = word.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  .split('') converts the string lowRegStr into an array of characters.
.reverse() reverses the order of the characters in the array.
.join('') joins the reversed array back into a string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
