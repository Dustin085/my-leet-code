// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    let stack: string[] = [];
    for (const char of s) {
        if (char in mapping) {
            if (stack.pop() !== mapping[char]) { return false }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

const inputs = ["()", "()[]{}", "(]", "([])", "([)]"];
for (const input of inputs) {
    console.log(isValid(input));
};