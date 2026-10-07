const add = (a) => {
  return function (b) {
    if (b === undefined) {
      return a;
    }

    return add(a + b);
  };
};

console.log(add(1)(2)(3)());
