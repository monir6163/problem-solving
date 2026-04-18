//1 Reverse a String
function reverseString(s:string):string {
  let result = '';
  for(let i = s.length - 1; i>=0; i--){
    result += s[i]
  }
  return result;
}
const resultString = reverseString("TypeScript");
console.log(resultString);