const obj = {
  name: "v",
};

function func(v) {
  console.log(v, this.name);
}

Function.prototype.newApply = function (context, args) {
  context.fn = this;
  context.fn(...args);
};

func.newApply(obj, ["non"]);
