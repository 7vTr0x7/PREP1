const getKey = (word) => {
  let words = [];

  for (let i = 0; i < word.length; i++) {
    words.push(word[i]);
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] > words[j]) {
        [words[i], words[j]] = [words[j], words[i]];
      }
    }
  }

  let key = "";

  for (let i = 0; i < words.length; i++) {
    key += words[i];
  }

  return key;
};

const groupAnagrams = (arr) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    let key = getKey(arr[i]);

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(arr[i]);
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
