const firstNonRepeating = (str) => {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map[char] !== undefined) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return str[i];
    }
  }

  return 0;
};

console.log(firstNonRepeating("leetcode")); // 0
console.log(firstNonRepeating("loveleetcode")); // 2
console.log(firstNonRepeating("aabb")); // -1
