const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.newMap = function (fn) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid array");
  }

  let result = [];

  this.forEach((ele, i) => {
    result.push(fn(ele, i, this));
  });

  return result;
};

console.log(arr.newMap((n, i, arr) => n + 2));
