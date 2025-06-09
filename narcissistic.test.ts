import { describe, expect, test } from 'vitest';
import { narcissistic } from './narcissistic';

describe('測試函式narcissistic的正確與否，此函式應能判斷一數字是否為水仙花數(自戀數)', () => {
    test('測試數字153', () => {
        expect(narcissistic(153)).toBe(true);
    })

    test('測試數字7', () => {
        expect(narcissistic(7)).toBe(true);
    })

    test('測試數字1634', () => {
        expect(narcissistic(1634)).toBe(true);
    })
})