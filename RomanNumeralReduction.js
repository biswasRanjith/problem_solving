/*
Given a Roman numeral string in decreasing order, the goal is to:
	1.	Parse the string to get its integer value.
	2.	Convert that integer back to its shortest possible Roman numeral representation.
	3.	If the input is already the shortest form, return it unchanged.
    
*/

function RomanNumeralReduction(str) {
    // Roman to integer map
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // Convert Roman numeral to integer
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += romanMap[str[i]];
    }
console.log("Total value of Roman numeral:", total);
    // Integer to Roman conversion (in reduced format)
    const intToRoman = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let result = '';
    for (const [value, numeral] of intToRoman) {
        while (total >= value) {
            result += numeral;
            total -= value;
        }
    }

    return result;
}

// For Coderbyte environment
// console.log(RomanNumeralReduction(readline())); 

// Example usage:
console.log(RomanNumeralReduction("XII")); // Output: "XII"
