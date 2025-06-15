
/*
1432. Max Difference You Can Get From Changing an Integer
You are given an integer num. You will apply the following steps to num two separate times:

Pick a digit x (0 <= x <= 9).
Pick another digit y (0 <= y <= 9). Note y can be equal to x.
Replace all the occurrences of x in the decimal representation of num by y.
Let a and b be the two results from applying the operation to num independently.

Return the max difference between a and b.

Note that neither a nor b may have any leading zeros, and must not be 0.

 

Example 1:

Input: num = 555
Output: 888
Explanation: The first time pick x = 5 and y = 9 and store the new integer in a.
The second time pick x = 5 and y = 1 and store the new integer in b.
We have now a = 999 and b = 111 and max difference = 888
Example 2:

Input: num = 9
Output: 8
Explanation: The first time pick x = 9 and y = 9 and store the new integer in a.
The second time pick x = 9 and y = 1 and store the new integer in b.
We have now a = 9 and b = 1 and max difference = 8
*/

/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
     const numStr = num.toString();
    const uniqueDigits = new Set(numStr.split(''));
    let maxVal = num;
    let minVal = num;

    for (const digit of uniqueDigits) {
      for (let newDigit = 0; newDigit <= 9; newDigit++) {
        if (digit === numStr[0] && newDigit === 0) continue;
        const newNumStr = numStr.split(digit).join(newDigit.toString());
        const newNum = parseInt(newNumStr, 10);
        maxVal = Math.max(maxVal, newNum);
        minVal = Math.min(minVal, newNum);
      }
    }

    return maxVal - minVal;
  }
// Example usage:
console.log(maxDiff(555)); // Output: 888
console.log(maxDiff(9));   // Output: 8
console.log(maxDiff(123456789)); // Output: 987654321
console.log(maxDiff(1001)); // Output: 9000



/*
✅ Intuition
The goal is to find the maximum difference between two numbers that can be created by replacing all occurrences of one digit in the number with another digit.

We try replacing each unique digit in the number with digits 0 through 9, making sure the result is valid (no leading zeros), and track the max and min values.

✅ Approach
Convert the number to a string to access individual digits.

For each unique digit in the number:

Try replacing it with every digit from 0 to 9.
Skip invalid replacements that would cause a leading zero.
Calculate the new number, and update the max and min values accordingly.
Return the difference between maxVal and minVal.

✅ Complexity
Time complexity:
O(d⋅10⋅d)=O(100)=O(1)
where d is the number of digits in the number (max 10 for int).
Space complexity:
O(d)
for storing the string version and sets.
*/