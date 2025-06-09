// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// 根據上述網址內的圖片做傳統手機英打的排列組合，給定數個2~9的數字，回傳所有可打出的英文字
const digitToLettersMapping: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}

export function letterCombinations(digits: string): string[] {
    const result: string[] = [];
    if (digits.length === 0) { return result };
    combinations("", digits, 0, result);

    function combinations(prefix: string, digits: string, offset: number, result: string[]) {
        if (offset >= digits.length) {
            result.push(prefix);
            return
        }
        const letters = digitToLettersMapping[digits[offset]];
        for (let i = 0; i < letters.length; i++) {
            combinations(prefix + letters[i], digits, offset + 1, result);
        }
    }

    return result;
}