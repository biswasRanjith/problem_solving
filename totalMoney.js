
/*1716. Calculate Money in Leetcode Bank
Solved
Easy
Topics
premium lock icon
Companies
Hint
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.

Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

 

Example 1:

Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
Example 2:

Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.
Example 3:

Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
*/

/**
 * @param {number} 
 * @return {number}
 */
var totalMoney = function(n) {
 let res = 0
    
    let week = Math.floor(n / 7)
    let remain = n % 7
    // handle full week
    res += (week * 28) + (7 * ((week) * (week-1)) / 2)
    // handle remain days
    res += (((remain+1) * remain) / 2) + (remain * (week))
    return res
};

/*
let total = 0;

    for (let day = 0; day < n; day++) {
        total += Math.floor(day / 7) + 1 + (day % 7);
    }

    return total;  

 */
 
    

// Example usage:
console.log(totalMoney(4));  // Output: 10
console.log(totalMoney(10)); // Output: 37
console.log(totalMoney(20)); // Output: 96  