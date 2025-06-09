export function divide(dividend: number, divisor: number): number {
    if (dividend === 0) return 0;
    let result = 0;

    let isNagetive = false;
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) { isNagetive = true; }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend >= 0) {
        dividend = dividend - divisor;
        result++;
    }
    result--;

    if (isNagetive) {
        if (result > 2 ** 31) { result = 2 * 31 };
        return -result;
    } else {
        if (result > 2 ** 31 - 1) { result = 2 ** 31 - 1 };
        return result;
    }
}