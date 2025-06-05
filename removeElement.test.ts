import { describe, test, expect } from 'vitest';
import { removeElement } from './removeElement';

describe('將陣列中指定整數val的值移動到陣列末端，保持陣列前端為非val的整數，並回傳非val整數的個數k', () => {
    test('測試customJudege', () => {
        const numsAfterRemoved = [2, 2, 3, 3];
        const expectedNums = [2, 2];
        expect(customJudge(numsAfterRemoved, expectedNums, expectedNums.length)).toBe(true);
    })

    test('測試陣列[3,2,2,3]', () => {
        const nums = [3, 2, 2, 3];
        const val = 3;
        const expectedNums = [2, 2];
        const ans = removeElement(nums, val);
        expect(ans).toBe(expectedNums.length);
        expect(customJudge(nums, expectedNums, ans)).toBe(true);
    })

    test('測試陣列[0,1,2,2,3,0,4,2]', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        const expectedNums = [0, 0, 1, 3, 4];
        const ans = removeElement(nums, val);
        expect(ans).toBe(expectedNums.length);
        expect(customJudge(nums, expectedNums, ans)).toBe(true);
    })
})

function customJudge(numsAfterRemoved: number[], expectedNums: number[], ans: number): boolean {
    const sortedFront = numsAfterRemoved.splice(0, ans).sort((a, b) => a - b);
    for (let i = 0; i < ans; i++) {
        numsAfterRemoved[i] = sortedFront[i];
    }
    return isFrontElesTheSameBetweenTwoArr(numsAfterRemoved, expectedNums, ans);
}

function isFrontElesTheSameBetweenTwoArr(nums1: number[], nums2: number[], checkCount: number): boolean {
    for (let i = 0; i < checkCount; i++) {
        if (nums1[i] !== nums2[i]) { return false; };
    }
    return true;
}