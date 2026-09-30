const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.newFilter = function (fn) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid");
  }

  let result = [];

  this.forEach((ele, i) => {
    if (fn(ele, i, this)) {
      result.push(ele);
    }
  });

  return result;
};

console.log(arr.newFilter((n, i, arr) => n < 4));
