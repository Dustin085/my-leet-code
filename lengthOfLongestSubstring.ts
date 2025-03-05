// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// V2
// 在sliding window裡面使用left and right更符合大眾習慣。
function lengthOfLongestSubstring(s: string): number {
    let result = 0;

    let left = 0;

    const charMap = new Map<string, number>();
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        const charIndex = charMap.get(currentChar);
        if (charIndex !== undefined && left <= charIndex) { left = charIndex + 1; };

        charMap.set(currentChar, right);

        result = Math.max(right - left + 1, result);
    };

    return result;
}

// V1
// function lengthOfLongestSubstring(s: string): number {
//     if (s.length === 0) { return 0 };
//     if (s.length === 1) { return 1 };
//     const ORDINAL_DIFF = 1;
//     let result = 0;
//     let lowPointer = 0;
//     let highPointer = 1;
//     const repeatedValueSet = new Set<string>();
//     while (lowPointer < s.length - 1) {
//         const lowChar = s[lowPointer];
//         const highChar = s[highPointer];
//         if (lowChar === highChar || repeatedValueSet.has(highChar)) {
//             result = Math.max(((highPointer - 1) - lowPointer) + ORDINAL_DIFF, result);
//             lowPointer += 1;
//             highPointer =lowPointer+1;
//             repeatedValueSet.clear();
//         } else if (highPointer + 1 > s.length - ORDINAL_DIFF) {
//             result = Math.max(highPointer - lowPointer + ORDINAL_DIFF, result);
//             lowPointer += 1;
//         } else {
//             repeatedValueSet.add(highChar);
//             highPointer += 1;
//         };

//     }
//     return result;
// }

// test case
const inputs: string[] = ['abcabcbb', 'bbbbb', 'pwwkew', '', 'ab', "dvdf"];
inputs.forEach(input => {
    console.log(lengthOfLongestSubstring(input));
});