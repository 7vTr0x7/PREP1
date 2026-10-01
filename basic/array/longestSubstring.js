const longestUniqueSubstring = (str) => {
  const map = {};

  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }

    map[char] = i;

    let length = i - start + 1;

    if (length > maxLen) {
      maxLen = length;
    }
  }

  return maxLen;
};

console.log(longestUniqueSubstring("abcabcbb")); // 3
console.log(longestUniqueSubstring("bbbbb")); // 1
console.log(longestUniqueSubstring("pwwkew")); // 3
