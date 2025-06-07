/*
3170. Lexicographically Minimum String After Removing Stars

You are given a string s. It may contain any number of '*' characters. Your task is to remove all '*' characters.

While there is a '*', do the following operation:

Delete the leftmost '*' and the smallest non-'*' character to its left. If there are several smallest characters, you can delete any of them.
Return the lexicographically smallest resulting string after removing all '*' characters.
 

Example 1:

Input: s = "aaba*"

Output: "aab"

Explanation:

We should delete one of the 'a' characters with '*'. If we choose s[3], s becomes the lexicographically smallest.

Example 2:

Input: s = "abc"

Output: "abc"

Explanation:

There is no '*' in the string.

 

Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters and '*'.
The input is generated such that it is possible to delete all '*' characters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    
     let stack = [];
    let freq = new Array(26).fill(0); 
    
    for (let i = 0; i < s.length; i++) 
    {
        if (s[i] === '*') 
        {
            if (stack.length > 0) 
            {
                let minCharCode = -1;
                for (let j = 0; j < 26; j++) 
                {
                    if (freq[j] > 0) 
                    {
                        minCharCode = j;
                        break;
                    }
                }
                
                if (minCharCode !== -1) 
                {
                    let minChar = String.fromCharCode(minCharCode + 97);
                    
                    for (let k = stack.length - 1; k >= 0; k--) 
                    {
                        if (stack[k] === minChar) 
                        {
                            stack.splice(k, 1);
                            freq[minCharCode]--;
                            break;
                        }
                    }
                }
            }
        } 
        else 
        {
            stack.push(s[i]);
            let charCode = s[i].charCodeAt(0) - 97;
            freq[charCode]++;
        }
    }
    return stack.join('');

};


// Example usage:
console.log(clearStars("aaba*")); // Output: "aab"
console.log(clearStars("abc"));   // Output: "abc"
