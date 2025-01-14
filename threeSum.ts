// https://leetcode.com/problems/3sum/

/**
 * V2 - 參考過其他解答後的想法
 * @param nums 
 * @returns 
 */
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    const targetSum = 0;
    // 複製參數以免修改到原來的陣列，物件是使用引用地址傳遞，故修改nums會影響到其本體。
    const numsClone = [...nums];
    numsClone.sort((a, b) => a - b);
    // num1的index
    let i = 0;
    while (i < numsClone.length - 2) {
        // lowPointer，從i的下一個開始
        let j = i + 1;
        // highPointer，從陣列末端開始
        let k = numsClone.length - 1;
        while (j < k) {
            const sum = numsClone[i] + numsClone[j] + numsClone[k];
            if (sum === targetSum) {
                result.push([numsClone[i], numsClone[j], numsClone[k]]);
                // 跳過同樣的數值，因有經過排序，故同樣的值會相鄰
                while (numsClone[j] === numsClone[j + 1]) j++;
                while (numsClone[k] === numsClone[k - 1]) k--;
                j++;
                k--;
            } else if (sum < targetSum) {
                while (numsClone[j] === numsClone[j + 1]) j++;
                j++;
            } else if (sum > targetSum) {
                while (numsClone[k] === numsClone[k - 1]) k--;
                k--;
            }
        }

        while (numsClone[i] === numsClone[i + 1]) i++;
        i++;
    }

    return result;
};


/**
 * V1 - 一開始的想法
 * @param nums 
 * @returns 
 */
// function threeSum(nums: number[]): number[][] {
//     let result: number[][] = [];
//     const numsClone = [...nums];
//     while (numsClone.length > 0) {
//         let num1 = numsClone.shift();
//         if (num1 === undefined) { break; }
//         numsClone.forEach((num2, index) => {
//             const num3Arr = numsClone.filter((_val, index2) => {
//                 return index2 > index
//             })
//             let num3 = num3Arr.find((num) => { return num === -(num1 + num2) });
//             if (num3 != undefined) {
//                 const newArr = [num1, num2, num3];
//                 let isDup = false;
//                 result.forEach(arr => {
//                     if (arraysEqual(arr, newArr)) {
//                         isDup = true;
//                     };
//                 });
//                 if (!isDup) {
//                     result.push(newArr);
//                 }
//             }
//         })
//     }
//     function arraysEqual(a: Array<number>, b: Array<number>) {
//         a.sort();
//         b.sort();

//         if (a === b) return true;
//         if (a == null || b == null) return false;
//         if (a.length !== b.length) return false;

//         for (let i = 0; i < a.length; i++) {
//             if (a[i] !== b[i]) return false;
//         }

//         return true;
//     }

//     return result;
// };

const input = [1, 2, 4, 5, 6, 6, 4, -4, 0, 0, 0, 2];
console.log(threeSum(input));