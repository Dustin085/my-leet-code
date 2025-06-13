import { describe, expect, test } from 'vitest';
import { mexicanWave } from './mexicanWave';

describe('', () => {
    test('', () => {
        expect(mexicanWave('hello')).toEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
        expect(mexicanWave('two words')).toEqual( ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']);
        expect(mexicanWave('')).toEqual( []);
    })
})