// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript

export function narcissistic(value: number): boolean {
    let digit = 0;
    const initValue = value;
    const nums: number[] = [];
    while (value >= 1) {
        nums.push(value % 10);
        digit++;
        value = Math.floor(value / 10);
    }

    return nums.reduce((acc, cur) => { return acc + cur ** digit }, 0) === initValue;
}