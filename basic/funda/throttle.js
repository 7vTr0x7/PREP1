const throttle = (fn, inteval) => {
  let prev = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - prev > inteval) {
      fn(...args);
    }
    prev = now;
  };
};
