const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.newReduce = function (fn, initialValue) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid");
  }

  let acc = initialValue ? initialValue : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }

  return acc;
};

console.log(arr.newReduce((acc, curr) => acc + curr, 3));
