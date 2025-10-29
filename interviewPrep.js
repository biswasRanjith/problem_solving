/* Capital one

Problem 1:
You’re given a list of transaction amounts.
 Write a function that returns a sorted list of only valid transactions — 
defined as even numbers greater than zero.
Example Input: [12, -4, 3, 10, 15, 22]
  Output: [10, 12, 22]


function validTransactions(transactions) {
  return transactions.filter(amt => amt > 0 && amt %2 == 0  )
}

console.log(validTransactions([12, -4, 3, 10, 15, 22]));

*/

/*
2. Group Customers by Spending (Medium)

Problem:
Given an array of customer purchases (objects with name and amount), 
group by customer name and return the total spend per customer, 
sorted by amount descending.

Example Input:
  [
    { name: "Alice", amount: 20 },
    { name: "Bob", amount: 5 },
    { name: "Alice", amount: 10 }
    { name: "Bob", amount: 40 }
  ]
  Output: [{ name: "Alice", total: 30 }, { name: "Bob", total: 45 }]
*/

/*
function groupCustomers(purchases) {
  let result  = new Map();
  for (let purchase of purchases){
    let {name , amount} = purchase;

    let curTotal = result.get(name) || 0;
    result.set(name, curTotal + amount);
  }

  return Array.from(result, ([name, total]) => ({name, total}));
}

console.log(groupCustomers([
    { name: "Alice", amount: 20 },
    { name: "Bob", amount: 5 },
    { name: "Alice", amount: 10 },
    { name: "Bob", amount: 40 }
  ]));
*/

/*

3. Balanced Brackets Validator (Medium-Hard)

Problem:
Given a string of brackets ()[]{}, determine if it’s balanced.
You’ll need to handle nested and mixed brackets correctly.
 // Example: "([]{})" -> true, "([)]" -> false

*/

/*
function isBalanced(s) {
  const stack = [];
  let map = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  };

  for(let char of s){
    if(char in map){
     let topElement =  stack.pop();
      if (topElement !== map[char]) {
                return false;
            }
    }else{
      stack.push(char);
    }
  }

  return stack.length? falase : true;

}
let s = "([]{})"
console.log(isBalanced(s))
*/

/*
4. Merge Sorted Arrays Without Duplicates (Medium)

Problem:
Combine two sorted arrays into one sorted array without duplicates.
 // Example: [1,2,4], [2,3,5] => [1,2,3,4,5]
*/

/*
function mergeSortedArrays(arr1, arr2) {
  let arr3 = new Set([...arr1, ...arr2]);
 return Array.from(arr3).sort();
}

console.log(mergeSortedArrays([1,2,4], [2,3,5]))
*/

/*
5. Odd-Even Rearrangement (Hard, Similar to Yours)

Problem:
Given a list of integers, rearrange the list so that all even numbers come first (sorted ascending), 
followed by all odd numbers (sorted descending).
// Input: [5, 2, 8, 3, 1, 4]
  // Output: [2, 4, 8, 5, 3, 1]
*/

/*
function sortOddEven(arr) {
  let arr1 = [...arr.filter(num => num % 2 === 0).sort(), ...arr.filter(num => num % 2 !== 0).sort()]
  
  return arr1;
}

console.log(sortOddEven([5, 2, 8, 3, 1, 4]))
*/

/*
1) Missing number in an array

Prompt:
You’re given an array of length n-1 containing unique integers from 1..n with exactly one missing. Return the missing number.

Example:
Input: [2, 3, 1, 5] → Output: 4
*/
/*
function missingNumber(arr) {
  let max = Math.max(...arr);
  let arr2 = new Set(arr)
  for(let i = 1; i<=max; i++){
    if(!arr2.has(i)){
      return i
    }
  }
}

console.log(missingNumber([2, 3, 1, 5]));
*/

/*
2) Session with max valid commands

Prompt:
Given a log (array of strings). A session starts with "start <sessionId>". All following lines until the next "start ..." are commands belonging to that session. Return the sessionId with the highest count of commands and the count. Ignore malformed lines.

Example input:
[
  "start sessionA",
  "command1", "command2", "command1", "command3",
  "start sessionB",
  "command1", "command2", "command1", "command3",
  "start sessionA",
  "command1", "command23", "command11", "command3",
  "start sessionC",
  "command1", "command2", "command1", "command3"
]
  */
/*
function maxCommands(logLines) {
let res = new Map();
let cur = null;

for(const line of logLines){

  if(line.startsWith("start ")){
    
    let sesId = line.slice(6).trim();
    
    if(sesId){
      cur = sesId;
      continue;
    }
  }
    if(cur){
      res.set(cur, (res.get(cur) || 0)+1);
    }
  
}
let high = {sesion: null, count: 0}
for(const [ses, count] of res){
    if(count > high.count){
      high.sesion = ses;
      high.count = count;
    }
}
return high
}
let log = [
  "start sessionA",
  "command1", "command2", "command1", "command3",
  "start sessionB",
  "command1", "command2", "command1", "command3",
  "start sessionA",
  "command1", "command23", "command11", "command3",
  "start sessionC",
  "command1", "command2", "command1", "command3"
]

console.log(maxCommands(log));
*/

/*
3) Print lines in tabloid format (word wrap)

Prompt:
Wrap input text to a given width. Break on spaces; do not split words. Preserve paragraphs (blank lines).

Example:
text = "This is a long line to wrap nicely.", width = 10
Output lines: ["This is a", "long line", "to wrap", "nicely."]

*/

function wrapText(text, width) {
  const words = text.split(/\s+/).filter(word => word.length > 0);
  let out = [];
  let curLine = "";
  for(const word of words){

    if(curLine === ""){
      curLine = word;
    }else{

      if(curLine.length+1+word.length <= width){
        curLine += " "+word;
      }else{
        out.push(curLine);
        curLine = word;
      }

    }

  }

  if(curLine !==""){
    out.push(curLine)
  }
return out
}

let text = "This is a long line to wrap nicely.";
let width = 10

console.log(wrapText(text, width));