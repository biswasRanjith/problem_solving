/*
3403. Find the Lexicographically Largest String From the Box I
Medium
Topics
premium lock icon
Companies
Hint
You are given a string word, and an integer numFriends.

Alice is organizing a game for her numFriends friends. There are multiple rounds in the game, where in each round:

word is split into numFriends non-empty strings, such that no previous round has had the exact same split.
All the split words are put into a box.
Find the lexicographically largest string from the box after all the rounds are finished.

 

Example 1:

Input: word = "dbca", numFriends = 2

Output: "dbc"

Explanation: 

All possible splits are:

"d" and "bca".
"db" and "ca".
"dbc" and "a".
Example 2:

Input: word = "gggg", numFriends = 4

Output: "g"

Explanation: 

The only possible split is: "g", "g", "g", and "g".

 

Constraints:

1 <= word.length <= 5 * 103
word consists only of lowercase English letters.
1 <= numFriends <= word.length
*/

/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
     if (numFriends == 1)
        return word;
    let n = word.length;
    let split_length = n - numFriends, m = '', cur = '';
    for (let i = 0; i < n; i++) {
        cur = word.slice(i, i + split_length + 1);
        if (cur > m) {
            m = cur;
        }
    }
    return m;
};

console.log(answerString("dbca", 2)); // Output: "dbc"
console.log(answerString("gggg", 4)); // Output: "g"
console.log(answerString("abcd", 3)); // Output: "cde"


// // Assuming db methods return Promises or are promisified using util.promisify

// async function handleDataFlow() {
//   try {
//     let data = await db.getData();
//     data.a = "test";
//     data.b = 1111;

//     data = await db.processData(data);
    
//     await db.saveData(data);

//     console.log("finished");
//   } catch (err) {
//     console.error(err);
//   }
// }

// handleDataFlow();