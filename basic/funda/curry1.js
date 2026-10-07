const add = (a) => {
  function next(b) {
    a += b;
    return next;
  }

  next.valueOf = () => {
    return a;
  };

  return next;
};

console.log(+add(1)(2)(3)(4));
