// https://leetcode.com/problems/longest-common-prefix/description/

export function longestCommonPrefix(strs: string[]): string {
    let result = strs.shift();
    if (result === undefined) { return '' };
    for (const str of strs) {
        for (let i = 0; i < result.length; i++) {
            if (str[i] != result[i]) { result = result.slice(0, i); }
            if (result.length === 0) { return '' };
        }
    }
    return result;
};