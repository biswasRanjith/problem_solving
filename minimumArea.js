/*

3195. Find the Minimum Area to Cover All Ones I

You are given a 2D binary array grid. Find a rectangle with horizontal and vertical sides with the smallest area, such that all the 1's in grid lie inside this rectangle.

Return the minimum possible area of the rectangle.

Example 1:

Input: grid = [[0,1,0],[1,0,1]]

Output: 6

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    const { min, max } = Math;
    let xLo = Infinity, yLo = xLo;
    let xHi = -Infinity, yHi = xHi;
    grid.forEach((row, i) =>
        row.forEach((bin, j) => {
            if (bin) {
                xLo = min(xLo, i), yLo = min(yLo, j);
                xHi = max(xHi, i), yHi = max(yHi, j);
            }
        })
    );
    return (xHi - xLo + 1) * (yHi - yLo + 1);
};

// Example usage:
console.log(minimumArea([[0,1,0],[1,0,1]])); // Output: 6
console.log(minimumArea([[1,0,0],[0,0,0],[0,0,1]])); // Output: 9
console.log(minimumArea([[0]])); // Output: 0
console.log(minimumArea([[1]])); // Output: 1