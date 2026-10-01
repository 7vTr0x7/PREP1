const heavyCalculation = (n1, n2) => {
  for (let i = 0; i < 1000000000; i++) {}

  return n1 * n2;
};

const memoize = (fn) => {
  const cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key] === undefined) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

const memoizedFunction = memoize(heavyCalculation);

console.time("first");
console.log(memoizedFunction(100, 300));
console.timeEnd("first");
console.time("second");
console.log(memoizedFunction(100, 300));
console.timeEnd("second");
