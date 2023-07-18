function palindrome(str) {
let reg = /[\W_]/g
let smallString = str.toLowerCase().replace(reg, "");

  let reversed = smallString.split("").reverse("").join("");
  console.log(reversed)
  if (reversed === smallString){
return true;
  } else {
    return false
  }


 
}

console.log(palindrome("eye"));