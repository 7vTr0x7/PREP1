const debouce = (fn, delay) => {
  let timer;

  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
