function convertToRoman(num) {
let romanNumerals = {
  M: 	1000,
CM: 	900,
D:	500,
CD: 	400,
C:	100,
XC: 	90,
L: 	50,
XL:	40,
X: 	10,
IX: 	9,
V: 	5,
IV:	4,
I: 	1,
}
let response = ""
for (let prop in romanNumerals)
while (num >= romanNumerals[prop]){
  response += prop;
  num -= romanNumerals[prop];
}
 return response;
}

console.log(convertToRoman(36));