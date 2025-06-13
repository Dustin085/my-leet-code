// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript

export function mexicanWave(str: string): string[] {
    const result: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result.push(replaceCharAt(str, i, str[i].toUpperCase()));
        }
    }
    return result;
}

function replaceCharAt(str: string, index: number, replacement: string) {
    if (index < 0 || index >= str.length) return str; // index 不合法就回傳原字串
    return str.slice(0, index) + replacement + str.slice(index + 1);
}