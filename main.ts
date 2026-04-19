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
//3 check palindrome
function isPalindrome(s: string): boolean {
  const cleanedString = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}
//4 FizzBuzz
function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

//5 Sum of Array Elements
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//6 Count Vowels
function countVowels(s: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }
  return count;
}

//7 Factorial Calculation
function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//8 Even or Odd List
function evenOrOddList(arr: number[]): string[] {
  return arr.map((num) => (num % 2 === 0 ? "Even" : "Odd"));
}

//9 Fibonacci Sequence
function fibonacci(n: number): number[] {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

//10 Prime Number Check
function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
