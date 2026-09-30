const array = [1, [2, [3, [4, [5, [6]]]]]];

Array.prototype.newFlat = function (depth) {
  if (!Array.isArray(this)) {
    throw new Error("Inavlid array");
  }

  if (depth <= 1) {
    return this;
  }

  const result = [];

  this.forEach((ele, i) => {
    if (Array.isArray(ele)) {
      result.push(...ele.newFlat(depth - 1));
    } else {
      result.push(ele);
    }
  });

  return result;
};

console.log(array.newFlat(6));
