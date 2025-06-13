// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/typescript

export function gapInPrimes(g: number, m: number, n: number): number[] | null {
    if (n <= m) { return null };
    for (let i = m; i <= n - g; i++) {
        if (isPrime(i)) {
            let nextPrime: number | null = null;
            for (let j = i + 1; j <= n; j++) {
                if (isPrime(j)) {
                    nextPrime = j;
                    break;
                }
            }
            if (nextPrime !== null && nextPrime - i === g) {
                return [i, i + g];
            }
        }
    }

    return null;
}

export function isPrime(num: number): boolean {
    if (num < 2) { return false };
    for (let i = 2; i <= num ** 0.5; i++) {
        if (num % i === 0) { return false };
    }

    return true;
}