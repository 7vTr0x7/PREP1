const obj = {
  name: "non",
  address: {
    city: "non1",
  },
};

const deepCopy = (object) => {
  if (typeof object !== "object") {
    return object;
  }

  const result = Array.isArray(object) ? [] : {};

  for (let key in object) {
    const value = object[key];
    result[key] = deepCopy(value);
  }

  return result;
};

const copy = deepCopy(obj);
copy.address.city = "n";
console.log(copy);
console.log(obj);
