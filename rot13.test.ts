import { describe, expect, test } from 'vitest';
import { cycleTheNum, rot13, rot13ForChar } from './rot13';

describe('Test for rot13', () => {
    const UPPERCASE_CODE_RANGE = [65, 90];
    const LOWERCASE_CODE_RANGE = [97, 122];

    test('test for sub function cycleTheNum', () => {
        expect(cycleTheNum(90, 2, [0, 90])).toBe(1);
        expect(cycleTheNum(90, 93, [0, 90])).toBe(1);
        expect(cycleTheNum(5, 1, [3, 5])).toBe(3);
        expect(cycleTheNum(5, 6, [3, 5])).toBe(5);

        expect(cycleTheNum('a'.charCodeAt(0), 13, LOWERCASE_CODE_RANGE)).toBe(110);
        expect(String.fromCharCode(cycleTheNum('a'.charCodeAt(0), 13, LOWERCASE_CODE_RANGE) as number)).toBe('n');
        expect(cycleTheNum('A'.charCodeAt(0), 13, UPPERCASE_CODE_RANGE)).toBe(78);
        expect(String.fromCharCode(cycleTheNum('A'.charCodeAt(0), 13, UPPERCASE_CODE_RANGE) as number)).toBe('N');
    })

    test('Test rot13ForChar', () => {
        expect(rot13ForChar('a')).toBe('n');
        expect(rot13ForChar('A')).toBe('N');
    })

    test('Test rot13', () => {
        expect(rot13('EBG13 rknzcyr.')).toBe('ROT13 example.');
    })
})