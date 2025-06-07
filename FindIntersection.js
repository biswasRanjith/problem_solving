/*
Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

function FindIntersection(strArr) { 

  // code goes here  
  // console.log(strArr[0])
  let s = [];
  let strArr1 = strArr[0].split(', ');
  let strArr2 = strArr[1].split(', ');

  for(let i = 0; i<strArr1.length; i++){
    if(strArr2.includes(strArr1[i])){
      s.push(strArr1[i]);
    }
  }
  if(s.length==0){
    return false
  }
  return s.toString(); 


//    var result = strArr2.filter(x => strArr1.find(a => a === x))
//   return result.length > 0 ? result.join(',') : 'false'

}
   
// keep this function call here 
// console.log(FindIntersection(readline()));


// Example usage:
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // Output: "1,4,13"
// console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])); // Output: "1,9,10"       

console.log(FindIntersection(["5, 10, 15", "10, 20, 30"])); // Output: "10"
console.log(FindIntersection(["2, 4, 6", "1, 3, 5"])); // Output: false