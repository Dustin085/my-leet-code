import { describe, expect, test } from 'vitest';
import { greedIsGood } from './greedIsGood';

describe('Test suite', () => {
    test('Basic test case', () => {
        expect(greedIsGood([4, 4, 4, 3, 3])).toBe(400);
        expect(greedIsGood([2, 3, 4, 6, 2])).toBe(0);
        expect(greedIsGood([1, 1, 1, 1, 1])).toBe(1200);
    })
})