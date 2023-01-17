function isPalindrome(word) {
  
  
  return word === word.split('').reverse().join('');
}
  // Write your algorithm here


/* 
  Add your pseudocode here
*/
    /*
         function isPalindrome(word) {
           split the word into an array 
           reverse the array 
           join the array back into a string
           return the string is the same as the original word
         }

    */
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log(  'result' ,"=>", isPalindrome('mom' ));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
