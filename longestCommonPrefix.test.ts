import { test, expect, describe } from 'vitest';
import { longestCommonPrefix } from './longestCommonPrefix';

describe('找出字串陣列的最長字母前綴', () => {
    test('測試陣列["flower", "flow", "flight"]，正解為"fl"', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    test('長度為零的陣列會回傳空字串', () => {
        expect(longestCommonPrefix([])).toBe('');
    });

    test('測試陣列["dog","racecar","car"]，正解為空字串', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe('');
    });
});
