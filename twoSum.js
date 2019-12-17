var twoSum = function(nums, target) {
  nums = nums.sort((a,b) => a-b);
  console.log(nums);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
          return [left, right];
      } else if (sum > target) {
          right--;
      } else { left++ }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));