function checkEvenOdd(num: number): string {
  if (num % 2 === 0) {
    return `${num} is even.`;
  } else {
    return `${num} is odd.`;
  }
}
const numberToCheck = 5;
const result = checkEvenOdd(numberToCheck);
console.log(result); // Output: "5 is odd."

const anotherNumberToCheck = 10;
const anotherResult = checkEvenOdd(anotherNumberToCheck);
console.log(anotherResult); // Output: "10 is even."
