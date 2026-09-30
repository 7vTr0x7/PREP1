const obj = {
  name: "v",
};

function func(v) {
  console.log(v, this.name);
}

Function.prototype.newBind = function (context, ...args) {
  context.fn = this;

  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};

const bind = func.newBind(obj, "non");

bind();
