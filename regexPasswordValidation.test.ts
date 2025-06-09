import { describe, expect, it, test } from 'vitest';
import { REGEXP } from './regexPasswordValidation';

describe('Test REGEXP', () => {
    doTest('fjd3IR9', true);
    doTest('ghdfj32', false);
    doTest('DSJKHD23', false);
    doTest('dsF43', false);
    doTest('4fdg5Fj3', true);
    doTest('DHSJdhjsU', false);
    doTest('fjd3IR9.;', false);
    doTest('fjd3  IR9', false);
    doTest('djI38D55', true);
    doTest('djI3_8D55', false);
    doTest('djI38D55@@', false);

    function doTest(str: string, expected: boolean): void {
        test(`test case : ${str}`, () => {
            console.log(`"${str}" is${expected ? '' : ' not'} a valid password\n`);
            expect(REGEXP.test(str)).toBe(expected);
        })
    }
})