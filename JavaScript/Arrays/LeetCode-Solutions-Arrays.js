/**
 * REMOVE DUPLICATES FROM SORTED ARRAY
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Track seen elements
  var set = new Set();
  // Maintain new size of the array
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      nums[idx++] = nums[i];
    }
  }
  return idx;
};

/**
 * BEST TIME TO BUY AND SELL STOCK II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

/**
 * ROTATE ARRAY
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums == null || nums.length <= 0 || k <= 0) return;

  k = k % nums.length;

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
      start++;
      end--;
    }
  }
  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining elements
  reverse(nums, k, nums.length - 1);
};

/**
 * CONTAINS DUPLICATE
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Track seen elements
  var set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};

/**
 * SINGLE NUMBER
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return set.values().next().value;
};

/**
 * INTERSECTION OF TWO ARRAYS II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // Store intersect elements
  var result = [];

  // Int array to track frequency of each element, within range of 0-1000
  var freq = new Array(1001).fill(0);

  // Count frequency of each element in nums1
  for (var i = 0; i < nums1.length; i++) {
    freq[nums1[i]]++;
  }

  // Count frequency of each element in nums2
  for (var i = 0; i < nums2.length; i++) {
    if (freq[nums2[i]] > 0) {
      result.push(nums2[i]);
      freq[nums2[i]]--;
    }
  }
  return result;
};

/**
 * PLUS ONE
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  // If all digits are 9, add 1 to the beginning of the array
  digits.unshift(1);
  return digits;
};

/**
 * MOVE ZEROES
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var nonZeroIndex = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap the current non-zero element with the element at nonZeroIndex
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++; // Move nonZeroIndex to the right
    }
  }
};

/**
 * TWO SUM
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numIndexMap = {};

  for (var i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numIndexMap) {
      return [numIndexMap[complement], i];
    }

    numIndexMap[nums[i]] = i;
  }
};

/**
 * VALID SUDOKU
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    for (let j = 0; j < 9; j++) {
      const rowNum = board[i][j];
      if (rowNum !== "." && rowSet.has(rowNum)) {
        return false;
      }
      rowSet.add(rowNum);
    }
  }

  for (let j = 0; j < 9; j++) {
    const colSet = new Set();
    for (let i = 0; i < 9; i++) {
      const colNum = board[i][j];
      if (colNum !== "." && colSet.has(colNum)) {
        return false;
      }
      colSet.add(colNum);
    }
  }

  //check 3x3 boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const boxSet = new Set();
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          const num = board[k][l];
          if (num !== "." && boxSet.has(num)) {
            return false;
          }
          boxSet.add(num);
        }
      }
    }
  }
  return true;
};

/**
 * ROTATE IMAGE
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
};
