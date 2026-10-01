const PromisePolyfill = function (executor) {
  let state = "pending";
  let value;

  const onFulfilledCallbacks = [];
  const onRejectedCallbacks = [];

  const resolve = (val) => {
    if (state !== "pending") return;

    if (val instanceof PromisePolyfill) {
      return val.then(resolve, reject);
    }

    state = "fulfilled";
    value = val;

    onFulfilledCallbacks.forEach((cb) => cb(value));
  };
  const reject = (reason) => {
    if (state !== "pending") return;

    state = "rejected";
    value = reason;

    onRejectedCallbacks.forEach((cb) => cb(value));
  };

  this.then = function (onFulfilled, onRejected) {
    return new PromisePolyfill((resolveNext, rejectNext) => {
      const handleFulfilled = () => {
        try {
          if (typeof onFulfilled !== "function") {
            rejectNext(value);
            return;
          }

          const result = onFulfilled(value);
          resolveNext(result);
        } catch (error) {
          rejectNext(error);
        }
      };
      const handleRejected = () => {
        try {
          if (typeof onRejected !== "function") {
            onRejected(value);
            return;
          }

          const result = onRejected(value);
          rejectNext(result);
        } catch (error) {
          rejectNext(error);
        }
      };

      if (state === "fulfilled") {
        setTimeout(handleFulfilled, 0);
      } else if (state === "rejected") {
        setTimeout(handleRejected, 0);
      } else {
        onFulfilledCallbacks.push(handleFulfilled);
        onRejectedCallbacks.push(handleRejected);
      }
    });
  };

  this.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
};

const promise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promise
  .then((data) => {
    console.log(data); // 10
    return data * 2;
  })
  .then((data) => {
    console.log(data); // 20
    return data * 2;
  })
  .then((data) => {
    console.log(data); // 40
  })
  .catch((error) => {
    console.log(error);
  });
