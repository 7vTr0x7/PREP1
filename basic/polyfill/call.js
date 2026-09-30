const obj = {
  name: "v",
};

function func(v) {
  console.log(v, this.name);
}

// func.call(obj, "non");

Function.prototype.newCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
};

func.newCall(obj, "non");
