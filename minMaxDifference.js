/*
2566. Maximum Difference by Remapping a Digit

You are given an integer num. You know that Bob will sneakily remap one of the 10 possible digits (0 to 9) to another digit.

Return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num.

Notes:

When Bob remaps a digit d1 to another digit d2, Bob replaces all occurrences of d1 in num with d2.
Bob can remap a digit to itself, in which case num does not change.
Bob can remap different digits for obtaining minimum and maximum values respectively.
The resulting number after remapping can contain leading zeroes.
 

Example 1:

Input: num = 11891
Output: 99009
Explanation: 
To achieve the maximum value, Bob can remap the digit 1 to the digit 9 to yield 99899.
To achieve the minimum value, Bob can remap the digit 1 to the digit 0, yielding 890.
The difference between these two numbers is 99009.
Example 2:

Input: num = 90
Output: 99
Explanation:
The maximum value that can be returned by the function is 99 (if 0 is replaced by 9) and the minimum value that can be returned by the function is 0 (if 9 is replaced by 0).
Thus, we return 99.

*/
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let str= num+'';
    let i=0;
    while(str[i]==9){
        i++
    };

    let max=str.replaceAll(str[i], 9);
    let min=str.replaceAll(str[0], 0);
    return max-min;
};





//// Example usage:
console.log(minMaxDifference(11891)); // Output: 99009
console.log(minMaxDifference(90));    // Output: 99     

/*
Approach
For Example: nums = 11891

First of all, change number to string to work on array.

11891+'' => '11891' = str
let i=0;

create a loop and condition will be this loop run untill not match the condition (str[i] == 9) means if str[i] is 9 then loop proceed otherwise terminate.

while(str[i]==9){i++}
Ex - 1 == 9 is not true so loop terminate
and i = 0

After, find max value by replaceAll first number which is not 9 find by str[i]

max = str.replaceAll(str[i], 9)
means in str replace every value which is same to 9
Ex- '11891' => str[0]=1;
so, '99899', all 1 is replaced by 9

Then, find min value by replaceAll str[0] value to 0.

min = str.replaceAll(str[0], 0)
means in str replace every value which is same to 0
Ex- '11891' => str[0]=1;
so, '00890', all 1 is replaced by 0

At last, return max-min;

'99899' - '00890' => 99009
In JS, string number subtract, multiply, divde easily except addition, so we dont need to change into number.

*/

