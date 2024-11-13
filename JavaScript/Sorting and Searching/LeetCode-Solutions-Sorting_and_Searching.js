/**
 * MERGE SORTED ARRAY
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var i = nums1.length;
  if (m == 0) {
    nums1.splice(...nums2.slice(0, n));
    return;
  }
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[i - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[i - 1] = nums2[n - 1];
      n--;
    }
    i--;
  }
};
