import { describe, expect, test } from 'vitest';
import { diophantineEquation } from './diophantineEquation';

describe('', () => {
    test("basic tests", () => {
        expect(diophantineEquation(5)).toEqual([[3, 1]]);
        expect(diophantineEquation(12)).toEqual([[4, 1]]);
        expect(diophantineEquation(13)).toEqual([[7, 3]]);
        expect(diophantineEquation(16)).toEqual([[4, 0]]);
    });
})