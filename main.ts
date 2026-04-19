//1 Reverse a String
function reverseString(s: string): string {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

//2 Find the Largest Number in an Array
function findLargestNumber(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  let largestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
