import { describe, expect, test } from 'vitest';
import { gapInPrimes, isPrime } from './gapInPrimes';

describe('驗證gapInPrimes函式，給定間隙g與數值範圍m-n，求數值範圍內第一個間隙為g的質數對，若無則回傳null', () => {
    test('驗證isPrime函式是否正確', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(6)).toBe(false);
    })

    test('basic test', () => {
        expect(gapInPrimes(2,100,110)).toEqual([101, 103]);
        expect(gapInPrimes(4,100,110)).toEqual([103, 107]);
        expect(gapInPrimes(6,100,110)).toEqual(null);
        expect(gapInPrimes(8,300,400)).toEqual([359, 367]);
    })
})