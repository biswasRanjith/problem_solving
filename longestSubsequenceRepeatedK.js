/*

2014. Longest Subsequence Repeated k Times

You are given a string s of length n, and an integer k. You are tasked to find the longest subsequence repeated k times in string s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s, where seq * k represents a string constructed by concatenating seq k times.

For example, "bba" is repeated 2 times in the string "bababcba", because the string "bbabba", constructed by concatenating "bba" 2 times, is a subsequence of the string "bababcba".
Return the longest subsequence repeated k times in string s. If multiple such subsequences are found, return the lexicographically largest one. If there is no such subsequence, return an empty string.
 

Example 1:

example 1
Input: s = "letsleetcode", k = 2
Output: "let"
Explanation: There are two longest subsequences repeated 2 times: "let" and "ete".
"let" is the lexicographically largest one.
Example 2:

Input: s = "bb", k = 2
Output: "b"
Explanation: The longest subsequence repeated 2 times is "b".
Example 3:

Input: s = "ab", k = 2
Output: ""
Explanation: There is no subsequence repeated 2 times. Empty string is returned.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function(s, k) {
    const freq = {};
    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }
    const candidate = Object.keys(freq)
        .filter((c) => freq[c] >= k)
        .sort()
        .reverse();
    const q = [...candidate];
    let ans = "";
    while (q.length) {
        const curr = q.shift();
        if (curr.length > ans.length) {
            ans = curr;
        }
        // generate the next candidate string
        for (const c of candidate) {
            const next = curr + c;
            if (isKRepeated(s, next, k)) q.push(next);
        }
    }
    return ans;
};

function isKRepeated(s, pattern, k) {
    let i = 0,
        matched = 0;
    for (const c of s) {
        if (c === pattern[i]) {
            i++;
            if (i === pattern.length) {
                i = 0;
                matched++;
                if (matched === k) return true;
            }
        }
    }
    return false;
};

// Example usage:
console.log(longestSubsequenceRepeatedK("letsleetcode", 2)); // Output: "
console.log(longestSubsequenceRepeatedK("bb", 2)); // Output: "b"
console.log(longestSubsequenceRepeatedK("ab", 2)); // Output: "" // Output: ""
console.log(longestSubsequenceRepeatedK("abcabcabc", 3));


/*

Approach: Brute-force Enumeration
Intuition
According to the problem statement, the task is to find the longest subsequence of characters that appears at least k times and is lexicographically largest. Therefore, the characters that make up this subsequence must appear at least k times in s. Characters that appear fewer than k times in s can be filtered out directly.

Let the length of s be n. We only consider characters in s that appear at least k times. The longest valid subsequence can only be composed of these characters, and their count cannot exceed ⌊ 
k
n
​
 ⌋. Since the problem states that n<8k, the length of the longest valid subsequence must be at most 7, and the number of qualifying characters is also at most 7. Therefore, the number of candidate subsequences does not exceed 2 
7
 =128, making it feasible to use brute-force enumeration to find the correct answer.

We start by counting the frequency of each character to identify those that meet the required threshold. Then, we enumerate all possible permutations formed from any combination of these characters. For each such permutation permutation 
i
​
 , we check whether it appears in s at least k times. Among all valid permutations, we return the one with the maximum length and the greatest lexicographical order.

To generate all permutations, we can use a queue. Each time, we pop the current valid subsequence curr from the queue and attempt to append a valid character c to form a new string next. If next appears in s at least k times, we push it into the queue to continue expanding it. By enumerating characters in reverse lexicographical order (from largest to smallest), we ensure that the largest lexicographical string is generated first. This allows us to return the longest and lexicographically largest valid subsequence efficiently.
*/
