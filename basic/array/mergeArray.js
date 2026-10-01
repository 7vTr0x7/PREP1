const mergeSortedArrays = (a1, a2) => {
  let i = 0;
  let j = 0;

  let result = [];

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      result.push(a1[i]);
      i++;
    }
    if (a2[j] < a1[i]) {
      result.push(a2[j]);
      j++;
    }

    if (i < a1.length) {
      result.push(a1[i]);
      i++;
    }
    if (j < a2.length) {
      result.push(a2[j]);
      j++;
    }
  }

  return result;
};

console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
