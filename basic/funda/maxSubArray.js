const maxSubArray = (arr) => {
  let current = arr[0];
  let max = arr[0];

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > current + arr[i]) {
      current = arr[i];
      tempStart = i;
    } else {
      current = current + arr[i];
    }

    if (current > max) {
      max = current;
      start = tempStart;
      end = i;
    }
  }

  let result = [];

  for (let i = start; i <= end; i++) {
    result.push(arr[i]);
  }

  return result;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
