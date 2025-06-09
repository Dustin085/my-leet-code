// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript

// 將數字(秒數)轉換成可讀的時間字串(HH:MM:SS)
export function humanReadableTime(seconds: number): string {
    if (seconds < 0) {
        throw new Error(
            '無效參數，秒數不可為負數(Invalid input, Seconds must be non-negative interger.)'
        )
    } else if (seconds > 359999) {
        throw new Error(
            '無效參數，秒數不可大於359999(Invalid input, Seconds must be less then or equal 359999)'
        )
    }

    const timeParts = ['00', '00', '00'] // [秒，分，時]
    const units = [60, 60] // [秒轉分，分轉時]

    for (let i = 0; i < units.length; i++) {
        timeParts[i] = numberToTwoCharString(seconds % units[i]);
        seconds = Math.floor(seconds / 60);

        // 最後一輪應補上最後一個timePart
        if (i === units.length - 1) {
            timeParts[i + 1] = numberToTwoCharString(seconds);
        }
    }

    return `${timeParts[2]}:${timeParts[1]}:${timeParts[0]}`;

    function numberToTwoCharString(num: number): string {
        if (num > 99) {
            return '99'
        } else if (num < 10) {
            return `0${num}`
        } else {
            return `${num}`;
        }
    }
}