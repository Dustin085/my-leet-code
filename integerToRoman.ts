// https://leetcode.com/problems/integer-to-roman/description/
function intToRoman(num: number): string {
    let result = '';
    interface Roman {
        one: string,
        five: string,
    };
    const roman: Roman[] = [
        { one: 'I', five: 'V' },
        { one: 'X', five: 'L' },
        { one: 'C', five: 'D' },
        { one: 'M', five: '' }
    ];
    let index = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit === 9) {
            result = roman[index].one + roman[index + 1].one + result;
        } else if (digit === 4) {
            result = roman[index].one + roman[index].five + result;
        } else if (digit < 4) {
            for (let i = 0; i < digit; i++) {
                result = roman[index].one + result;
            }
        } else {
            for (let i = 0; i < digit - 5; i++) {
                result = roman[index].one + result;
            }
            result = roman[index].five + result;
        }
        index++;
        num = Math.floor(num / 10);
    };
    return result;
};

const testArray = [3749, 58, 1994];

testArray.forEach(num => { console.log(intToRoman(num)) });