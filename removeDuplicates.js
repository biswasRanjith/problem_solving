// function removeDuplicate( arr, n)
//     {
     
//     //     var s = new Set();

//     //     for (var i = 0;i<n;i++)
//     //         s.add(str[i]);
        
//     //     for (const v of s) {
//     //         console.log(v);
//     // }


// //2
//     // var lhs = new Set();
//     // for (var i = 0; i < str.length; i++)
//     //     lhs.add(str[i]);
//     // console.log( Array.from(lhs).join(''));


//     arr.forEach((element, idx) => {
//         arr[idx] = element.replace(/[^a-zA-Z0-9]/g, '');
//        });
//       var str=  arr.join(' ');
//     // console.log(arr)
//     return str;       

//     }
 
//     // Driver code
//         // var str = "geeksforgeeks";
//         var str =  ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"]
//         var n = str.length;
 
//        console.log(removeDuplicate(str, n));
 


function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var unsorted = [3, 45, 16, 37, 3, 99, 22];
  var sorted = quicksort(unsorted);
  
  console.log('Sorted array', sorted);