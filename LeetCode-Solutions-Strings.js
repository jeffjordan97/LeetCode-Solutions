/**
 * REVERSE STRING
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  s.reverse();
};

/**
 * REVERSE INTEGER
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const digits = String(x).split("");
  let reversed = parseInt(digits.reverse().join(""));
  if (x < 0) {
    reversed = -reversed;
  }
  if (reversed < -2147483648 || reversed > 2147483647) {
    return 0;
  }
  return reversed;
};

/**
 * FIRST UNIQUE CHARACTER IN A STRING
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();

  // Count occurrences of each character
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

/**
 * VALID ANAGRAM
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  const map = new Map();

  // Count occurrences of each character in s
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Decrement the count of each character in t
  for (const char of t) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }

  return true;
};

/**
 * VALID PALINDROME
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  /*
   ** Replace uses a regex to remove non alphanumeric characters (i.e., not a-z or 0-9).
   ** Global flag ensures it applies to all non-alphanumeric characters in the string, not just the first match.
   */
  const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanS === cleanS.split("").reverse().join("");
};

/**
 * STRING TO INTEGER (ATOI)
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // Trim whitespace
  s = s.trimStart();

  // Check if the string starts with a sign (+/-)
  var isPositive = true;
  if (s.charAt(0) === "-") isPositive = false;

  // Remove + or - from the string
  if (s.charAt(0) === "+" || s.charAt(0) === "-") {
    s = s.substring(1);
  }

  var numStr = "0";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s.charAt(i))) break;
    else {
      numStr += s.charAt(i);
    }
  }
  var num = parseInt(numStr);
  if (!isPositive) {
    num = -num;
  }
  // Check if the number is within the valid range
  if (num > 2147483647) return 2147483647;
  if (num < -2147483648) return -2147483648;

  return num;
};

/**
 * IMPLEMENT STRSTR()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Base condition
  if (haystack == null || needle == null) {
    return -1;
  }
  if (haystack === needle) {
    return 0;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // Check if the substring equal to the needle
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};

/**
 * LONGEST COMMON PREFIX
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    var char = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].charAt(i) !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};
