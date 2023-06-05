// sum(2)(3)
// sum(2, 3)

// (2).plus(3)


const arr1 = [1, 2, 3, 4, 5] //5
const arr2 = ['a', 'b', 'c', 'd'] //4

function merge(arr1, arr2) {
   
var arr3 =[];
var returnData = [];    
if(arr1.length> arr2.length){
 arr3=arr1.splice(arr2.length)
}else{
  arr3=[...arr2];
}

for(var i = 0; i<arr3.length; i++){
    if(arr2.length < arr2.length - i){

    }
returnData.push(arr2[arr2.length - i]);
returnData.push(arr1[i]);
}

    return returnData   //['d', 1, 'c', 2, 'b', 3, 'a', 4, 5]
}

console.log(merge(arr1, arr2));