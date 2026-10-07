const MyPromise = function (executor) {
  let status = "pending";
  let value;

  let successCallbacks = [];
  let errorCallbacks = [];

  const resolve = (data) => {
    if (status !== "pending") return;

    status = "fulfilled";
    value = data;

    successCallbacks.forEach((cb) => cb(data));
  };

  const reject = (error) => {
    if (status !== "pending") return;

    status = "rejected";
    value = data;

    errorCallbacks.forEach((cb) => cb(data));
  };

  this.then = function (onSuccess, onError) {
    return new MyPromise((resolveNext, rejectNext) => {
      if (status === "fulfilled") {
        let result = onSuccess(value);
        resolveNext(result);
      }
      if (status === "rejected") {
        let error = onError(value);
        rejectNext(error);
      }

      if (status === "pending") {
        successCallbacks.push(() => {
          const result = onSuccess(value);
          resolveNext(result);
        });

        errorCallbacks.push(() => {
          const result = onError(value);
          rejectNext(result);
        });
      }
    });
  };

  this.catch = function (onError) {
    return new MyPromise((resolveNext, rejectNext) => {
      if (status === "rejected") {
        try {
          const result = onError(value);
          resolveNext(result);
        } catch (error) {
          rejectNext(error);
        }
      }

      if (status === "pending") {
        errorCallbacks.push(() => {
          try {
            const result = onError(value);
            resolveNext(result);
          } catch (error) {
            rejectNext(error);
          }
        });
      }
    });
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
};

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promise
  .then((data) => {
    console.log(data);
    return data * 2;
  })
  .then((data) => {
    console.log(data);
    return data * 2;
  })
  .then((data) => {
    console.log(data);
  });
