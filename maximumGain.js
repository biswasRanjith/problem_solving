/*
You are given a string s and two integers x and y. You can perform two types of operations any number of times.

Remove substring "ab" and gain x points.
For example, when removing "ab" from "cabxbae" it becomes "cxbae".
Remove substring "ba" and gain y points.
For example, when removing "ba" from "cabxbae" it becomes "cabxe".
Return the maximum points you can gain after applying the above operations on s.

 

Example 1:

Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
Example 2:

Input: s = "aabbaaxybbaabb", x = 5, y = 4
Output: 20
*/

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    
    let res = 0;
    let top, bot;
    let topScore, botScore;

    if(y>x){
        top = "ba";
        topScore = y;
        bot = "ab";
        botScore = x;    
    }else{
        top = "ab";
        topScore = x;
        bot = "ba";
        botScore = y;
    }


    // remove top score substring

    let stack = [];
    for(let char of s){
        if(char == top[1] && stack.length>0 && top[0]==stack[stack.length-1]){
            res+=topScore;
            stack.pop();
        }else{
            stack.push(char)
        }
    }

    //remove low score substring

    let newStack = [];
    for(let char of stack){
        if(bot[1]==char && newStack.length>0 && bot[0] == newStack[newStack.length-1]){
            res+=botScore;
            newStack.pop();
        }else{
            newStack.push(char);
        }
    }

    return res;
};
// Example usage
console.log(maximumGain("cdbcbbaaabab", 4, 5)); // Output: 19
console.log(maximumGain("aabbaaxybbaabb", 5, 4)); // Output: 20
console.log(maximumGain("ab", 1, 2)); // Output: 2
console.log(maximumGain("ba", 1, 2)); // Output: 2