import { describe, test, expect } from 'vitest';
import { removeDuplicates } from './removeDuplicates';

describe('將陣列中的重複整數移除，同時不能改變陣列內整數的排列，最後回傳剩下的不重複整數的數量k', () => {
    test('測試isHaveTheSameIntsFromStart是否正確', () => {
        expect(isHaveTheSameIntsFromStart([0, 1, 2, 3, 4], [0, 1, 2, 3], 4)).toBe(true);
        expect(isHaveTheSameIntsFromStart([0, 1, 2], [0, 1, 3], 4)).toBe(false);
    })

    test('測試customJudge是否正確', () => {
        const numsAfterRemoved = [1, 2];
        const expectedNums = [1, 2];
        expect(customJudge(numsAfterRemoved, expectedNums, 2)).toBe(true);
    })

    test('測試陣列[1,1,2]', () => {
        const nums = [1, 1, 2];
        const expectedNums = [1, 2];
        const ans = removeDuplicates(nums);
        expect(ans).toBe(expectedNums.length);
        expect(customJudge(nums, expectedNums, ans)).toBe(true);
    })

    test('測試陣列[0,0,1,1,1,2,2,3,3,4]', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expectedNums = [0, 1, 2, 3, 4];
        const ans = removeDuplicates(nums);
        expect(ans).toBe(expectedNums.length);
        expect(customJudge(nums, expectedNums, ans)).toBe(true);
    })
})

function customJudge(nums: number[], expectedNums: number[], ans: number): boolean {
    if (expectedNums.length !== ans) { return false };
    return isHaveTheSameIntsFromStart(nums, expectedNums, ans);
}

function isHaveTheSameIntsFromStart(nums1: number[], nums2: number[], checkAmount: number): boolean {
    for (let i = 0; i < checkAmount; i++) {
        if (nums1[i] !== nums2[i]) { return false; }
    }
    return true;
}