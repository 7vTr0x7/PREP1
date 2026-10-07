const subarraySum = (arr, k) => {
  const map = { 0: 1 };

  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    let required = sum - k;

    if (map[required]) {
      count += map[required];
    }

    if (map[sum]) {
      map[sum]++;
    } else {
      map[sum] = 1;
    }
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
