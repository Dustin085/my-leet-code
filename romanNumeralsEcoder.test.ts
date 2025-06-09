import { describe, expect, test } from 'vitest';
import { romanNumeralsEcoder } from './romanNumeralsEcoder'

describe('將阿拉伯數字轉換成羅馬數字', () => {
    test('阿拉伯數字1000', () => {
        expect(romanNumeralsEcoder(1000)).toBe("M");
    })

    test('阿拉伯數字4', () => {
        expect(romanNumeralsEcoder(4)).toBe("IV");
    })

    testCase(4, "IV");
    testCase(1990, "MCMXC");
    testCase(2008, "MMVIII");
    testCase(61, "LXI");


})

function testCase(input: number, expectedAns: string): void {
    test(`阿拉伯數字${input}`, () => {
        expect(romanNumeralsEcoder(input)).toBe(expectedAns);
    })
}