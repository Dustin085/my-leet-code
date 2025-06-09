import { describe, test, expect } from 'vitest';
import { divide } from './divide';

describe("", () => {
    test("", () => {
        const dividend = 10;
        const divisor = 3;
        expect(divide(dividend, divisor)).toBe(3);
    })

    test("", () => {
        const dividend = 7;
        const divisor = -3;
        expect(divide(dividend, divisor)).toBe(-2);
    })

    test("", () => {
        const dividend = 0;
        const divisor = 1;
        expect(divide(dividend, divisor)).toBe(0);
    })
})