
/***************    Solution #1     **************************************************************************************/

function myReplace(str, before, after) {
  
   if(before[0].match(/[A-Z]/) && !after[0].match(/[A-Z]/)){
   
       after = after[0].toUpperCase() + after.slice(1); // Same as: after = after.charAt(0).toUpperCase() + after.slice(1);
   }
   return str.replace(before, after);
}
myReplace("Let us get back to more Coding", "Coding", "algorithms"); // return "Let us get back to more Algorithms"



/***************    Solution #2     **************************************************************************************/

function myReplace2(str, before, after) {
  // Find index where before is on str
  let index = str.indexOf(before);  // Same as: let index = str.indexOf(before.charAt(0));
  if (str[index] === str[index].toUpperCase()) { // Check to see if the first letter is uppercase or not
    
    after = after.charAt(0).toUpperCase() + after.slice(1); // If yes - change the after word to be capitalized before we use it
  } 
  return str.replace(before, after);  // Replace the original str with the edited one 
}




// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace/
