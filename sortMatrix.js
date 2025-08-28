/*
3446. Sort Matrix by Diagonals

You are given an n x n square matrix of integers grid. Return the matrix such that:

The diagonals in the bottom-left triangle (including the middle diagonal) are sorted in non-increasing order.
The diagonals in the top-right triangle are sorted in non-decreasing order.
 

Example 1:

Input: grid = [[1,7,3],[9,8,2],[4,5,6]]

Output: [[8,2,3],[9,6,7],[4,5,1]]

*/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    const n = grid.length;

    // bottom-left triangle 
    for(let i=0; i<n; i++){
        const arr = [];
        for(let j=0; j<n-i; j++){
            arr.push(grid[i+j][j]);
        }
        arr.sort((a,b)=> b-a);
        for(let j=0; j<arr.length; j++){
            grid[i+j][j] = arr[j];
        }
    }

    //  top-right triangle
     for(let j=1; j<n; j++){
        const arr = [];
        for(let i=0; i<n-j; i++){
            arr.push(grid[i][j+i]);
        }
        arr.sort((a,b)=> a-b);
        for(let i=0; i<arr.length; i++){
            grid[i][j+i] = arr[i];
        }
    }

    return grid;
};

// Example usage:
console.log(sortMatrix([[1,7,3],[9,8,2],[4,5,6]])); // Output: [[8,2,3],[9,6,7],[4,5,1]]
console.log(sortMatrix([[3,3,1,1],[2,2,1,2],[1,1,1,2],[1,1,1,1]])); // Output: [[3,1,1,1],[3,2,1,1],[2,1,2,1],[1,1,2,1]]