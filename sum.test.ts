import { test, expect } from 'vitest';
import { sum } from './sum';

test('1 + 1 應該要等於 2', () => {
    expect(sum(1, 2)).toBe(3);
});