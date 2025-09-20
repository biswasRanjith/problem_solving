console.log(isValid("({[]})")); // Output: true
console.log(isValid("([)]"));   // Output: false
console.log(isValid("{[]}"));   // Output: true
console.log(isValid("("));      // Output: false



function isValid(s) {
    const stack  = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['     
    };
    for(let ch of s) {
        if(ch in map){
            let top = stack.pop();
            if(map[ch] !== top){
                return false;
            }
        }else{
                stack.push(ch);
            }
    }  
    return stack.length === 0;        
}
