const arr = [2, 4, 5, 7, 9];
const target = 7;

const twoSum = (arr, t) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    console.log(diff);

    if (map[diff] !== undefined) {
      return [arr[i], arr[map[diff]]];
    }

    map[arr[i]] = i;
  }

  return 0;
};

console.log(twoSum(arr, target));
