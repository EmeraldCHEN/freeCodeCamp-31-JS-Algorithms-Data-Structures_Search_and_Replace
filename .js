function myReplace(str, before, after) {
  if(before[0].match(/[A-Z]/) && !after[0].match(/[A-Z]/)){
   
   after = after[0].toUpperCase() + after.slice(1); // Same as: after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}
