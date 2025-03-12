// https://leetcode.com/problems/shortest-palindrome/

// V2
function shortestPalindrome(s: string): string {
    let result = '';
    const longestPalindromeFromStart = getLongestPalindromeFromStart(s);
    if (longestPalindromeFromStart.length === s.length) {
        result = longestPalindromeFromStart;
    } else {
        const stringToInsert = s.substring(longestPalindromeFromStart.length).split('').reverse().join('');
        result = stringToInsert + s;
    }
    return result;

    /**
     * 返回從頭開始的最長回文，必須是從index=0開始的回文。
     * @param s 目標字串
     * @returns 從頭開始的最長回文
     */
    function getLongestPalindromeFromStart(s: string): string {
        let result = '';
        for (let i = 0; i < s.length; i++) {
            let firstHalfString = '';
            let lastHalfString = '';
            const subStr = s.substring(0, i + 1);
            if (subStr.length % 2 != 0) {
                const midIndex = Math.floor(subStr.length / 2);
                firstHalfString = subStr.substring(0, midIndex);
                lastHalfString = subStr.substring(midIndex + 1);
            } else {
                const midIndex = (subStr.length / 2) - 1;
                firstHalfString = subStr.substring(0, midIndex + 1);
                lastHalfString = subStr.substring(midIndex + 1);
            }

            if (firstHalfString === lastHalfString.split('').reverse().join('')) {
                result = subStr.length > result.length ? subStr : result;
            }
        }

        return result;

    }
}

// V1 在長字串時超時
// function shortestPalindrome(s: string): string {
//     let result = '';
//     const longestPalindromeFromStart = getLongestPalindromeFromStart(s);
//     if (longestPalindromeFromStart.length === s.length) {
//         result = longestPalindromeFromStart;
//     } else {
//         const stringToInsert = s.substring(longestPalindromeFromStart.length).split('').reverse().join('');
//         result = stringToInsert + s;
//     }
//     return result;

//     /**
//      * 返回從頭開始的最長回文，必須是從index=0開始的回文。
//      * @param s 目標字串
//      * @returns 從頭開始的最長回文
//      */
//     function getLongestPalindromeFromStart(s: string): string {
//         let result = '';

//         for (let i = 0; i < s.length; i++) {
//             // odd length longest palindrome and even length one
//             const oddLongestPalindrome = expandAroundCenter(i, i);
//             const evenLongestPalindrome = expandAroundCenter(i, i + 1);
//             let longestPalindrome = '';
//             if (oddLongestPalindrome !== null && evenLongestPalindrome !== null) {
//                 longestPalindrome = oddLongestPalindrome.length > evenLongestPalindrome.length ? oddLongestPalindrome : evenLongestPalindrome;
//             } else {
//                 longestPalindrome = oddLongestPalindrome || evenLongestPalindrome || '';
//             }
//             result = longestPalindrome.length > result.length ? longestPalindrome : result;
//         };

//         return result;

//         function expandAroundCenter(left: number, right: number): string | null {
//             while (left >= 0 && right < s.length && s[left] === s[right]) {
//                 left--;
//                 right++;
//             }
//             return left < 0 ? s.substring(left + 1, right) : null;
//         }
//     }
// }

const inputs = ['aacecaaa', 'abcd', 'bbbb', ''];
inputs.forEach(input => {
    console.log(shortestPalindrome(input));
});