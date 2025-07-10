/*
3440. Reschedule Meetings for Maximum Free Time II

You are given an integer eventTime denoting the duration of an event. You are also given two integer arrays startTime and endTime, each of length n.

These represent the start and end times of n non-overlapping meetings that occur during the event between time t = 0 and time t = eventTime, where the ith meeting occurs during the time [startTime[i], endTime[i]].

You can reschedule at most one meeting by moving its start time while maintaining the same duration, such that the meetings remain non-overlapping, to maximize the longest continuous period of free time during the event.

Return the maximum amount of free time possible after rearranging the meetings.

Note that the meetings can not be rescheduled to a time outside the event and they should remain non-overlapping.

Note: In this version, it is valid for the relative ordering of the meetings to change after rescheduling one meeting.


Example 1:

Input: eventTime = 5, startTime = [1,3], endTime = [2,5]

Output: 2

Explanation:

Reschedule the meeting at [1, 2] to [2, 3], leaving no meetings during the time [0, 2].

Example 2:

Input: eventTime = 10, startTime = [0,7,9], endTime = [1,8,10]

Output: 7

Explanation:

Reschedule the meeting at [0, 1] to [8, 9], leaving no meetings during the time [0, 7].

Example 3:

Input: eventTime = 10, startTime = [0,3,7,9], endTime = [1,4,8,10]

Output: 6

Explanation:

Reschedule the meeting at [3, 4] to [8, 9], leaving no meetings during the time [1, 7].

Example 4:

Input: eventTime = 5, startTime = [0,1,2,3,4], endTime = [1,2,3,4,5]

Output: 0

Explanation:

There is no time during the event not occupied by meetings.
*/

/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    const n = startTime.length;
    if (n === 0) return eventTime;

    const gaps = Array(n + 1).fill(0);
    gaps[0] = startTime[0];

    for (let i = 1; i < n; i++) {
        gaps[i] = startTime[i] - endTime[i - 1];
    }
    gaps[n] = eventTime - endTime[n - 1];

    const largestRight = Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        largestRight[i] = Math.max(largestRight[i + 1], gaps[i + 1]);
    }

    let maxFree = 0, largestLeft = 0;
    for (let i = 1; i <= n; i++) {
        const duration = endTime[i - 1] - startTime[i - 1];
        const canFitLeft = largestLeft >= duration;
        const canFitRight = largestRight[i] >= duration;

        if (canFitLeft || canFitRight) {
            const merged = gaps[i - 1] + gaps[i] + duration;
            maxFree = Math.max(maxFree, merged);
        }

        maxFree = Math.max(maxFree, gaps[i - 1] + gaps[i]);
        largestLeft = Math.max(largestLeft, gaps[i - 1]);
    }

    return maxFree;

};

// Example usage:
console.log(maxFreeTime(5, [1, 3], [2, 5])); // Output: 2
console.log(maxFreeTime(10, [0, 7, 9], [1, 8, 10])); // Output: 7
console.log(maxFreeTime(10, [0, 3, 7, 9], [1, 4, 8, 10])); // Output: 6
console.log(maxFreeTime(5, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5])); // Output: 0
console.log(maxFreeTime(10, [0, 2, 4], [1, 3, 5])); // Output: 5
console.log(maxFreeTime(15, [1, 3, 5], [2, 4, 6])); // Output: 9