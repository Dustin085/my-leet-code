// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/typescript

export function greedIsGood(dice: number[]): number {
    enum DiceSides {
        One = 1,
        Two,
        Three,
        Four,
        Five,
        Six,
    }

    type Rule = { count: number; side: DiceSides; score: number };
    const scoreRules: Rule[] = [
        { count: 3, side: DiceSides.One, score: 1000 },
        { count: 3, side: DiceSides.Six, score: 600 },
        { count: 3, side: DiceSides.Five, score: 500 },
        { count: 3, side: DiceSides.Four, score: 400 },
        { count: 3, side: DiceSides.Three, score: 300 },
        { count: 3, side: DiceSides.Two, score: 200 },
        { count: 1, side: DiceSides.One, score: 100 },
        { count: 1, side: DiceSides.Five, score: 50 },
    ];

    const sidesCount: Record<number, number> = {
        [DiceSides.One]: 0,
        [DiceSides.Two]: 0,
        [DiceSides.Three]: 0,
        [DiceSides.Four]: 0,
        [DiceSides.Five]: 0,
        [DiceSides.Six]: 0,
    }

    let score = 0;

    for (const side of dice) {
        sidesCount[side] += 1;
    }

    for (const rule of scoreRules) {
        if (sidesCount[rule.side] >= rule.count) {
            score += Math.floor(sidesCount[rule.side] / rule.count) * rule.score;
            sidesCount[rule.side] %= rule.count;
        }
    }

    return score;
}