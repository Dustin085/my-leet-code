// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/typescript

/**
 * Return a string after rot13. See Detail: <https://en.wikipedia.org/wiki/ROT13>
 * @param str String for rot13.
 * @returns String after rot13.
 */
export function rot13(str: string): string {
    const UPPERCASE_CODE_RANGE = [65, 90];
    const LOWERCASE_CODE_RANGE = [97, 122];

    return str.split('').map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= UPPERCASE_CODE_RANGE[0] && charCode <= UPPERCASE_CODE_RANGE[1]) {
            return rot13ForChar(char);
        } else if (charCode >= LOWERCASE_CODE_RANGE[0] && charCode <= LOWERCASE_CODE_RANGE[1]) {
            return rot13ForChar(char);
        }
        return char;
    }).join('');
}

/**
 * Rot13 a character.
 * @param char Character to rot13. Length of `char` should equal to 1.
 * @returns Character after rot13.
 */
export function rot13ForChar(char: string): string {
    if (char.length !== 1) { return char };

    const UPPERCASE_CODE_RANGE = [65, 90];
    const LOWERCASE_CODE_RANGE = [97, 122];
    const charCode = char.charCodeAt(0);

    if (charCode >= UPPERCASE_CODE_RANGE[0] && charCode <= UPPERCASE_CODE_RANGE[1]) {
        return getNewChar(char, UPPERCASE_CODE_RANGE);
    } else if (charCode >= LOWERCASE_CODE_RANGE[0] && charCode <= LOWERCASE_CODE_RANGE[1]) {
        return getNewChar(char, LOWERCASE_CODE_RANGE);
    }
    return char;

    function getNewChar(char: string, range: number[]) {
        const newCharCode = cycleTheNum(char.charCodeAt(0), 13, range);
        if (newCharCode !== null) {
            return String.fromCharCode(newCharCode);
        } else {
            return char;
        }
    }
}

/**
 * Cycle a number between a range.
 * @param num Initial number.
 * @param plus Plus number. Initial number will plus this number.
 * @param range Number will cycle in this range.
 * @returns Number after plus and cycle, return null if input is invalid.
 */
export function cycleTheNum(num: number, plus: number, range: number[]): number | null {
    if (range.length !== 2) { return null };
    if (num < range[0]) { return null };

    return ((num + plus - range[0]) % (range[1] - range[0] + 1)) + range[0];
}