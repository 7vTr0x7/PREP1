Promise.PromisePolyfill = function (executor) {
  let start = "pending";
  let value;

  const onFulfilledCallbacks = [];
  const onRejectedCallbacks = [];


  this.then = function (fulfilled,rejected) {
    
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    this.reject(error);
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
