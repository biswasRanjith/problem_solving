// sum(2)(3)
// sum(2, 3)

// (2).plus(3)


// const arr1 = [1, 2, 3, 4, 5] //5
// const arr2 = ['a', 'b', 'c', 'd'] //4

// function merge(arr1, arr2) {
   
// var arr3 =[];
// var returnData = [];    
// if(arr1.length> arr2.length){
//  arr3=arr1.splice(arr2.length)
// }else{
//   arr3=[...arr2];
// }

// for(var i = 0; i<arr3.length; i++){
//     if(arr2.length < arr2.length - i){

//     }
// returnData.push(arr2[arr2.length - i]);
// returnData.push(arr1[i]);
// }

//     return returnData   //['d', 1, 'c', 2, 'b', 3, 'a', 4, 5]
// }

// console.log(merge(arr1, arr2));

// Write a well structured program to take below input and give the given output. make sure you cover all the edge cases.
// Input: sssmmmnnnAAAmmmmmaaaaAAAAA
// Output: s3 m3 n3 A3 m5 a4 A5


function charCount(str){
  if(str.length === 0)
    return 0;
  
  var count = 1;
  let result = '';
  for(var i =1;i<=str.length;i++){
    if(str[i] == str[i-1]){
      count++
    }else{
        console.log(str[i-1]+count)
        count = 1;
    }
  }
}

var str = 'sssmmmnnnAAAmmmmmaaaaAAAAA';
console.log(charCount(str));