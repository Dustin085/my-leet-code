// https://www.codewars.com/kata/554f76dca89983cc400000bb/train/typescript

/**
 * 找出方程式x^2 - 4y^2 = n的所有正整數x和y
 * @param n 上述方程式中的n
 * @returns 方程式x^2 - 4y^2 = n的所有正整數解([x, y])
 */
export function diophantineEquation(n: number): [number, number][] {
    let result: [number, number][] = [];
    // (x+2y)(x-2y) = n
    // a = (x+2y), b = (x-2y)
    // ab = n
    // a + b = 2x => x = (a + b) / 2
    // a - b = 4y => y = (a - b) / 4
    // a >= b
    // b <= n ** 0.5
    let a: number, b: number, x: number, y: number;
    for (b = 1; b <= n ** 0.5; b++) {
        if (Number.isInteger(a = n / b)) {
            if (Number.isInteger(x = (a + b) / 2)) {
                if (Number.isInteger(y = (a - b) / 4)) {
                    result.push([x, y]);
                }
            }
        }
    }

    return result;
}