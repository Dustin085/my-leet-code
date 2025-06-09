import { describe, test, expect } from 'vitest';
import { letterCombinations } from './letterCombinations';

describe("傳統手機英打的排列組合，給定數個2~9的數字，回傳所有可打出的英文字", () => {
    test('["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
        const digits = "23";
        expect(isStringArrayEqual(letterCombinations(digits), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])).toBe(true);
    })

    test('空字串', () => {
        const digits = "";
        expect(isStringArrayEqual(letterCombinations(digits), [])).toBe(true);
    })
})

function isStringArrayEqual(arr1: string[], arr2: string[]) {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((val, index) => val === arr2[index]);
}