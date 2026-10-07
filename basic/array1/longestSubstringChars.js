const longestSubstring = (str) => {
  let map = {};

  let maxWin = 0;
  let start = 0;
  let startWin = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }

    map[char] = i;
    let length = i - start + 1;

    if (length > maxWin) {
      maxWin = length;
      startWin = start;
    }
  }

  return str.substring(startWin, startWin + maxWin);
};

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3
