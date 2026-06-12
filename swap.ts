function swapTwoValues<T>(a: T, b: T): [T, T] {
  return [b, a];
}

// Example usage:
const [newA, newB] = swapTwoValues(1, 2);
console.log(newA); // Output: 2
console.log(newB); // Output: 1

const [newStrA, newStrB] = swapTwoValues("Hello", "World");
console.log(newStrA); // Output: "World"
console.log(newStrB); // Output: "Hello"

const [newArrA, newArrB] = swapTwoValues([1, 2, 3], [4, 5, 6]);
console.log(newArrA); // Output: [4, 5, 6]
console.log(newArrB); // Output: [1, 2, 3]
