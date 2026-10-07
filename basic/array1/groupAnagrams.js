const getKey = (word) => {
  let chars = [];

  for (let i = 0; i < word.length; i++) {
    chars.push(word[i]);
  }

  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
    }
  }

  let key = "";

  for (let i = 0; i < chars.length; i++) {
    key += chars[i];
  }

  return key;
};

const groupAnagrams = (arr) => {
  const map = {};

  for (let word of arr) {
    let key = getKey(word);

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
