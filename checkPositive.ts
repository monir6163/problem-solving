function checkSign(num: number): string {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkSign(10)); // Output: Positive
console.log(checkSign(-5)); // Output: Negative
console.log(checkSign(0)); // Output: Zero
