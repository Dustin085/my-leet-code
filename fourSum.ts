// https://leetcode.com/problems/4sum/description/

/**
 * V2 改成使用在固定次數時for迴圈，看leetcode裡大家的習慣都是如此
 * @param nums 
 * @param target 
 * @returns 
 */
function fourSum(nums: number[], target: number): number[][] {
    const result: number[][] = [];
    const numsClone = [...nums];
    numsClone.sort((a, b) => a - b);
    for (let a = 0; a < numsClone.length - 3; a++) {
        if (numsClone[a - 1] === numsClone[a]) continue;

        for (let b = a + 1; b < numsClone.length - 2; b++) {
            // b - a > 1，是為了避免在b = a + 1時的邏輯錯誤(誤將a當成了上一項)
            if (b - a > 1 && numsClone[b - 1] === numsClone[b]) continue;
            let c = b + 1;
            let d = numsClone.length - 1;
            while (c < d) {
                let sum = numsClone[a] + numsClone[b] + numsClone[c] + numsClone[d];
                if (sum === target) {
                    result.push([numsClone[a], numsClone[b], numsClone[c], numsClone[d]]);
                    while (numsClone[c] === numsClone[c + 1]) c++;
                    while (numsClone[d] === numsClone[d - 1]) d--;
                    c++;
                    d--;
                } else if (sum < target) {
                    while (numsClone[c] === numsClone[c + 1]) c++;
                    c++;
                } else if (sum > target) {
                    while (numsClone[d] === numsClone[d - 1]) d--;
                    d--;
                }
            };
        }
    };

    return result;
};

/**
 * V1 一開始的想法
 * @param nums 
 * @param target 
 * @returns 
 */
// function fourSum(nums: number[], target: number): number[][] {
//     const result: number[][] = [];
//     const numsClone = [...nums];
//     numsClone.sort((a, b) => a - b);
//     console.log(numsClone);
//     let a = 0;
//     while (a < numsClone.length - 3) {
//         let b = a + 1;

//         while (b < numsClone.length - 2) {
//             let c = b + 1;
//             let d = numsClone.length - 1;
//             while (c < d) {
//                 let sum = numsClone[a] + numsClone[b] + numsClone[c] + numsClone[d];
//                 if (sum === target) {
//                     result.push([numsClone[a], numsClone[b], numsClone[c], numsClone[d]]);
//                     while (numsClone[c] === numsClone[c + 1]) c++;
//                     while (numsClone[d] === numsClone[d - 1]) d--;
//                     c++;
//                     d--;
//                 } else if (sum < target) {
//                     while (numsClone[c] === numsClone[c + 1]) c++;
//                     c++;
//                 } else if (sum > target) {
//                     while (numsClone[d] === numsClone[d - 1]) d--;
//                     d--;
//                 }
//             };

//             while (numsClone[b] === numsClone[b + 1]) b++;
//             b++;
//         }

//         while (numsClone[a] === numsClone[a + 1]) a++;
//         a++;
//     }

//     return result;
// };

const nums = [2, 2, 2, 2, 2];
const target = 8;
console.log(fourSum(nums, target));
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));