const subarraySum = (arr, k) => {
  let result = [];
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }

    if (sum === k) {
      let subArray = [];

      for (let i = left; i <= right; i++) {
        subArray.push(arr[i]);
      }

      result.push(subArray);
    }
  }

  return result;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
