const permute = function (nums) {
  const result = [];
  var backtrack = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      backtrack(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  backtrack(0, nums);
  return result;
};
console.log(permute([1, 2, 3]));
console.log(permute(['a', 'b', 'c']));
console.log(permute([0, 0, 1]));
