function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let response = ""
  for (let i = 0; i < str.length; i++){
    if (alphabet.indexOf(str[i]) >= 13){
      response += alphabet[alphabet.indexOf(str[i])-13]
    } else if
      (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
      response += alphabet[alphabet.indexOf(str[i])+13]
    } else {
response += str[i]
    }
  } 
  return response;
}

console.log(rot13("SERR PBQR PNZC"));