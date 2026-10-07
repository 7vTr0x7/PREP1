const longestSubstring = (str) => {
  const map = {};

  let start = 0;
  let maxLen = 0;
  let startLen = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }

    map[char] = i;

    let length = i - start + 1;

    if (length > maxLen) {
      maxLen = length;
      startLen = start;
    }
  }

  let string = "";

  for (let i = startLen + 1; i <= maxLen; i++) {
    string += str[i];
  }

  return str.substring(startLen, startLen + maxLen);
};

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3
