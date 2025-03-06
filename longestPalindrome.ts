// https://leetcode.com/problems/longest-palindromic-substring/

// V2 after read solution
function longestPalindrome(s: string): string {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        // odd length longest palindrome and even length one
        const oddLongestPalindrome = expandAroundCenter(i, i);
        const evenLongestPalindrome = expandAroundCenter(i, i + 1);
        const longestPalindromeForI = oddLongestPalindrome.length > evenLongestPalindrome.length ? oddLongestPalindrome : evenLongestPalindrome;
        result = longestPalindromeForI.length > result.length ? longestPalindromeForI : result;
    };

    return result;

    function expandAroundCenter(left: number, right: number): string {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
}

// V1 failed
// function longestPalindrome(s: string): string {
//     let result = '';
//     let left = 0;
//     const subStringArr: string[] = [];
//     for (let right = 0; right < s.length; right++) {
//         subStringArr.push(s[right]);
//         if (subStringArr.length > result.length && checkIsPalindrome(subStringArr)) {
//             result = subStringArr.join();
//         };

//     };
//     return result;

//     function checkIsPalindrome(s: string | string[]) {
//         if (s.length === 0) { return false };
//         const sArr = (typeof s === 'string') ? s.split('') : s;
//         let lowPointer = 0;
//         let highPointer = sArr.length - 1;
//         while (lowPointer < highPointer) {
//             if (sArr[lowPointer] === sArr[highPointer]) {
//                 lowPointer += 1;
//                 highPointer -= 1;
//             } else {
//                 return false;
//             }
//         }
//         return true;
//     };
// }



// test case
const inputs: string[] = ['babad', 'cbbd'];
inputs.forEach(input => {
    console.log(longestPalindrome(input));
});
// console.log(checkIsPalindrome(['a','b','a']));