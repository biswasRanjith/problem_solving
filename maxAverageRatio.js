/*
1792. Maximum Average Pass Ratio
Solved
Medium
Topics
premium lock icon
Companies
Hint
There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.

You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

 

Example 1:

Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
Output: 0.78333
Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
Example 2:

Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
Output: 0.53485
*/

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const gain = (p, t) => (p + 1) / (t + 1) - p / t;
    let pq = new MaxHeap();
    for (let [p, t] of classes) {
        pq.push([gain(p, t), p, t]);
    }
    while (extraStudents-- > 0) {
        let [g, p, t] = pq.pop();
        p++; t++;
        pq.push([gain(p, t), p, t]);
    }
    let sum = 0;
    while (pq.size() > 0) {
        let [g, p, t] = pq.pop();
        sum += p / t;
    }
    return sum / classes.length;
};


class MaxHeap {
    constructor() { this.data = []; }
    push(val) {
        this.data.push(val);
        this._up(this.data.length - 1);
    }
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this._down(0);
        return top;
    }
    _up(i) {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.data[p][0] >= this.data[i][0]) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }
    _down(i) {
        let n = this.data.length;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, max = i;
            if (l < n && this.data[l][0] > this.data[max][0]) max = l;
            if (r < n && this.data[r][0] > this.data[max][0]) max = r;
            if (max === i) break;
            [this.data[i], this.data[max]] = [this.data[max], this.data[i]];
            i = max;
        }
    }
    size() { return this.data.length; }
}


// Example usage:
console.log(maxAverageRatio([[1,2],[3,5],[2,2]], 2)); // Output: 0.78333
console.log(maxAverageRatio([[2,4],[3,9],[4,5],[2,10]], 4)); // Output: 0.53485