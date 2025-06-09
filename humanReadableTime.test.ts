import { describe, expect, test } from 'vitest';
import { humanReadableTime } from './humanReadableTime';

describe('將數字(秒數)轉換成可讀的時間字串(HH:MM:SS)', () => {
    test('', () => {
        expect(humanReadableTime(60)).toBe('00:01:00');
    })

    test('', () => {
        expect(humanReadableTime(359999)).toBe('99:59:59');
    })
})