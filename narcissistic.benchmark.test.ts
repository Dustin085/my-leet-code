import { describe, expect, test } from 'vitest';
import { narcissistic } from './narcissistic';

describe('narcissistic函式的效能測試: 數學版 vs 字串版', () => {
    test('比較 narcissistic 數學版與字串版的效能差距', () => {
        const runs = 100000;

        // warm-up（可選）
        for (let i = 0; i < 1000; i++) {
            narcissistic(9474);
            narcissisticString(9474);
        }

        const time1 = benchmark(narcissistic, runs, '數字版本');
        const time2 = benchmark(narcissisticString, runs, '字串版本');
        console.log(`效能差:${Math.round((Math.abs(time1 - time2) / (time1 + time2)) * 100)}%`);

        expect(true).toBe(true);
    })
})

function narcissisticString(value: number): boolean {
    const digits = value.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Number(d) ** power, 0);
    return sum === value;
}

function benchmark(fn: (v: number) => boolean, times: number, label: string): number {
    const startTime = performance.now();
    for (let i = 0; i < times; i++) {
        fn(9474);
    }
    const endTime = performance.now();

    const timeComsume = Math.round((endTime - startTime) * 100) / 100;
    console.log(`${label}，執行${times}次，耗時為${timeComsume}ms`);

    return timeComsume;
}