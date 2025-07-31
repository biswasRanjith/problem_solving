/*Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

 

Example 1:

Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

*/


/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n===2) return 1;
    if(n===3) return 2;

    let count3 = Math.floor(n/3); //3
    let rem = n % 3; // 1

    if(rem === 1){
        count3 -= 1; // 2
        rem = 4;
    }else if(rem === 0){
        rem = 1;
    }

    return Math.pow(3, count3)*rem;
};


//example usage
console.log(integerBreak(10)); // Output: 36
console.log(smallestEquivalentString(5)); 