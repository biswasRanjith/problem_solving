/*
2040. Kth Smallest Product of Two Sorted Arrays
Given two sorted 0-indexed integer arrays nums1 and nums2 as well as an integer k, return the kth (1-based) smallest product of nums1[i] * nums2[j] where 0 <= i < nums1.length and 0 <= j < nums2.length.
 

Example 1:

Input: nums1 = [2,5], nums2 = [3,4], k = 2
Output: 8
Explanation: The 2 smallest products are:
- nums1[0] * nums2[0] = 2 * 3 = 6
- nums1[0] * nums2[1] = 2 * 4 = 8
The 2nd smallest product is 8.
Example 2:

Input: nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6
Output: 0
Explanation: The 6 smallest products are:
- nums1[0] * nums2[1] = (-4) * 4 = -16
- nums1[0] * nums2[0] = (-4) * 2 = -8
- nums1[1] * nums2[1] = (-2) * 4 = -8
- nums1[1] * nums2[0] = (-2) * 2 = -4
- nums1[2] * nums2[0] = 0 * 2 = 0
- nums1[2] * nums2[1] = 0 * 4 = 0
The 6th smallest product is 0.
Example 3:

Input: nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3
Output: -6
Explanation: The 3 smallest products are:
- nums1[0] * nums2[4] = (-2) * 5 = -10
- nums1[0] * nums2[3] = (-2) * 4 = -8
- nums1[4] * nums2[0] = 2 * (-3) = -6
The 3rd smallest product is -6.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
    const countPairs = (target) => {
        let count = 0;
        for (const a of nums1) {
            if (a > 0) {
                let l = 0, r = nums2.length - 1;
                while (l <= r) {
                    const m = Math.floor((l + r) / 2);
                    if (a * nums2[m] <= target) l = m + 1;
                    else r = m - 1;
                }
                count += l;
            } else if (a < 0) {
                let l = 0, r = nums2.length - 1;
                while (l <= r) {
                    const m = Math.floor((l + r) / 2);
                    if (a * nums2[m] <= target) r = m - 1;
                    else l = m + 1;
                }
                count += nums2.length - l;
            } else if (target >= 0) {
                count += nums2.length;
            }
        }
        return count;
    };

    let low = -1e10, high = 1e10;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (countPairs(mid) >= k) high = mid;
        else low = mid + 1;
    }
    return low;
};


// Example usage:
console.log(kthSmallestProduct([2, 5], [3, 4], 2)); // Output: 8
console.log(kthSmallestProduct([-4, -2, 0, 3], [2, 4], 6)); // Output: 0
console.log(kthSmallestProduct([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3)); // Output: -6
console.log(kthSmallestProduct([1, 2, 3], [4, 5, 6], 5)); // Output: 10

/*
 Intuition
Given two sorted arrays nums1 and nums2, we want to find the k-th smallest product formed by picking one element from each array.

Brute-force method (generate all products, sort, and return k-th) takes O(n * m log(n * m)), which is too slow.
💡 Key insight: Use binary search on the value of the product, not the positions.

🚀 Approach
Step 1: Define the search range
The product can range from -10^10 to 10^10, depending on the extremes of nums1 and nums2.

Step 2: Binary Search
We perform binary search on the product value. For each mid, we count how many products are ≤ mid. If the count is at least k, we search left; otherwise, search right.

Step 3: Count function
We split the products into three categories:

Negative × Positive → Negative
Positive × Positive → Positive
Negative × Negative → Positive
We scan the array from both ends to count how many pairs multiply to ≤ target mid.

⏱️ Complexity
Time Complexity: O((n + m) * log(maxProduct - minProduct))
Space Complexity: O(1)
*/