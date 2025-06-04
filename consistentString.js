// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: 
let allowed = "ab";
let words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 



/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(let j=0;j<words.length;j++)
        {
            let a=words[j].split('');
         let b=true;
        for(let i of a)
            {
           
            if(!allowed.includes(i))
            {
                b = false;
               
            }
            
        }
        console.log(b)
        if(b===true){
            
            count++
        }
    }
    return count;
};

console.log(countConsistentStrings(allowed,words))
// {
//     let count=0
//     for(let j=0;j<words.length;j++)
//    {
//      let a=words[j].split('');
//      let b=true;
//     for(let i of a)
//     {
//         if(!allowed.includes(i))
//         {
//            b=false
//         }
       
//     }
//     if(b==true){count++}}
    
//     return count
// };

// let count = 0;
//     for (let i = 0; i < words.length; i++) {
//         const arr = [...new Set([...Array.from(words[i])])]
//         if (!arr.some(el => !allowed.includes(el))) count++;
//     };
//     return count;