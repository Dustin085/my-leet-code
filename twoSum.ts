// https://leetcode.com/problems/two-sum/description/
function twoSum(nums: number[], target: number): number[] {
    const result: number[] = [];
    const sortedNums = Array.from(nums).sort((a, b) => a - b);

    let lowPointer = 0;
    let highPointer = sortedNums.length - 1;

    while (lowPointer < highPointer) {
        const sum = sortedNums[lowPointer] + sortedNums[highPointer];
        if (sum === target) { }
    }

    return result;
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));