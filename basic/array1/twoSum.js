const arr = [2, 3, 5, 7, 9];

const target = 9;

const twoSum = (arr, t) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (map[diff] !== undefined) {
      return [diff, arr[i]];
    }

    map[arr[i]] = i;
  }
  return 0;
};

console.log(twoSum(arr, target));
