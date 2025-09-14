/*
966. Vowel Spellchecker

Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

For a given query word, the spell checker handles two categories of spelling mistakes:

Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.
Example: wordlist = ["yellow"], query = "YellOw": correct = "yellow"
Example: wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
Example: wordlist = ["yellow"], query = "yellow": correct = "yellow"
Vowel Errors: If after replacing the vowels ('a', 'e', 'i', 'o', 'u') of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
Example: wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
Example: wordlist = ["YellOw"], query = "yeellow": correct = "" (no match)
Example: wordlist = ["YellOw"], query = "yllw": correct = "" (no match)
In addition, the spell checker operates under the following precedence rules:

When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
When the query matches a word up to capitlization, you should return the first such match in the wordlist.
When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
If the query has no matches in the wordlist, you should return the empty string.
Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].

 

Example 1:

Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
Example 2:

Input: wordlist = ["yellow"], queries = ["YellOw"]
Output: ["yellow"]
*/

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const exact = new Set(wordlist);
    const lowerMap = new Map();
    const vowelMap = new Map();

    const isVowel = (c) => "aeiou".includes(c);
    const maskVowels = (s) => {
        s = s.toLowerCase();
        let out = '';
        for (let ch of s) out += isVowel(ch) ? 'a' : ch;
        return out;
    };

    for (let w of wordlist) {
        const wl = w.toLowerCase();
        if (!lowerMap.has(wl)) lowerMap.set(wl, w);
        const m = maskVowels(wl);
        if (!vowelMap.has(m)) vowelMap.set(m, w);
    }

    const ans = [];
    for (let q of queries) {
        if (exact.has(q)) {
            ans.push(q);
            continue;
        }
        const ql = q.toLowerCase();
        if (lowerMap.has(ql)) {
            ans.push(lowerMap.get(ql));
            continue;
        }
        const qm = maskVowels(ql);
        ans.push(vowelMap.get(qm) || "");
    }
    return ans;
};

// Example usage:
const wordlist = ["KiTe","kite","hare","Hare"];
const queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"];
console.log(spellchecker(wordlist, queries));
// Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
