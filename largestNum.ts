function findLargestNum(nums: number[]): number {
  if (nums.length === 0) {
    throw new Error("Input array cannot be empty");
  }
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}
