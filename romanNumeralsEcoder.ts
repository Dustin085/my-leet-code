// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/typescript

export function romanNumeralsEcoder(number: number): string {
    let result = "";
    const romanNumMapping: Record<string, string> = { "1": "I", "5": "V", "10": "X", "50": "L", "100": "C", "500": "D", "1000": "M" };

    let offset = 0;
    while (number >= 1) {
        const digit = number % 10;
        const romanOne = romanNumMapping[String(10 ** offset)];
        const romanFive = romanNumMapping[String((10 ** offset) * 5)];
        const romanTen = romanNumMapping[String(10 ** (offset + 1))]
        if (digit < 4) {
            for (let i = 0; i < digit; i++) {
                result = romanOne + result;
            }
        } else if (digit === 4) {
            result = romanOne + romanFive + result;
        } else if (digit === 9) {
            result = romanOne + romanTen + result;
        } else {
            let romanLetter = romanFive;
            for (let i = 0; i < digit - 5; i++) {
                romanLetter = romanLetter + romanOne;
            }
            result = romanLetter + result;
        }
        number = Math.floor(number / 10);
        offset++;
    }

    return result;
}